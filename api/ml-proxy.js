// Vercel Serverless Function — proxy para API Mercado Livre (evita CORS)
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { url, method = 'GET', headers = {}, formBody } = req.body;

    if (!url || !url.startsWith('https://api.mercadolibre.com')) {
      return res.status(400).json({ error: 'URL inválida' });
    }

    const fetchOpts = { method, headers };
    if (formBody) {
      fetchOpts.body = formBody;
    }

    const response = await fetch(url, fetchOpts);
    const data = await response.json().catch(() => ({ error: 'Resposta inválida' }));

    return res.status(response.status).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
