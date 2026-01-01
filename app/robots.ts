import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Menjaga folder sensitif jika ada
    },
    // Mengarahkan Googlebot langsung ke sitemap yang berisi 1.000+ link
    sitemap: 'https://aitech.codenify.app/sitemap.xml', 
  };
}