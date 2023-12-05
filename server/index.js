import { Web5 } from '@web5/api';


const { web5,did: gammyDid} = await Web5.connect();



console.log(gammyDid);