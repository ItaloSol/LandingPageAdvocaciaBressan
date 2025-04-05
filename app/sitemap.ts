import { MetadataRoute } from 'next'

export const dynamic = 'force-static'; // Ensure static export compatibility

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://advocaciabressanoficial.web.app/'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(), // Use ISO string for static export
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}