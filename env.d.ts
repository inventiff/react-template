/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MY_VAR: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
