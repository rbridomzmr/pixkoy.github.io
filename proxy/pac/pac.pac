var domains = {
  "example.com": 1
  ...
};

var proxy = 'PROXY proxy.example.com:8080;', direct = 'DIRECT;';

function FindProxyForURL(url, host) {
  var pos;
  do {
    if (domains.hasOwnProperty(host)) {
      return proxy;
    }
    pos = host.indexOf(".") + 1;
    host = host.slice(pos);
  } while(pos>1);
  return direct;
}