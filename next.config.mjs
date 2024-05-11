/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

// Convert the current module URL to a directory path
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src')],

    },
    images: {
        remotePatterns: [
            {
                hostname: 'raw.githubusercontent.com',
                protocol: 'https',
            }
        ]
    }
};

export default nextConfig;
