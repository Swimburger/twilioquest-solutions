const statusId = process.argv[2];
const dryness = process.argv[3];
if(Number(statusId) === 0 && Number(dryness) > 10) console.log('WATER');
