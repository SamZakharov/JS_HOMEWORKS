const parseUrl = function (url) {
  const parsedUrl = new URL(url);

  return {
    href: parsedUrl.href,
    protocol: parsedUrl.protocol,
    host: parsedUrl.host,
    hostname: parsedUrl.hostname,
    port: parsedUrl.port,
    pathname: parsedUrl.pathname,
    search: parsedUrl.search,
    hash: parsedUrl.hash,
    origin: parsedUrl.origin,
    searchParams: Object.fromEntries(parsedUrl.searchParams.entries()),
  };
};

const currentLocation = parseUrl(window.location.href);
console.log(currentLocation);
