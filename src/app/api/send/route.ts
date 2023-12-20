import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import nodemailer from "nodemailer"


export async function POST(request: Request) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.GMAIL_FROM,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  })
  const data = await request.json()
  const {email, fName, lName, checkInReq, checkOutReq, items} = data
  try {
    await transporter.sendMail({
      from: 'Mithas Room booking<gablin004@gmail.com>', // sender address
      to: 'esse.esse.hw@gmail.com', // list of receivers
      subject: `Message from L'hotel`, // Subject line
      text: "PIPPO non è gay", // plain text body
      html: `<p>Ciao ${fName} ${lName} ecco la tua reseservation dal ${checkInReq} al ${checkOutReq}</p>
      </br>
      <p>${items}<p>` // html body
    })
    return NextResponse.json({ status: 200 })
  } catch (err) {
    console.log(err)
    return NextResponse.json({ status: 500 })
  }
}












// try {
//   const data = await resend.emails.send({
//     from: 'Acme <onboarding@resend.dev>',
//     to: ['esse.esse.hw@gmail.com'],
//     subject: 'Hello world',
//     react: EmailTemplate({ firstName: 'John' }),
//   });

//   return Response.json(data);
// } catch (error) {
//   return Response.json({ error });
// }