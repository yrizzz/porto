import axios from 'axios';
export default {
    "name": "chatGpt",
    "category": "ai",
    "path": "/v1/ai/chatGpt",
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
    "description": "chat with chatGpt",
    "example": `
const axios = require('axios');
const FormData = require('form-data');
let data = new FormData();
data.append('prompt', 'siapa prabowo');

let config = {
method: 'post',
maxBodyLength: Infinity,
url: 'https://yrizzz.my.id/api/v1/ai/chatGpt',
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
            let res = '';
            await axios({
                method: 'POST',
                url: 'https://chateverywhere.app/api/chat/',
                data: {
                    "model": {
                        "id": "gpt-4",
                        "name": "GPT-4o",
                        "maxLength": 32000,
                        "tokenLimit": 8000,
                        "completionTokenLimit": 5000,
                        "deploymentName": "gpt-4o"
                    },
                    "messages": [
                        {
                            "pluginId": null,
                            "content": prompt,
                            "role": "user"
                        }
                    ],
                    "prompt": 'nama mu adalah robot asisten, kamu adalah asisten kecerdasan buatan yang sering membantu orang lain jika ada yang ditanyakan',
                    "temperature": 0.5
                },
                headers: {
                    "Accept": "/*/",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
                }
            }).then(async (response) => {
                res = response.data;
            }).catch(async () => {
                res = 'internal server error';
            })

            return res;
        } catch (err) {
            return 'internal server error';
        }
    }
}