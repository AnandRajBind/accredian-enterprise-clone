export default async function sitemap() {
  const baseUrl = 'https://enterprise.accredian.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
