/** @type {import('next').NextConfig} */
const path = require('path')
const withSass = require('@zeit/next-sass');
module.exports = withSass({
	/* bydefault config  option Read For More Optios
  here https://github.com/vercel/next-plugins/tree/master/packages/next-sass
  */
	cssModules: true,
});
const nextConfig = {
	reactStrictMode: true,
};

module.exports = {
	nextConfig,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
};

