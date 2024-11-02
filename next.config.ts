import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Amplifyでのデプロイに必要な設定
  images: {
    unoptimized: true,
  },
  // 開発環境でのホスト設定
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
