/** @type {import('next').NextConfig} */
const nextConfig = {

    async rewrites() {
        return [
            {
                source: '/api/users/:path*',
                destination: `${process.env.API_BASE_URL}/api/users/:path*`,
            },
        ];
    },
};

export default nextConfig;
