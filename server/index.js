import { Web5 } from '@web5/api';
//Open app process
//Make decision whether mobile or desktop: if else statement.
//Make a decision whether to enter DID or ENTER inputs to join
//If you Enter inputs to join
//Genetate DID
// Then set password
//If enter DID
// Enter Password
//Next process
//Register this password
//Enter display number
//Enter passcode to be approved.


const { web5, did: aliceDid } = await Web5.connect();

console.log(aliceDid);