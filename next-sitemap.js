/* eslint-env node */
module.exports = {
  siteUrl: 'https://mromerolopez.github.io/resume/',
  exclude: ['/404*', '/500*'],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === '/' ? 'weekly' : 'monthly',
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/404', '/500'],
      },
    ],
    additionalSitemaps: [
      'https://mromerolopez.github.io/resume/sitemap.xml',
    ],
  },
};
