const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/countries",
        destination: "https://api.first.org/data/v1/countries",
      },
    ];
  },
};

export default nextConfig;
