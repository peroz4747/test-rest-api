const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const puppeteer = require('puppeteer');
const fetch = require("node-fetch");
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//pupeeteer po web scrapingu vseh strani shrani naslove v object db

const db={};    

const arr=[
        'https://www.result.si/projekti/',
        'https://www.result.si/o-nas/',
        'https://www.result.si/kariera/',
        'https://www.result.si/blog/'
    ];

async function getContent(){
    const browser = await puppeteer.launch({headless: true,});
    let arr_len=arr.length;
    for (i=0;i<arr_len;i++){
        const page = await browser.newPage();
        process.on('unhandledRejection', (reason, p) => {
            console.error('Unhandled Rejection at: Promise', p, 'reason:', reason);
            browser.close();
        });
        await page.goto(arr[i],{
            waitUntil: 'domcontentloaded',
        });
        const [el]= await page.$x('//*[@class="et_pb_module_header"]');
        const txt = await el.getProperty('textContent');
        const title=await txt.jsonValue();
        db[i]=[{title}];
    }
    browser.close();
}

// hello world api

app.get('/helloWorld', (req, res) => {
    try {
        res.send("Hello World");
    } catch (error) {
        console.log(error);
    }
});

// definirane async funkcije - 

/*
 če integer predstavlja št. sočasnih klicev in 1=vsi zaporedni klici,
 potem je int=2 ali int=3(v našem primeru sem izbral int=2): 
 2 zaporedna klica, 2 sočasna klica.
*/

var yay=0;
var nay=0;
async function asyncCall1(){
    for (i=1;i<5;i++){
        try {
            const response = await fetch(`http://localhost:${port}/query?int=${i}`);
            const data = await response.json();
            yay+=1;
            console.log(data.title);
        } catch (err) {
            nay+=1;
            console.log(err);
        }
    }
    console.log(`${yay} uspešni klici`);
    console.log(`${nay} neuspešni klici`);
}
async function asyncCall2(){
    try {
        const [response1, response2] = await Promise.all([
            fetch(`http://localhost:${port}/query?int=1`),
            fetch(`http://localhost:${port}/query?int=2`)
          ]);
        const data1 = await response1.json();
        const data2 = await response2.json();
        yay+=2;
        console.log(data1.title);
        console.log(data2.title);
    } catch (err) {
        nay+=2;
        console.log(err);
    }
    for (i=3;i<5;i++){
        try {
            const response = await fetch(`http://localhost:${port}/query?int=${i}`);
            const data = await response.json();
            yay+=1;
            console.log(data.title);
        } catch (err) {
            nay+=1;
            console.log(err);
        }
    }
    console.log(`${yay} uspešni klici`);
    console.log(`${nay} neuspešni klici`);
}
async function asyncCall3(){
    try {
        const [response1, response2, response3] = await Promise.all([
            fetch(`http://localhost:${port}/query?int=1}`),
            fetch(`http://localhost:${port}/query?int=2`),
            fetch(`http://localhost:${port}/query?int=3`)
          ]);
        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();
        yay+=3;
        console.log(data1.title);
        console.log(data2.title);
        console.log(data3.title);
    } catch (err) {
        nay+=3;
        console.log(err);
    }
    try {
        const response = await fetch(`http://localhost:${port}/query?int=4`);
        const data = await response.json();
        yay+=1;
        console.log(data.title);
    } catch (err) {
        nay+=1;
        console.log(err);
    }
    console.log(`${yay} uspešni klici`);
    console.log(`${nay} neuspešni klici`);
}
async function asyncCall4(){
    try {
        const [response1, response2, response3, response4] = await Promise.all([
            fetch(`http://localhost:${port}/query?int=1`),
            fetch(`http://localhost:${port}/query?int=2`),
            fetch(`http://localhost:${port}/query?int=3`),
            fetch(`http://localhost:${port}/query?int=4`)
          ]);
        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();
        const data4 = await response4.json();
        yay+=4;
        console.log(data1.title);
        console.log(data2.title);
        console.log(data3.title);
        console.log(data4.title);
    } catch (err) {
        nay+=4;
        console.log(err);
    }
    console.log(`${yay} uspešni klici`);
    console.log(`${nay} neuspešni klici`);
}

// query api, ki ob parametru (int) med 1-4 pošlje ustrezen response

app.get('/query', (req, res) => {
    try {
        let int=parseInt(req.query.int);
        if(int===1||int===2||int===3||int===4){
            let q= db[int-1][0];
            res.send(q);
        }else{
            console.log("napačen integer")
            res.send("napačen integer");
        }
    } catch (error) {
        console.log(error);
    }
}); 

var que = () => {
    readline.question('Vnesite integer (1-4):\n', num => {
        if (num==1){
            asyncCall1();
            que();
            yay=0;
            nay=0;
        }else if (num==2){
            asyncCall2();
            que();
            yay=0;
            nay=0;
        }else if (num==3){
            asyncCall3();
            que();
            yay=0;
            nay=0;
        }else if (num==4){
            asyncCall4();
            que();
            yay=0;
            nay=0;
        }
        else{
            console.log("nepravilno število");
            que();
        }
        //readline.close();
    });
    
}

async function start(){
    
    // preden začnemo z poizvedovanjem program čaka na puppeteer da popolni object db 
    
    console.log("čakam na podatke...");
    let cnt= await getContent();
    console.log('\033[2J');
    let serv= await app.listen(port,() => console.log(`Listening on port ${port}`))
    que();
}
start();

