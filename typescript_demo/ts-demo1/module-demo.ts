import data from 'testLib';

import { content } from 'good123';

import * as koa from 'koa';
const app = new koa();

app.use((ctx: koa.Context) => {
  ctx.request.abc;
  ctx.request.ddd; // Property 'ddd' does not exist on type 'Request'.
});

declare module 'koa' {
  export interface BaseRequest {
    abc: string;
  }
}
