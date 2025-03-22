import { GoogleGenerativeAI } from '@google/generative-ai';
export default {
    "name": "geminiAi",
    "category": "ai",
    "path": "/v1/ai/geminiAi",
    "accept": "application/json",
    "method": "POST",
    "params": [
        {
            "mode": "body",
            "name": "prompt",
            "category": "form-data",
            "type": "string",
            "default": "Halo",
            "required": true
        }
    ],
    "endpoint": "/gemini",
    "description": "chat with geminiAI",
    "example": `
const axios = require('axios');
const FormData = require('form-data');
let data = new FormData();
data.append('prompt', 'siapa prabowo');

let config = {
method: 'post',
maxBodyLength: Infinity,
url: 'https://yrizzz.my.id/api/v1/ai/geminiAi',
headers: { 
    ...data.getHeaders()
},
data : data
};

axios.request(config)
.then((response) => {
console.log(JSON.stringify(response.data));
})
.catch((error) => {
console.log(error);
});
    `,
    "code": async (prompt) => {
        try {
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