import * as nodemailer from 'nodemailer';

import CONFIG from '../../config';
import { Options } from '../../options';

export class EmailTemplaites {

	public static SigunUp(data: { userEmail, userName }): nodemailer.SendMailOptions {
		return {
			from: `"${Options.WebsiteName}" <${CONFIG.EMAIL.auth.user}>`,
			to: data.userEmail,
			subject: `Hello ${data.userName}`,
			text: `Hello, ${data.userName}!
			you have succesfuly registred at  ${Options.WebsiteName}.`,
			html: `<div>
						<h2>Hello, X!</h2>
						<p>you have succesfuly registred at  ${Options.WebsiteName}.</p>
					</div>`
		};

	}

}