// rebuild 1772831128193
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/blog/understanding-threaded-connections-design-and-specifications', destination: '/blog/threaded-flange-types', permanent: true },
      { source: '/blog/industrial-applications-for-threaded-connections', destination: '/blog/advantages-of-threaded-flanges', permanent: true },
      { source: '/blog/standards-and-quality-assurance-in-threaded-connections', destination: '/blog/threaded-flange-connections', permanent: true },
    ];
  },
};

module.exports = nextConfig;

// deploy trigger: 1772831898580
