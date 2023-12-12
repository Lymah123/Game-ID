import { Web5 } from '@web5/api';


const { web5,did: gammyDid} = await Web5.connect();

// const { protocols } = await web5.dwn.protocols.query({
//     message: {
//       filter: {
//         protocol: 'https://music.org/protocol',
//       },
//     },
//   });

// Reads the indicated record from the user's DWNs
// let { record } = await web5.dwn.records.read({
//   message: {
//     filter: {
//       recordId: recordId
//     }
//   }
// });

// assuming the record has a text payload
// const text = await record.data.text();





console.log(gammyDid);