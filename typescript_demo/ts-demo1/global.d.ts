declare module 'testLib';

declare module 'good*' {
  export const content: string;
}

declare namespace ABC {
  export interface test {
    key: string;
  }
}
