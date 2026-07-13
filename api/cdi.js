// Vercel Serverless Function — taxa CDI anual (Banco Central, série 4389)
// CDI anualizado base 252 (% a.a.). CORS liberado para o app Pessoal.
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();
  try {
    const r = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.4389/dados/ultimos/1?formato=json', { headers: { 'Accept': 'application/json' } });
    const j = await r.json();
    const v = Array.isArray(j) && j[0] && parseFloat(String(j[0].valor).replace(',', '.'));
    res.setHeader('Cache-Control', 's-maxage=3600');
    return res.status(200).json({ cdi: v || null, data: (j && j[0] && j[0].data) || null });
  } catch (e) {
    return res.status(200).json({ cdi: null, error: String(e) });
  }
}
