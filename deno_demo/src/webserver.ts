import { listenAndServe } from '../deno_std/net/http.ts';

function uint8array2string(uint8Array: Uint8Array): string {
  return new TextDecoder().decode(uint8Array);
}

function string2uint8array(text: string): Uint8Array {
  return new TextEncoder().encode(text);
}

async function main() {
  await listenAndServe('0.0.0.0:9999', req => {
    console.log(req.url, req.method, req.headers, req.proto);
    req.respond({
      status: 200,
      headers: new Headers({ ContentType: 'application/json' }),
      body: string2uint8array(JSON.stringify({ hello: 'deno!' }))
    });
  });
}

main();
