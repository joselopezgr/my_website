const { hostname } = require('os');
const withVideos = require('next-videos');

const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "picsum.photos",
            }
        ]
    }
};

module.exports = withVideos(nextConfig);
