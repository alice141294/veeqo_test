const axios = require('axios');
let orders = [];
const url = 'https://api.veeqo.com/orders?';

const data = {
    url,
    method: 'get',
    headers: {
        'accept': 'application/json',
        'x-api-key':'bd67dd515b815d636a23672d4f4286d8',
    },
};

const request = async () => axios(data)
    .then(result => {
        console.log(result.data);
    })
    .catch(e => console.log(e));

const response = async () => {
    orders = await request();
    console.log(orders);
};

response();