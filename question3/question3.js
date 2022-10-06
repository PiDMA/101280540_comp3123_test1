const fs = require('fs');

//Creating the logs and checking/creating the log folder in one function
const createLogs = () => {

    const logFolder = './logs';
    if (!fs.existsSync(logFolder)) {
        console.log(`"logs" folder created\n`)
        fs.mkdirSync(logFolder);
    } else {
        console.log(`"logs" folder already exists`);
    }
    //create log files, the documentation shows that it should start at log 0 and end at 9
    for(let i = 0; i < 10; i++) {
        console.log(`log${i}.txt`);
        fs.writeFile(`./logs/log${i}.txt`, `log${i} \n some text`, (err) => {
            if(err) {
                console.error(err);
            }
        });
    }
}

const removeLogs = () => {
    const logFolder = './logs';
    if (fs.existsSync(logFolder)) {
        for(let i = 0; i < 10; i++){
            if(fs.existsSync(`./logs/log${i}.txt`)) {
                console.log(` delete files....log${i}.txt`); 
                fs.unlinkSync(`./logs/log${i}.txt`);
            }
        }
    } else {
        console.log('log folder already removed');
    }
}

createLogs();
// removeLogs();