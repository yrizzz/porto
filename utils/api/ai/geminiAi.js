import { GoogleGenerativeAI } from '@google/generative-ai';
export default {
    "name": "geminiAi",
    "category":"ai",
    "path": "/v1/ai/geminiAi",
    "accept": "application/json",
    "method": "POST",
    "params": [
        {
            "mode": "query",
            "name": "url",
            "type": "string",
            "default": "Halo",
            "required": true
        }
    ],
    "endpoint": "/gemini",
    "description": "chat with geminiAI",
    "code": async (prompt) => {
        try {
            console.log(prompt)
            const genAI = new GoogleGenerativeAI('AIzaSyDwvysD0Ep47MvQ0WLC0gbuMPIMWbiRMHE');

            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
            const result = await model.generateContent(prompt);
            const response = await result.response;
            let text = response.text().replaceAll('**', '*');
            text = text.replaceAll('* *', '*')

            return text;
        } catch (err) {
            return err;
        }
    }
}