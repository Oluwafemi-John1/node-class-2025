require('dotenv').config()
const nodeMailer = require('nodemailer')


const sendMail = (req, res) => {
    // res.send('I wanna send mail')
    const transporter = nodeMailer.createTransport({
        service: process.env.SERVICE,
        auth: {
            user: process.env.USER_G,
            pass: process.env.PASS_G
        }
    })

    const mailOptions = {
        from: 'BAKER\'S DELIGHT 👻 "<oluwafemijohn1000@gmail.com>"',
        to: ['devfemi3@gmail.com', 'ogunbunmijoshua60@gmail.com', 'ajiboyecaroline95@gmail.com', 'joshuaagboola2022@gmail.com', 'preciousvictoria697@gmail.com'],
        subject: 'Debug complete with HTML',
        // text: ' A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the dinner would be cassava, eba, ewa and everything.',
        html: `
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <title>Thank You from Baker's Delight</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>

            <body style="background-color:rgb(247, 199, 144); padding: 10px; margin: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                <div
                    style="max-width: 600px; margin: 2rem auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.07); overflow: hidden;">
                    <div style="background: #d2691e; padding: 1.5rem; text-align: center;">
                        <h1 style="color: #fff; margin: 0; font-size: 2rem;">Thank You for Choosing Baker's Delight!</h1>
                    </div>
                    <div style="padding: 2rem;">
                        <p style="font-size: 1.1rem; color: #333;">
                            Dear Valued Customer,
                        </p>
                        <p style="font-size: 1.1rem; color: #333;">
                            We sincerely appreciate your recent purchase at our bakery. We hope you enjoyed our freshly baked goods
                            as much as we enjoyed making them for you!
                        </p>
                        <p style="font-size: 1.1rem; color: #333;">
                            As a token of our gratitude, here’s a <b>10% discount</b> on your next order. Just mention this email
                            when you visit us again.
                        </p>
                        <div
                            style="background: #fff3cd; border-left: 5px solid #d2691e; padding: 1rem; margin: 1.5rem 0; border-radius: 4px;">
                            <strong style="color: #d2691e;">Special Offer:</strong> Get a free cupcake with every dozen pastries!
                        </div>
                        <p style="font-size: 1.1rem; color: #333;">
                            Thank you for supporting our small business. We look forward to serving you again soon!
                        </p>
                        <p style="font-size: 1.1rem; color: #333;">
                            Warm regards,<br>
                            <span style="color: #d2691e; font-weight: bold;">Baker's Delight</span><br>
                            <span style="font-size: 0.95rem; color: #888;">SQI College of ICT | 08134189425</span>
                        </p>
                    </div>
                    <div style="background: #f8f9fa; padding: 1rem; text-align: center; font-size: 0.95rem; color: #888;">
                        Follow us on
                        <a target="_blank" href="https://www.linkedin.com/in/oluwafemi-oyeniran" style="color: #d2691e; text-decoration: none;">LinkedIn</a> &amp;
                        <a target="_blank" href="https://www.facebook.com/ojoyeniran" style="color: #d2691e; text-decoration: none;">Facebook</a>
                    </div>
                </div>
            </body>

            </html>
            `
    }
    transporter.sendMail(mailOptions)
        .then((result) => {
            res.status(201).json({ message: 'success' })
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = sendMail