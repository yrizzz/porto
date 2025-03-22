import axios from 'axios'

export default {
    "name": "dnsrecord",
    "category": "domain",
    "path": "/v1/domain/dnsrecord",
    "accept": "application/json",
    "method": "POST",
    "params": [
        {
            "mode": "body",
            "name": "domain",
            "category": "form-data",
            "type": "string",
            "default": "detik.com",
            "required": true
        }
    ],
    "description": "check dnsrecord domain",
    "example": `
const axios = require('axios');
const FormData = require('form-data');
let data = new FormData();
data.append('domain', 'detik.com');

let config = {
method: 'post',
maxBodyLength: Infinity,
url: 'https://yrizzz.my.id/api/v1/domain/dnsrecord',
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
    code: async (domain) => {
        try {
            let res;
            await axios({
                url: 'https://api.dmns.app/domain/' + domain + '/dns-records',
                headers: {
                    'Authority': 'api.dmns.app',
                    'Method': 'GET',
                    'Path': '/domain/google.com/dns-records',
                    'Scheme': 'https',
                    'Accept': 'application/json, text/plain, */*',
                    'Accept-Language': 'en-US,en;q=0.9',
                    'Cache-Control': 'no-cache',
                    'Origin': 'https://dmns.app',
                    'Pragma': 'no-cache',
                    'Referer': 'https://dmns.app/',
                    'Sec-Ch-Ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
                    'Sec-Ch-Ua-Mobile': '?1',
                    'Sec-Ch-Ua-Platform': '"Android"',
                    'Sec-Fetch-Dest': 'empty',
                    'Sec-Fetch-Mode': 'cors',
                    'Sec-Fetch-Site': 'same-site',
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36'
                }
            }).then(async (response) => {
                let arr = {};
                let result = response.data;
                Object.entries(result).map((item) => {
                    if (item[1].length > 0) {
                        arr[item[0]] = item[1]
                    }
                })
                res = arr;
            });
            return res;
        } catch (err) {
            return 'internal server error';
        }
    }
}