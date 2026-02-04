// Fixed: Removed missing vite/client reference to resolve line 1 compilation error
declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
    [key: string]: string | undefined;
  }
}
