export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://tuo-sito.vercel.app/sitemap.xml',
  }
}