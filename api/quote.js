// Vercel Serverless Function — cotação de ações ao vivo (Yahoo Finance)
// Dados públicos de mercado; CORS liberado para uso no app Pessoal.
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const raw = (req.query.symbols || '').toString();
  const symbols = raw.split(',').map(s => s.trim()).filter(Boolean).slice(0, 50);
  if (!symbols.length) return res.status(400).json({ error: 'informe ?symbols=AAPL,NVDA' });

  const out = {};
  await Promise.all(symbols.map(async (sym) => {
    try {
      const url = 'https://query1.finance.yahoo.com/v8/finance/chart/' + encodeURIComponent(sym) + '?interval=1d&range=1d';
      const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const j = await r.json();
      const meta = j && j.chart && j.chart.result && j.chart.result[0] && j.chart.result[0].meta;
      const price = meta && (meta.regularMarketPrice || meta.previousClose);
      if (price) out[sym] = { price: price, currency: meta.currency || '' };
    } catch (e) { /* ignora símbolo com erro */ }
  }));

  res.setHeader('Cache-Control', 's-maxage=60');
  return res.status(200).json(out);
}
