exports.handler = async (event) => {
  const { author, keyword } = event.queryStringParameters || {};
  const APP_ID = process.env.RAKUTEN_APP_ID;
  const AFFILIATE_ID = process.env.RAKUTEN_AFFILIATE_ID || '';

  const params = new URLSearchParams({
    applicationId: APP_ID,
    hits: 30,
  });
  if (author) params.set('author', author);
  if (keyword) params.set('keyword', keyword);
  if (AFFILIATE_ID) params.set('affiliateId', AFFILIATE_ID);

  const res = await fetch(
    `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?${params}`
  );
  const data = await res.json();

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };
};