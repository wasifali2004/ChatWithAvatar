/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        // Apply to all routes
        source: "/(.*)",
        headers: [
          {
            // Allow bey.chat to be loaded inside iframes from this app
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com https://fonts.gstatic.com https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' blob: data: https:",
              // Allow the bey.chat iframe and any related resources
              "frame-src 'self' https://bey.chat https://*.bey.chat https://*.livekit.cloud wss://*.livekit.cloud",
              // Allow WebSocket and API connections needed by the avatar
              "connect-src 'self' https://bey.chat https://*.bey.chat https://api.bey.dev wss://*.livekit.cloud https://*.livekit.cloud https://va.vercel-scripts.com",
              "media-src 'self' blob: https://bey.chat https://*.bey.chat",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
