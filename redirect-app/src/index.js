/**
 * This worker function redirects requests to https://developers.cloudflare.com
 * if the request comes from curl without a cookie cf-noredir=true
 * otherwise it returns the original url
 */

const redirectLocation = 'https://developers.cloudflare.com';
export default {
  async fetch(request, env, ctx) {
    const userAgent = request.headers.get('user-agent') ?? '';
    const cookies = request.headers.get('Cookie') ?? '';
    if (userAgent.includes('curl') && !cookies.includes('cf-noredir=true')) {
      return Response.redirect(redirectLocation, 302);
    }
    return fetch(request, env, ctx);
  },
};
