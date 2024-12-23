const crypto = require('crypto');
const axios = require('axios'); 
const dataset = [
  {
    "keyname": "0",
    "index": 27
  },
  {
    "keyname": "AAAA",
    "index": 2
  },
  {
    "keyname": "AAAH",
    "index": 3
  },
  {
    "keyname": "AAA",
    "index": 10
  },
  {
    "keyname": "AAHA",
    "index": 3
  },
  {
    "keyname": "AAHH",
    "index": 3
  },
  {
    "keyname": "AAH",
    "index": 6
  },
  {
    "keyname": "AA",
    "index": 18
  },
  {
    "keyname": "AHAA",
    "index": 3
  },
  {
    "keyname": "AHAH",
    "index": 3
  },
  {
    "keyname": "AHA",
    "index": 6
  },
  {
    "keyname": "AHHA",
    "index": 3
  },
  {
    "keyname": "AHHH",
    "index": 4
  },
  {
    "keyname": "AHH",
    "index": 6
  },
  {
    "keyname": "AH",
    "index": 19
  },
  {
    "keyname": "A",
    "index": 27
  },
  {
    "keyname": "HAAA",
    "index": 2
  },
  {
    "keyname": "HAAH",
    "index": 3
  },
  {
    "keyname": "HAA",
    "index": 6
  },
  {
    "keyname": "HAHA",
    "index": 2
  },
  {
    "keyname": "HAHH",
    "index": 3
  },
  {
    "keyname": "HAH",
    "index": 6
  },
  {
    "keyname": "HA",
    "index": 19
  },
  {
    "keyname": "HHAA",
    "index": 2
  },
  {
    "keyname": "HHAH",
    "index": 3
  },
  {
    "keyname": "HHA",
    "index": 6
  },
  {
    "keyname": "HHHA",
    "index": 3
  },
  {
    "keyname": "HHHH",
    "index": 3
  },
  {
    "keyname": "HHH",
    "index": 4
  },
  {
    "keyname": "HH",
    "index": 17
  },
  {
    "keyname": "H",
    "index": 27
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
            const response = await axios.get(`https://d1aof1lwumql9k.cloudfront.net/104_STAGING/${token}.json`);
           
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

