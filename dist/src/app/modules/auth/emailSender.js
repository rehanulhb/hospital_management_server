import nodemailer from "nodemailer";
import config from "../../../config/index.js";
const emailSender = async (email, html) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: config.email_sender,
            pass: config.app_password,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });
    const info = await transporter.sendMail({
        from: '"Hospital Management System" <onlinestaff7@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Reset Password Link", // Subject line
        //text: "Hello world?", // plain text body
        html, // html body
    });
};
export default emailSender;
//# sourceMappingURL=emailSender.js.map