import { Web5 } from '@web5/api';

const { web5, did: aliceDid } = await Web5.connect();

console.log(aliceDid);