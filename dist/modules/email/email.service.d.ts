export declare class EmailService {
    private readonly logger;
    private readonly transporter;
    constructor();
    sendMail(to: string, subject: string, html: string): Promise<void>;
}
