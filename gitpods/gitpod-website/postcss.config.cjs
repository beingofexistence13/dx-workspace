const PROD = process.env.NODE_ENV === 'production';

const productionPlugins = {
	cssnano: {},
	autoprefixer: {},
};

module.exports = {
	plugins: {
		...(PROD ? productionPlugins : {}),
		'postcss-import': {},
		'tailwindcss/nesting': 'postcss-nesting',
		tailwindcss: {},
		'postcss-preset-env': {
			features: { 'nesting-rules': false },
		},
	},
};
