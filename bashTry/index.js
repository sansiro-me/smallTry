#!/usr/bin/env node

// const program = require('commander');

// program
//   .command('new [name]')
//   .alias('n')
//   .description('Creates a new project')
//   .action(function (name) {
//     const projectName = name || 'myApp';
//     // init({ app: projectName })
//     console.log("sasdasd");
//     console.log(projectName);
//     // sayName(projectName);
//   });

//   program.parse(process.argv);

//   function sayName(name) {
//     console.log("Hello, " + name);
//   }


// ----------------------------------------------------------


const readline = require('readline');

const line = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

line.question('你要对谁说？  ', answer => {
  getAsyncData().then(() => {
    console.log(`你好啊，${answer}`);
    // process.exit(0);
    line.question('然后再要对谁说？  ', answer => {
      getAsyncData().then(() => {
        console.log(`你好啊哈哈哈，${answer}`);
        process.exit(0);
      })
    });
  })
});





function getAsyncData() {
  return new Promise((res, rej) => {
    let i = 0;
    let percent = Math.floor(i * 5);
    let timer = setInterval(() => {
      if (i > 20) {
        clearInterval(timer);
        console.log('\n');
        res()
        return;
      }
      percent = Math.floor(i * 5);

      readline.moveCursor(process.stdout, -100, 0);
      readline.clearScreenDown(process.stdout);
    
      let left = '='.repeat(i).repeat(2);
      let right = ' '.repeat(20 - i).repeat(2);
    
      process.stdout.write(`正在说：[${left}${right}] ${percent}%`);
      i++;
    }, 100)
  })


  // const percent = Math.floor(i * 5);

  // const count = 2;

  // let left = loaded.repeat(i).repeat(count);
  // let right = unload.repeat(20 - i).repeat(count);

  // process.stdout.write(`正在说：[${left}${right}] ${percent}%`);
}

