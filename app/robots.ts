import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/static/', '/*.json$', '/*.js$', '/*.css$'],
    },
    sitemap: 'https://advocaciabressanoficial.web.app/sitemap.xml',
    host: 'https://advocaciabressanoficial.web.app',
  };
}