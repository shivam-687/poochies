import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
            <Head>

                <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
                <Script strategy='lazyOnload' id='gtag'>
                    {
                        `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                    `
                    }
                </Script>


                <meta name="title" content="Poochie|Best place to find your furry friend" />
                <meta name="description" content="If you are looking for the best options for bringing a puppy of your preferred breed home, your search ends here! Along with our dog breeding services, we provide dog lovers with some of the healthiest and most adorable puppies." />


                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://poochies.interlef.com/" />
                <meta property="og:title" content="Poochie|Best place to find your furry friend" />
                <meta property="og:description" content="If you are looking for the best options for bringing a puppy of your preferred breed home, your search ends here! Along with our dog breeding services, we provide dog lovers with some of the healthiest and most adorable puppies." />
                <meta property="og:image" content={'/assets/images/site-image.jpg'} />


                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://poochies.interlef.com/" />
                <meta property="twitter:title" content="Poochie|Best place to find your furry friend" />
                <meta property="twitter:description" content="If you are looking for the best options for bringing a puppy of your preferred breed home, your search ends here! Along with our dog breeding services, we provide dog lovers with some of the healthiest and most adorable puppies." />
                <meta property="twitter:image" content={'/assets/images/site-image.jpg'} />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Bellota+Text:wght@300;400;700&display=swap" rel="stylesheet"></link>
                <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff"></meta>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}