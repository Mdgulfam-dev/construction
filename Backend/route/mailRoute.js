import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/mail', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.MAIL_USER,      // Set in .env
        pass: process.env.MAIL_PASS       // Set in .env
      },
    });

    const mailOptions = {
      from: `"Website Contact" <${process.env.MAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,     // Set in .env
      subject: `New Contact Request from ${name}`,
      html: `
        <h3>Contact Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    console.error('Email sending failed:', error); // <-- log the error
    res.status(500).json({ success: false, message: 'Email sending failed' });
  }
});

export default router;
