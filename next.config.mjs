/** @type {import('next').NextConfig} */
const nextConfig = {
	devIndicators: false,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "", // optional, default is ""
				pathname: "/**", // allow all paths under this domain
			},
		],
	},
};

module.exports = nextConfig;
