const os = require('os');

// info about current user
const user = os.userInfo();

console.log(user);

// method return system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds `);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
const { userInfo } = require('os');
console.log(currentOS);
console.log(userInfo, 'dasf');