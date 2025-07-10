const crypto = require('crypto');
const axios = require('axios'); 
const dataset = [
    {
        "keyname": "AH",
        "index": 106
    },
    {
        "keyname": "H",
        "index": 147
    },
    {
        "keyname": "A",
        "index": 148
    },
    {
        "keyname": "HH",
        "index": 85
    },
    {
        "keyname": "HAH",
        "index": 25
    },
    {
        "keyname": "AA",
        "index": 92
    },
    {
        "keyname": "HAA",
        "index": 25
    },
    {
        "keyname": "HHAH",
        "index": 12
    },
    {
        "keyname": "AHAH",
        "index": 11
    },
    {
        "keyname": "AAAH",
        "index": 12
    },
    {
        "keyname": "AAHA",
        "index": 12
    },
    {
        "keyname": "AHHA",
        "index": 11
    },
    {
        "keyname": "HHAA",
        "index": 11
    },
    {
        "keyname": "AHAA",
        "index": 12
    },
    {
        "keyname": "AHHH",
        "index": 12
    },
    {
        "keyname": "HAHA",
        "index": 11
    },
    {
        "keyname": "HHA",
        "index": 25
    },
    {
        "keyname": "AAA",
        "index": 48
    },
    {
        "keyname": "AAH",
        "index": 25
    },
    {
        "keyname": "AHA",
        "index": 25
    },
    {
        "keyname": "HHHH",
        "index": 11
    },
    {
        "keyname": "HAAH",
        "index": 11
    },
    {
        "keyname": "HHH",
        "index": 47
    },
    {
        "keyname": "HA",
        "index": 91
    },
    {
        "keyname": "AAHH",
        "index": 11
    },
    {
        "keyname": "HAAA",
        "index": 12
    },
    {
        "keyname": "AHH",
        "index": 25
    },
    {
        "keyname": "AAAA",
        "index": 11
    },
    {
        "keyname": "HHHA",
        "index": 12
    },
    {
        "keyname": "HAHH",
        "index": 12
    }
]


function generateSHA256(input) {
    return crypto.createHash('sha256').update(input).digest('hex');
}

async function processHashData() {
    const hashdata = dataset.flatMap(item => 
      Array.from({ length: item.index }, (_, index) => 
        `${item.keyname}-${generateSHA256(`${item.keyname}-${index}`)}`
    )
    );
    // Process each hash
    for (const hash of hashdata) {
        // Split the hash into key and token
        const [key, token] = hash.split('-');
        
        try {
            //const response = await axios.get(`https://d1aof1lwumql9k.cloudfront.net/104_STAGING/${token}.json`); //LOCAL

            //const response = await axios.get(`https://d10r8t0fxmjzn1.cloudfront.net/104/${token}.json`);  //PRO

            const response = await axios.get(`https://d10r8t0fxmjzn1.cloudfront.net/galaxy/${token}.json`);  //PRO MARBLE UNDER SABA PINGOAL

            

            //const response = await axios.get(`https://d1aof1lwumql9k.cloudfront.net/114_STAGING/${token}.json`);  //PRO



            
           
            const combinedResult = response.data.result.join('');
            
            let isKeyMatch

            if (key ==0) {
              isKeyMatch = '' === combinedResult;
            }
            else{
              isKeyMatch = key === combinedResult;
            }

            //console.log(`Key: ${key}, Token: ${token}`);
           
            if (!isKeyMatch) {
                console.warn(`Mismatch: Key ${key} does not match result ${combinedResult}`);
            }
        } catch (error) {
            console.error(`${key} Error fetching ${token}:`, error.message);
        }
    }
}

processHashData().catch(console.error);

