/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    // The `no-html-link-for-pages` rule in eslint-config-next crashes on
    // load ("path must be a string"), which can fail the deploy build.
    // Skip lint during `next build`; run it separately via `npm run lint`.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
