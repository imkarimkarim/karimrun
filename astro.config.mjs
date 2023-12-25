import { defineConfig } from 'astro/config';

// https://astro.build/config
import image from '@astrojs/image';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [image(), tailwind()],
	redirects: {
		'/resume': {
			status: 302,
			destination: '/karim-resume.pdf',
		},
	},
});
