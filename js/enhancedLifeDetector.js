const status = Number(process.argv[2]);
const statusMap = {
  0: 'alive',
  1: 'flowering',
  2: 'shedding'
}
if(statusMap[status])
  console.log(statusMap[status]);
else console.log('other');