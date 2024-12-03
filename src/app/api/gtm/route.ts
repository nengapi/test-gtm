export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const gtmId = searchParams.get('id');
  const src = searchParams.get('src');
  const cond = searchParams.get('cond');
  const gtm = searchParams.get('gtm');

  const response = await fetch(
    `https://www.googletagmanager.com/debug/bootstrap?id=${gtmId}&src=${src}&cond=${cond}&gtm=${gtm}`
  );

  const data = await response.text();

  return new Response(data, {
    headers: {
      'Content-Type': 'text/javascript',
      'Access-Control-Allow-Origin': '*',
    },
  });
} 