import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

const env = (mode: string) => {
  console.log('building in mode', mode);
  let filename = path.resolve(__dirname, 'envs', `.env.${mode}`);
  const defaultEnv = path.resolve(__dirname, '.env');

  (!fs.existsSync(filename) || mode === 'development') &&
    (filename = defaultEnv);

  const parsed = dotenv.config({ path: filename }).parsed;
  if (!parsed) return;

  console.log(parsed);

  process.env = {
    ...process.env,
    ...parsed,
  };
};

// https://vitejs.dev/config/
export default ({ mode }) => (
  env(mode),
  defineConfig({
    base: process.env.ASSET_URL,
    server: {
      port: 8080,
    },
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          if (warning.code === 'CIRCULAR_DEPENDENCY') {
            console.log(warning.message);
            // throw new Error(warning.message);
          }
          warn(warning);
        },
      },
    },
  })
);
