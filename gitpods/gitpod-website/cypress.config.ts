import { defineConfig } from 'cypress';

export default defineConfig({
	defaultCommandTimeout: 100000,
	e2e: {
		baseUrl: 'http://localhost:5173',
		supportFile: 'cypress/support/index.js',
	},
});
