export default async (request, context) => {
    const url = new URL(request.url);
  
    // Redirect all routes to index.html
    if (!url.pathname.startsWith('/assets/') && !url.pathname.endsWith('.js') && !url.pathname.endsWith('.css')) {
      return Response.redirect('/index.html', 200);
    }
  
    // Continue with the request for assets (JS, CSS, etc.)
    return context.next();
  };