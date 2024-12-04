import { isUrlAllowed } from '@superside-oss/partytown-gtm/util';

const PASS_THROUGH_HEADERS = [
  'content-type',
  'cache-control',
  'pragma',
  'expires',
  'date',
  'x-gtm-versionid',
  'content-security-policy',
  'x-xss-protection',
  'x-frame-options',
  'x-content-type-options'
];

function parseUrl(url: any): URL | null {
  try {
    console.log('Attempting to parse URL:', url);
    const parsedUrl = new URL(url);
    console.log('URL parsed successfully:', parsedUrl.toString());
    return parsedUrl;
  } catch (err) {
    console.log('Failed to parse URL:', err);
  }
  return null;
}

async function getResponse(maybeUrl: string | null) {
  console.log('getResponse called with URL:', maybeUrl);
  
  if (!maybeUrl) {
    console.log('URL is not set, throwing error');
    throw new Error('URL is not set');
  }

  const url = parseUrl(decodeURIComponent(maybeUrl));
  console.log('Decoded and parsed URL:', url?.toString());

  if (!(url && isUrlAllowed(url))) {
    console.log('URL is not allowed:', url?.toString());
    throw new Error('URL is not on the whitelist');
  }
  console.log('URL is allowed, proceeding with fetch');

  const response = await fetch(url);
  console.log('Fetch response status:', response.status);

  if (response.status >= 400) {
    console.log('Invalid response status code:', response.status);
    throw new Error('Invalid response status code');
  }

  const data = await response.text();
  console.log('Response data length:', data.length);
  
  const headers: { [key: string]: string } = {};
  console.log('Processing response headers');

  PASS_THROUGH_HEADERS.forEach((headerName) => {
    const headerValue = response.headers.get(headerName);
    console.log(`Header ${headerName}:`, headerValue || 'not present');

    if (headerValue) {
      headers[headerName] = headerValue;
    }
  });

  return new Response(data, {
    status: response.status,
    headers
  })
}

export async function GET(req: Request) {
  console.log('GET request received:', req.url);
  const originalUrl = new URL(req.url);
  const forwardUrl = originalUrl.searchParams.get('forward');
  console.log('Forward URL parameter:', forwardUrl);

  try {
    const response = await getResponse(forwardUrl);
    console.log('Response successfully generated');
    return response;
  } catch (err) {
    console.log('Error occurred:', err);
    return new Response('Not found', {
      status: 404,
      headers: {
        'Content-Type': 'text/plain'
      }
    });
  }
}
