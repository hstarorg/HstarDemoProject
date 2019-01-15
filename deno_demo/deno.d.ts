declare namespace DenoJS {
  type Platform = {
    arch: string;
    os: string;
  };

  type LibDeno = {
    print(x: string, isErr?: boolean): void;
    recv: Function;
    send(control: ArrayBufferView, data?: ArrayBufferView): null | Uint8Array;
  };

  type ReadResult = {
    eof: boolean;
    nread: number;
  };

  type Conn = {
    localAddr: string;
    remoteAddr: string;
    close(): void;
    closeRead(): void;
    closeWrite(): void;
    read(p: Uint8Array): Promise<ReadResult>;
    write(p: Uint8Array): Promise<number>;
  };

  type Writer = {
    write(p: Uint8Array): Promise<number>;
  };

  type Reader = {
    read(p: Uint8Array): Promise<ReadResult>;
  };

  type ConsoleOptions = {};

  type Listener = {
    accept(): Promise<Conn>;
    addr(): Addr;
    close(): void;
  };

  type Addr = {};

  type FileInfo = {
    accessed: number | null;
    created: number | null;
    len: number;
    mode: number | null;
    modified: number | null;
    name: string | null;
    path: string | null;
    isDirectory(): boolean;
    isFile(): boolean;
    isSymlink(): boolean;
  };

  type MakeTempDirOptions = {};

  type Metrics = {};

  type OpenMode = 'r' | 'r+' | 'w' | 'w+' | 'a' | 'a+' | 'x' | 'x+';

  type Process = {
    pid: number;
    rid: number;
    stderr?: ReadCloser;
    stdin?: WriteCloser;
    stdout?: ReadCloser;
    close(): void;
    output(): Promise<Uint8Array>;
    status(): Promise<ProcessStatus>;
  };

  type ReadCloser = {
    close(): void;
    read(p: Uint8Array): Promise<ReadResult>;
  };

  type WriteCloser = {
    close(): void;
    write(p: Uint8Array): Promise<number>;
  };

  type ProcessStatus = {
    code: number;
    signal: number;
    success: boolean;
  };

  type RunOptions = {
    args: string[];
    cwd?: string;
    stderr?: ProcessStdio;
    stdin?: ProcessStdio;
    stdout?: ProcessStdio;
  };

  type ProcessStdio = {};

  type ResourceMap = {};

  export enum ErrorKid {
    AddrInUse = 7,
    AddrNotAvailable = 8,
    AlreadyExists = 10,
    BadResource = 19,
    BrokenPipe = 9,
    CommandFailed = 20,
    ConnectionAborted = 5,
    ConnectionRefused = 3,
    ConnectionReset = 4,
    EmptyHost = 21,
    HttpCanceled = 33,
    HttpClosed = 32,
    HttpOther = 35,
    HttpParse = 34,
    HttpUser = 31,
    IdnaError = 22,
    Interrupted = 15,
    InvalidData = 13,
    InvalidDomainCharacter = 26,
    InvalidInput = 12,
    InvalidIpv4Address = 24,
    InvalidIpv6Address = 25,
    InvalidPort = 23,
    InvalidUri = 37,
    NoError = 0,
    NotConnected = 6,
    NotFound = 1,
    Other = 17,
    Overflow = 30,
    PermissionDenied = 2,
    RelativeUrlWithCannotBeABaseBase = 28,
    RelativeUrlWithoutBase = 27,
    SetHostOnCannotBeABaseUrl = 29,
    TimedOut = 14,
    TooLarge = 36,
    UnexpectedEof = 18,
    WouldBlock = 11,
    WriteZero = 16
  }

  class DenoError {
    new(kind: ErrorKid, msg: string): this;
    kind: ErrorKid;
    message: string;
    name: string;
    stack?: string;
    static Error: ErrorConstructor;
  }
}

declare interface IDenoJS {
  /**
   * The command-line arguments.
   */
  args: string[];

  /**
   * The process id.
   */
  pid: number;

  /**
   * The runtime platform
   */
  platform: DenoJS.Platform;

  stdin: File;

  stdout: File;

  stderr: File;

  libdeno: DenoJS.LibDeno;

  chdir(directory: string): void;
  chmod(path: string, mode: number): Promise<void>;
  chmodSync(path: string, mode: number): void;
  /**
   * Close the file ID
   * @param rid File id
   */
  close(rid: number): void;

  connect(network: any, address: string): Promise<DenoJS.Conn>;
  /**
   * Copy
   * @param dst
   * @param src
   */
  copy(dst: DenoJS.Writer, src: DenoJS.Reader): Promise<number>;

  /**
   * Copy file
   * @param from
   * @param to
   */
  copyFile(from: string, to: string): Promise<void>;
  /**
   * Copy file
   * @param from From file path
   * @param to To file path
   */
  copyFileSync(from: string, to: string): void;

  /**
   * Current work dir
   */
  cwd(): string;

  dial(network: any, address: string): Promise<DenoJS.Conn>;

  /**
   * Get env object
   */
  env(): object;

  /**
   * Exit appliction
   * @param exitCode
   */
  exit(exitCode?: number): never;

  inspect(value: any, options?: DenoJS.ConsoleOptions): string;

  listen(network: any, address: string): DenoJS.Listener;

  lstat(filename: string): Promise<DenoJS.FileInfo>;

  lstatSync(filename: string): DenoJS.FileInfo;

  makeTempDir(options?: DenoJS.MakeTempDirOptions): Promise<string>;

  makeTempDirSync(options?: DenoJS.MakeTempDirOptions): string;

  metrics(): DenoJS.Metrics;

  mkdir(path: string, mode?: number): Promise<void>;

  mkdirSync(path: string, mode?: number): void;

  open(filename: string, mode?: DenoJS.OpenMode): Promise<File>;

  read(rid: number, p: Uint8Array): Promise<DenoJS.ReadResult>;

  readAll(r: DenoJS.Reader): Promise<Uint8Array>;

  readDir(path: string): Promise<DenoJS.FileInfo[]>;

  readDirSync(path: string): DenoJS.FileInfo[];

  readFile(filename: string): Promise<Uint8Array>;

  readFileSync(filename: string): Uint8Array;

  readlink(name: string): Promise<string>;

  readlinkSync(name: string): string;

  remove(path: string): Promise<void>;

  removeSync(path: string): void;

  removeAll(path: string): Promise<void>;

  removeAllSync(path: string): void;

  rename(oldpath: string, newpath: string): Promise<void>;

  renameSync(oldpath: string, newpath: string): void;

  resources(): DenoJS.ResourceMap;

  run(opt: DenoJS.RunOptions): DenoJS.Process;

  stat(filename: string): Promise<DenoJS.FileInfo>;

  statSync(filename: string): DenoJS.FileInfo;

  stringifyArgs(args: any[], options?: DenoJS.ConsoleOptions): string;

  symlink(oldname: string, newname: string, type?: string): Promise<void>;

  symlinkSync(oldname: string, newname: string, type?: string): void;

  toAsyncIterator(r: DenoJS.Reader): AsyncIterableIterator<Uint8Array>;

  truncate(name: string, len?: number): Promise<void>;

  truncateSync(name: string, len?: number): void;

  write(rid: number, p: Uint8Array): Promise<number>;

  writeFile(filename: string, data: Uint8Array, perm?: number): Promise<void>;

  writeFileSync(filename: string, data: Uint8Array, perm?: number): void;
}

declare module 'deno' {
  var deno: IDenoJS;
  export = deno;
}
