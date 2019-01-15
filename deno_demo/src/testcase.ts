import { test, assertEqual } from "https://deno.land/x/testing/mod.ts";

test(function t1() {
  assertEqual("hello", "hello");
});

test(function t2() {
  assertEqual("world", "world");
});
