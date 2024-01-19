// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import {metadata} from "@/app/layout";
import banner from "../../../public/banner.png";





class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>{metadata.title}</title>
                    <meta name="description" content={metadata.description} />
                    {/* Open Graph Meta Tags */}
                    <link rel="icon" href="/src/app/favicon.png" />
                    <link rel="shortcut icon" href="/src/app/favicon.png" />
                    <link rel="favicon" href="/src/app/favicon.png" />
                    <meta property="og:title" content={metadata.title} />
                    <meta property="og:description" content={metadata.description} />
                    <meta property="og:image" content={metadata.banner} />
                    <meta property="og:type" content="website" />
                    {/* Twitter Card Tags */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={metadata.title} />
                    <meta name="twitter:description" content={metadata.description} />
                    <meta name="twitter:image" content={metadata.banner} />
                    {/* Additional Enhancements */}
                    <meta name="theme-color" content="#7289DA" />
                    {/* oEmbed Link (replace with your actual JSON file URL) */}

                    <link type="application/json+oembed" href="/oembed.json" />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
