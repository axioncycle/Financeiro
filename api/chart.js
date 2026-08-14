// Vercel Serverless Function — histórico de cotação (Yahoo Finance) para gráfico
// Dados públicos de mercado; CORS liberado para uso no app Pessoal.
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const sym = (req.query.symbol || '').toString().trim();
  if (!sym) return res.status(400).json({ error: 'informe ?symbol=AAPL' });
  let range = (req.query.range || '1y').toString().trim();
  if (!/^(1mo|3mo|6mo|ytd|1y|2y|5y|max)$/.test(range)) range = '1y';

  try {
    const url = 'https://query1.finance.yahoo.com/v8/finance/chart/' + encodeURIComponent(sym) +
      '?interval=1d&range=' + encodeURIComponent(range);
    const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const j = await r.json();
    const result = j && j.chart && j.chart.result && j.chart.result[0];
    if (!result) return res.status(404).json({ error: 'sem dados' });
    const ts = result.timestamp || [];
    const q = (result.indicators && result.indicators.quote && result.indicators.quote[0]) || {};
    const closes = q.close || [];
    const meta = result.meta || {};
    const points = [];
    for (let i = 0; i < ts.length; i++) {
      if (closes[i] != null) points.push({ t: ts[i], c: Math.round(closes[i] * 100) / 100 });
    }
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    return res.status(200).json({
      symbol: sym,
      currency: meta.currency || '',
      name: meta.shortName || meta.longName || sym,
      price: meta.regularMarketPrice || (points.length ? points[points.length - 1].c : null),
      range: range,
      points: points
    });
  } catch (e) {
    return res.status(500).json({ error: 'falha ao buscar histórico' });
  }
}
