import { Injectable, Logger } from '@nestjs/common';
import nodemailer from 'nodemailer';
import config from 'config';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private readonly transporter: nodemailer.Transporter;

  constructor() {
    const smtp = config.get<any>('email');
    this.transporter = nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.secure, // true para 465
      auth: {
        user: smtp.user,
        pass: smtp.pass,
      },
    });
  }

  async sendMail(to: string, subject: string, html: string): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: config.get<string>('email.from'),
        to,
        subject,
        html,
      });
      this.logger.log(`E-mail enviado para ${to}`);
    } catch (error) {
      this.logger.error(`Falha ao enviar email para ${to}: ${error.message}`);
      // Não lança para não quebrar fluxo de recuperação de senha
    }
  }
} 