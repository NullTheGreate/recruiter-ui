/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {        
        return [
            {
                source: '/api/users/:path*',
                destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/:path*`,
            },
        ];
    },
};

export default nextConfig;
