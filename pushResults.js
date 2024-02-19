const { GoogleSpreadsheet} = require ("google-spreadsheet")
const { JWT } = require("google-auth-library");
const fs = require('fs');
const path = require('path');
const pid = typeof process.env.npm_config_pipelineid !== "undefined" ? process.env.npm_config_pipelineid  : 0

const updateTestResutls = async (sheetId,sheetName) => {
  const jwt = new JWT({
    email: "conectgooglesheet@indigo-gecko-307403.iam.gserviceaccount.com",
    key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDdey5UmaQ/92m1\nu6vZsHN1nE4A6U9d8EhhC9VfZMo8IrWo8uicgMTw+D6Cc2cCb0UGqFkubaGqR+02\n8xu3vF2u/wNqotKHPSmqroUf65wsECiikW3fFYOdyPYd4enmnrv3BvUqs3Ah2MII\nLixIL8F3sgg6JrHbMjrWfYLMFUIVw0F273k7ilxTmzveacXQ2N04FoR9rIvKI492\nXfzHGCDs6HW6z2gEU7KM8w8NduyVgM7FRzBzWfVGIZ9YR9FzH1nh3CF7h/YI2AFf\nRPgQ1L8nbdwH3DVZGwAeXrdn5XxmHCyHKKZT4XwG4ijb+hlAuiAD2Bw2KKGhrjXK\nu2FseVHTAgMBAAECggEAVs8MJr6doTDBLyjiv40ohAWCkVrg78nZJKh1tlET7yQP\nnauvvn++MVCrd4fx7QNdw7FCWy8/OTW95Va+G3LqKUfst+QfrkArz6ldplg7uw2O\nT8G+lbyh/LsitC2y9uBqffUtLNJt9eY2juxCEP0e0GJoVRqLhYWXiDBjjsgaQdqu\nJUdC0x/NzCUu5U4X/cdNqgiwph2R3ZxkSWZQ6qU0V3rTy/NyYk8Tlo7LJ97tZJ1l\nXlubo4pL71gXEHbSabkhyXANtq3kkdHlpKvgN8ZkNdHBXNxxyCDimNWGLlioTDch\nXA7F9bLS59rTvJ3W9S5GD/DkXPdQRVKsKftNUlgOMQKBgQD7O8vcXWFKQ0LwQcDK\nXMKJuIzCGXIm8zUFyDKE6BpdGCc4A+clxgPp9IlzBKwa1dZ6mn2QHfVbQpnSnzXS\nCz/BXIKrcVN6uJ5gGuqnAkGTnQR0VCpUlYiv7gBqBvSgehWgBiiK11ai2bojL7uL\nfRRMjb0u/v+6Tk8+IcWj3QjtuwKBgQDhruG3NuSBHfBbsUKbcOezP9ncPFJQFA0v\nR5elvtv4Tk9gEefTrnxfgZOKNVHyjUI+H9/6+Vs9GmcJdgJkVlj33HcJ/+yDh0Dh\ndAQARmOcolxWccVTUaRdWNbxLuwmDSOGTZgCzj8zC1BjmWSE3UIm/s0UAUvK7QJo\nOI6oYsReyQKBgF973oMmSm+7GJnPo8JFdvp41aZ/nU8IaEKGUA0LWdm/8Eft09Ab\nbilg80xvnimk1BtM1CQN/s5shaHzOLVX6SdITbFzJNMjj63fDQfkZ5/+sU61HlF/\nc6/JuQaTFi5XuBhVvtrl9Nt3/LKa1aCyLSDbTeeqqu7YDG4Ez+TzgQ05AoGBAI1e\nvDvFofwTogX+EwhGAI4zeChSjQlmlh/AzAjidu6jN2upq7vZOEWnaKGR5wR2YkGC\nPA799p5fFJ5DkxoBUPfq3ZKhAyodJpJT11HIxgtPVWI9IGuh38Etrm8kgn8PiepO\nXuObCNHTy4aohuQHqbG9uP9IFI9ISlK44vwt6m6pAoGBANBKoOJmCR/EV7K4OAr7\nRQzngWwM/hTveyEKuUXPjU/Le2NU918o7IRidansloMNaaiiP228UF2X81Xt+/Dv\n8dZHZ15V1Fsk8KRBYI3wmVTPmi7HCsHX1iPMItyFMGU0aC+/sexsjklNTXJiJexn\nC3YuGsp8HlxxRPAZbJDtI9yZ\n-----END PRIVATE KEY-----\n",
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const doc = new GoogleSpreadsheet(sheetId, jwt);

  await doc.loadInfo();

  const sheet = doc.sheetsByTitle[sheetName];
  const rows = await sheet.getRows();
  const testResultsData = fs.readFileSync('./test-results/test-results.json', 'utf8');
  const testResults = JSON.parse(testResultsData);
  const tags = [];
  const statuses = [];

  testResults.suites.forEach(suite => {
    suite.suites.forEach(subSuite => {
      subSuite.specs.forEach(spec => {
        // Add the spec's tags to the tags array
        tags.push(...spec.tags);

        // Add the spec's status to the statuses array
        if (tags.some(tag => spec.tags.includes(tag))) {
          // If it does, add its status to the statuses array
          statuses.push(spec.tests[0].results[0].status);
        }
      });
    });
  });



  console.log(tags,statuses);


  for (const iterator of rows) {
    for (let index = 0; index < tags.length; index++) {
      let tcId = iterator.get('AutoID');
      if (typeof tcId != "undefined" &&tcId.includes(tags[index])) {
        iterator.set('AutoResult', statuses[index])
        iterator.assign({ AutoResult: statuses[index], AutoNote: `=HYPERLINK("https://git3.nexdev.net/l1/ui-automation-tests/automation-tests/-/jobs/${pid}", "Result")`})
        await iterator.save();
     }      
    }
   
  }

};

const fileMatch = `${process.env.npm_config_gameid}-*`;
const regex = new RegExp(fileMatch);
const filePath = path.join(__dirname,'tests/games', fs.readdirSync('tests/games').find(file => regex.test(file)), 'gsheetInfo.json');
const cfdata = fs.readFileSync(filePath, 'utf8');
const gsheetInfo = JSON.parse(cfdata).GoogleSheet_info;
// console.log(gsheetInfo);
for (const iterator of gsheetInfo.sheetName) {
  updateTestResutls(gsheetInfo.spreadsheetId,iterator)
}