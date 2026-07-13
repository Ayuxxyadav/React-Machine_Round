import { Request, Response } from "express"

export const userInfo = (req: Request, res: Response) => {
  const data = req.body

  const { name, email, mobileNumber, feedback, rating } = data

  // backend pe terminal mein dikhane ke liye
  console.log("Received data:", { name, email, mobileNumber, feedback, rating })

  // frontend ko response wapas bhejna ZAROORI hai
  // warna frontend ka axios/fetch hamesha "loading" pe atka rahega
  res.status(200).json({
    message: "Feedback received successfully",
    data: { name, email, mobileNumber, feedback, rating },
  })
}