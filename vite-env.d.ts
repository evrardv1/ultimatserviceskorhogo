// Fixed: Removed the reference to 'vite/client' which was causing a resolution error in the environment.
// Manually defining the environment variable types to ensure proper TypeScript support for process.env and import.meta.env.

declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
    [key: string]: string | undefined;
  }
}

interface ImportMetaEnv {
  readonly API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
