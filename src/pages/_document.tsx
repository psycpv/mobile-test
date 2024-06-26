import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // eslint-disable-next-line react/display-name
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover"
            />
            <meta name="theme-color" content="#00000" />

            <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="192x192" href="/images/192x192_App_Icon.png" />
            <link rel="apple-touch-icon" sizes="512x512" href="/images/512x512_App_Icon.png" />

            <link rel="manifest" href="/manifest.json" />
            <title>Vibe</title>
            <meta
              name="description"
              content="Decentralized OTC perpetual exchange. Trade BTC, ETH, ARB and +124 other markets oracle-less and with up to 40x leverage"
            />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid&display=swap" rel="stylesheet" />
            <link
              href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&display=swap"
              rel="stylesheet"
            ></link>
            <script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></script>
          </>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
