import path from 'path'
import { NextApiRequest, NextApiResponse } from 'next'
import sharp from 'sharp'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  secure: true,
})

const processImage = async (overlayImageBase64: string, gifFile: string) => {
  const gifPath = path.join(process.cwd(), 'public', gifFile)
  const baseGif = await sharp(gifPath, { animated: true })
  const metadata = await baseGif.metadata()
  const overlayImage = await sharp(Buffer.from(overlayImageBase64, 'base64'))

  const resized = await overlayImage
    .resize({ width: metadata.width, height: metadata.pageHeight ?? metadata.height, fit: 'fill' })
    .toBuffer()

  const newGif = await baseGif
    .composite([
      {
        input: resized,
        tile: true,
        gravity: 'northwest',
      },
    ])
    .toBuffer()

  return newGif
}

const uploadImage = async (image: Buffer) => {
  const data = `data:image/gif;base64,${image.toString('base64')}`
  const response = await cloudinary.uploader.upload(data, { public_id: 'based_share_card' })
  return response ? response.secure_url : ''
}

const generateGif = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const overlayImageBase64 = req.body.overlayImage
    const gifFile = req.body.gifFile

    // Process the image buffer and generate an updated image
    const processedImageBuffer = await processImage(overlayImageBase64, gifFile)
    const url = await uploadImage(processedImageBuffer)

    if (url) {
      return res.json({ url })
    } else {
      return res.status(500).json({ error: 'Failed to process image' })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Failed to process image' })
  }
}

export default generateGif
