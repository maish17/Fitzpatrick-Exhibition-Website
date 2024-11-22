import Head from 'next/head';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Page() {
  return (
    <>
      <Head>
        {/* Page Title */}
        <title>Tommy Fitzpatrick | Target Texas</title>

        {/* Meta Tags for SEO */}
        <meta name="description" content="Explore the stunning world of Tommy Fitzpatrick at the Art Museum of South Texas" />
        <meta name="author" content="Max Moyle" />

        {/* Viewport Settings for mobile responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* OG Tags */}
        <meta property="og:title" content="Tommy Fitzpatrick | Target Texas"/>
        <meta property="og:description" content="Explore the stunning world of Tommy Fitzpatrick at the Art Museum of South Texas" />
        <meta property="og:image" content="/images/exhibition-preview.jpg" />
        <meta property="og:url" content="https://www.maish17.github.io/fitzpatrick/index.tsx" />
      
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fitzpatrick Exhibition - Art Gallery" />
        <meta name="twitter:description" content="Explore the stunning works of Tommy Fitzpatrick at the Art Museum of South Texas." />
        <meta name="twitter:image" content="/images/exhibition-preview.jpg" />
     
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        
        {/* External CSS or other resources */}
        <link rel="stylesheet" href="/css/styles.css" />

      </Head>
      <main className={raleway.className}>
        <h1>Welcome to the Fitzpatrick Exhibitions</h1>
        {/* Content of your page goes here */}
      </main>
    </>
  );
}