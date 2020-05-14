// export function fetchWow() {
//   debugger
//   console.log('in fetch wow')
//   const blizzard = require('blizzard.js').initialize({
//     key: process.env.BLIZZARD_CLIENT_ID,
//     secret: process.env.BLIZZARD_CLIENT_SECRET,
//     origin: 'us', // optional
//     locale: 'en_US', // optional
//     token: '' // optional
//   });
 
//   blizzard.getApplicationToken()
//   .then(response => {
//     blizzard.defaults.token = response.data.access_token
//   })
//    .then(token => console.log(token))
//   blizzard.wow.item({ id: 168185 })
//   .then(response => {
//     console.log(response.data);
//   });
// }

const blizzard = require('blizzard.js').initialize({
  key: process.env.BLIZZARD_CLIENT_ID,
  secret: process.env.BLIZZARD_CLIENT_SECRET,
  origin: 'us',
  locale: 'en_US'
});

export async function fetchWow () {
  try {
    await blizzard.getApplicationToken()
      .then(response => {
        blizzard.defaults.token = response.data.access_token
      });
    const item = await blizzard.wow.item({ id: 168185 });
    console.log(item)
  } catch (err) {
    console.error(err);
  }
}
