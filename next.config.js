const nextConfig = {
  serverExternalPackages: ["@prisma/client", "bcryptjs"],
  poweredByHeader: false,
  experimental: {
    serverActions: {
      bodySizeLimit: "8mb"
    }
  }
};

export default nextConfig;
