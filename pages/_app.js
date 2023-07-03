import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Beshy Generator - Pagod 🤸‍♀️ Na 🤸‍♀️ Ba 🤸‍♀️ Ang 🤸‍♀️ Beshy 🤸‍♀️ Ko?</title>
        <meta name="description" content="Beshy Generator - Pagod 🤸‍♀️ Na 🤸‍♀️ Ba 🤸‍♀️ Ang 🤸‍♀️ Beshy 🤸‍♀️ Ko?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="title" content="Beshy Generator - Pagod 🤸‍♀️ Na 🤸‍♀️ Ba 🤸‍♀️ Ang 🤸‍♀️ Beshy 🤸‍♀️ Ko?" />
        <meta name="description" content="Beshy Generator - Pagod 🤸‍♀️ Na 🤸‍♀️ Ba 🤸‍♀️ Ang 🤸‍♀️ Beshy 🤸‍♀️ Ko?" />
        <meta name="keywords" content="Serking, serkingdeorayom, serking, Serking de Orayom, serking de orayom, kingdeorayom, beshy" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beshy.vercel.app/" />
        <meta property="og:title" content="Beshy Generator - Pagod 🤸‍♀️ Na 🤸‍♀️ Ba 🤸‍♀️ Ang 🤸‍♀️ Beshy 🤸‍♀️ Ko?" />
        <meta property="og:description" content="Beshy Generator - Pagod 🤸‍♀️ Na 🤸‍♀️ Ba 🤸‍♀️ Ang 🤸‍♀️ Beshy 🤸‍♀️ Ko?" />
        <meta property="og:image" content="/preview.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://beshy.vercel.app/" />
        <meta property="twitter:title" content="Beshy Generator - Pagod 🤸‍♀️ Na 🤸‍♀️ Ba 🤸‍♀️ Ang 🤸‍♀️ Beshy 🤸‍♀️ Ko?" />
        <meta property="twitter:description" content="Beshy Generator - Pagod 🤸‍♀️ Na 🤸‍♀️ Ba 🤸‍♀️ Ang 🤸‍♀️ Beshy 🤸‍♀️ Ko?" />
        <meta property="twitter:image" content="/preview.png" />

      </Head>
      <Component {...pageProps} />
    </>
  )
}
