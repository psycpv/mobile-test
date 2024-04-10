import { NextApiRequest, NextApiResponse } from 'next'

const twitterRedirect = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { platform, image_url } = req.query

    const html = `
      <html>
      <head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vibe Trading" />
        <meta name="twitter:image" content="${image_url}" />
        <script>
          document.addEventListener('DOMContentLoaded', function() {
            window.location.href = '/';
          });
        </script>
      </head>
      <body><p>redirecting...</p>
      </body>
      </html>
    `
    res.setHeader('Content-Type', 'text/html')
    res.send(html)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Failed to process image' })
  }
}

export default twitterRedirect
