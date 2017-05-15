import * as nodemailer from 'nodemailer';

import CONFIG from '../../config';

export class EmailHandler {

	// create reusable transporter object using the default SMTP transport
	private static transporter: nodemailer.Transporter = nodemailer.createTransport({
		service: CONFIG.EMAIL.service,
		auth: {
			user: CONFIG.EMAIL.auth.user,
			pass: CONFIG.EMAIL.auth.pass
		}
	});


	public static async sendMail(mailOptions: nodemailer.SendMailOptions) {

		this.transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
			}
			console.log(`Message ${info.messageId} sent: ${info.response}`);
		});

	}
}