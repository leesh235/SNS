import { transporter } from "../config/nodemailer";

export const sendMail = async (email: string, contenst: string | number) => {
    return await transporter.sendMail({
        from: `${process.env.MAIL_USER}`,
        to: email,
        subject: "codenumber",
        text: `${contenst}`,
        html: `<b>${contenst}</b>`,
    });
};
