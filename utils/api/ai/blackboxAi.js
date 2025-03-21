import axios from 'axios';

export default {
    "name": "blackboxAi",
    "category": "ai",
    "path": "/v1/ai/blackboxAi",
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
    "description": "chat with blackboxAi",
    "example": `
const axios = require('axios');
const FormData = require('form-data');
let data = new FormData();
data.append('prompt', 'siapa prabowo');

let config = {
method: 'post',
maxBodyLength: Infinity,
url: 'https://yrizzz.my.id/api/v1/ai/blackboxAi',
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
        function randomString(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            let counter = 0;
            while (counter < length) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                counter += 1;
            }
            return result;
        }
        const chat_id = randomString(12);
        const message = [{
            'id': randomString(7),
            'role': 'user',
            'content': prompt + ', jelaskan dengan detail dalam bahasa indonesia'
        }]
        let reply = '';

        try {
            let loop = true;
            let isContinue = 'start';
            while (loop) {
                await axios({
                    method: 'POST',
                    url: 'https://www.blackbox.ai/api/chat',
                    headers: {
                        'Cookie': 'sessionId=17269d52-1ae2-4576-9c27-' + randomString(12) + ';',
                        'Origin': 'https://www.blackbox.ai',
                        'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36'
                    },
                    data: {
                        'messages': message,
                        'id': chat_id,
                        'mode': isContinue,
                        'previewToken': null,
                        'userId': null,
                        'codeModelMode': true,
                        'agentMode': {},
                        'trendingAgentMode': {},
                        'isMicMode': false,
                        'userSystemPrompt': null,
                        'maxTokens': 1024,
                        'playgroundTopP': 0.9,
                        'playgroundTemperature': 0.5,
                        'isChromeExt': false,
                        'githubToken': null,
                        'clickedAnswer2': false,
                        'clickedAnswer3': false,
                        'clickedForceWebSearch': false, 'visitFromDelta': false,
                        'mobileClient': false, 'userSelectedModel': null,
                        'validated': '00f37b34-a166-4efb-bce5-1312d87f2f94'
                    }
                }).then(async (response) => {
                    let text = await response.data;
                    if ((/\$~~~\$/).test(text)) {
                        message.push(
                            {
                                'id': randomString(7),
                                'role': 'assistant',
                                'content': text,
                                'createdAt': new Date()
                            }
                        )
                        isContinue = 'continue'
                    } else {
                        let tmpMsg;
                        loop = false;
                        message.push({
                            content: text
                        })
                        let result = '';
                        message.map((item, index) => {
                            tmpMsg = item.content;
                            if (index != '0' || item.content != tmpMsg) {
                                result += item.content + ' ';
                            }
                        })

                        let tmp = ''
                        if ((/\$~~~\$(.*)\$~~~\$\n/g).test(result)) {
                            let array = result.match(/\$~~~\$(.*)\$~~~\$\n/g);
                            let text = result.replaceAll(array[0], '');
                            let split = result.toString().split(array[0])
                            text = split[split.length - 1]

                            let words = text.split(' ');
                            let uniqueWords = {};
                            let newText = '';

                            words.forEach(word => {
                                if (!uniqueWords[word]) {
                                    uniqueWords[word] = true;
                                    newText += word + ' ';
                                }
                            });

                            text = newText;

                            tmp += text.replaceAll('**', '*');
                            tmp += '\n\n🌐 Referensi terkait :\n\n'

                            array = JSON.stringify(array[
                                0]).replaceAll('$~~~$', '').replaceAll('\\n', '')
                            array = JSON.parse(JSON.parse(array));

                            array.map((item) => {
                                tmp += `» *Title* : ${item.title}\n» *Snippet* : ${item.snippet}\n» *Date* : ${item.date}\n» *Link* : ${item.link}\n\n`;
                            })
                        } else {
                            tmp = result.replace('$@$v=undefined-rv1$@$', '').replaceAll('**', '*');
                        }

                        reply = tmp.replace('Generated by BLACKBOX.AI, try unlimited chat https://www.blackbox.ai\n\n', '');

                    }

                }).catch(async (err) => {
                    loop = false;
                    return err
                })
            }
            return reply;

        } catch (err) {
            return err;
        }
    }
}