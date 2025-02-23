import { mailtrapClient, sender } from "../lib/mailtrap.js";
import { createWelcomeEmailTemplate } from "./emailTemplates.js";

export const sendWelcomeEmail = async (email, name, profileURL) => {
    const recipient = [{email}]

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Welcome to UCLINK!",
            html: createWelcomeEmailTemplate(name, profileURL),
            category: "welcome"
        })
        console.log("Email sent successfully", response);
    } catch (error) {
        throw error;
    }
} 