const crypto = require('crypto');
const axios = require('axios'); 
const dataset = [    {        "keyname": "INTRO",        "index": 1    },    {        "keyname": "OUTRO",        "index": 1    },    {        "keyname": "AAAA",        "index": 19    },    {        "keyname": "AAAH",        "index": 19    },    {        "keyname": "AAA",        "index": 75    },    {        "keyname": "AAHA",        "index": 19    },    {        "keyname": "AAHH",        "index": 19    },    {        "keyname": "AAH",        "index": 44    },    {        "keyname": "AA",        "index": 159    },    {        "keyname": "AHAA",        "index": 19    },    {        "keyname": "AHAH",        "index": 19    },    {        "keyname": "AHA",        "index": 50    },    {        "keyname": "AHHA",        "index": 19    },    {        "keyname": "AHHH",        "index": 19    },    {        "keyname": "AHH",        "index": 45    },    {        "keyname": "AH",        "index": 168    },    {        "keyname": "A",        "index": 231    },    {        "keyname": "HAAA",        "index": 19    },    {        "keyname": "HAAH",        "index": 20    },    {        "keyname": "HAA",        "index": 44    },    {        "keyname": "HAHA",        "index": 19    },    {        "keyname": "HAHH",        "index": 19    },    {        "keyname": "HAH",        "index": 44    },    {        "keyname": "HA",        "index": 163    },    {        "keyname": "HHAA",        "index": 19    },    {        "keyname": "HHAH",        "index": 19    },    {        "keyname": "HHA",        "index": 44    },    {        "keyname": "HHHA",        "index": 19    },    {        "keyname": "HHHH",        "index": 19    },    {        "keyname": "HHH",        "index": 75    },    {        "keyname": "HH",        "index": 153    },    {        "keyname": "H",        "index": 230    },    {        "keyname": "0",        "index": 223    }]

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

            const response = await axios.get(`https://d10r8t0fxmjzn1.cloudfront.net/104/${token}.json`);  //PRO
           
            const combinedResult = response.data.result.join('');
            
            let isKeyMatch

            if (key ==0) {
              isKeyMatch = '' === combinedResult;
            }
            else{
              isKeyMatch = key === combinedResult;
            }

            // console.log(`Key: ${key}, Token: ${token}`);
           
            if (!isKeyMatch) {
                console.warn(`Mismatch: Key ${key} does not match result ${combinedResult}`);
            }
        } catch (error) {
            console.error(`Error fetching ${token}:`, error.message);
        }
    }
}

processHashData().catch(console.error);

