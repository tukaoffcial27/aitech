import { MetadataRoute } from 'next';
import devToolsData from '../global.json';
import aiReviewsData from '../global-ai.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://codenify.app'; // Sesuaikan jika domain utama sudah aktif

  // 1. Halaman Statis Utama
  const staticPages = [
    '',
    '/qr-generator',
    '/json-formatter',
    '/css-minifier',
    '/base64-converter',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Halaman pSEO Tools Developer (Dari global.json)
  const devToolsPages = devToolsData.map((item) => ({
    url: `${baseUrl}/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // 3. Halaman pSEO Review AI (Dari global-ai.json)
  const aiReviewPages = aiReviewsData.map((item) => ({
    url: `${baseUrl}/reviews/${item.slug}`, // Path khusus review/page.tsx]
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...devToolsPages, ...aiReviewPages];
}