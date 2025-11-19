const nodemailer = require('nodemailer');

const sendMail = async (to, OTP) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASSWORD
        }
    });

    let mailOptions = {
        from: process.env.USER_EMAIL,
        to: to,
        subject: 'Forgot Password',
        html: `<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f7f7f7; padding: 40px 15px; text-align: center;">
    <div style="max-width: 450px; margin: auto; background-color: #ffffff; padding: 30px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-top: 5px solid #007bff;">

        <div style="text-align: center; margin-bottom: 25px;">
            <h1 style="font-size: 24px; color: #007bff; margin: 0; font-weight: 600;">App Name</h1>
        </div>

        <h2 style="color: #333; font-size: 22px; margin-bottom: 5px; font-weight: 500;">
            🔑 Password Reset Request
        </h2>

        <p style="color: #555; font-size: 15px; margin-top: 15px; line-height: 1.6;">
            We received a request to reset the password for your account. Please use the verification code below to proceed.
        </p>

        <div style="margin: 30px 0; text-align: center; padding: 15px; background-color: #e6f2ff; border-radius: 8px;">
            <p style="font-size: 16px; color: #333; margin-bottom: 10px; font-weight: 600;">
                Your One-Time Password (OTP) is
            </p>

            <div style="
                display: inline-block;
                padding: 15px 30px;
                background-color: #007bff; /* Primary Brand Color */
                color: #ffffff;
                font-size: 32px;
                letter-spacing: 4px;
                font-weight: bold;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
            ">
                ${OTP}
            </div>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6; margin-top: 20px; border-left: 3px solid #ffc107; padding-left: 10px;">
            **Security Note:** This code is valid for only **2 minutes**. If you did not request a password reset, please disregard this email.
        </p>

        <hr style="border: none; height: 1px; background-color: #e0e0e0; margin: 30px 0;" />

        <p style="font-size: 12px; text-align: center; color: #999;">
            You are receiving this email because a password reset was initiated for your account.
        </p>
        <p style="font-size: 12px; text-align: center; color: #999; margin-top: 5px;">
            © ${new Date().getFullYear()} Total Coding Academy. All Rights Reserved.
        </p>

    </div>
</div>
`

    };

    await transporter.sendMail(mailOptions);
}

module.exports = sendMail;