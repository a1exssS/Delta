import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { defineConfig } from 'vite'

export default defineConfig({
	base: "./",
	build: {
		copyPublicDir: true,
		rollupOptions: {
			output: {
				entryFileNames: `src/js/[name].js`,
				chunkFileNames: `src/js/[name].js`,
				assetFileNames: ({ name }) => {
					if (/\.(gif|jpe?g|png|svg|webp|ico|tiff|bmp)$/.test(name ?? '')) {
						return 'src/Images/[name][extname]';
					}

					if (/\.css$/.test(name ?? '')) {
						return 'src/css/[name][extname]';
					}

					return 'src/[name][extname]';
				},
			}
		}
	}
})