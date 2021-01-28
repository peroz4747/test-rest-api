const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const fetch = require("node-fetch");
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//knjižnica naslovov v array object formi

const db=[
    {
        id:1, 
        title:'Izzivi in rešitve'
    },
    {
        id:2, 
        title:'RESULT = partner za vašo rast'
    },
    {
        id:3, 
        title:'Pridruži se revoluciji'
    },
    {
        id:4, title:'Blog & novice'
    },
];

// hello world api

app.get('/helloWorld', (req, res) => {
    try {
        res.send("Hello World");
    } catch (error) {
        console.log(error);
    }
});

// definirane async funkcije

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
            const response = await fetch(`http://localhost:3000/query?int=${i}`);
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
            fetch("http://localhost:3000/query?int=1"),
            fetch("http://localhost:3000/query?int=2")
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
            const response = await fetch(`http://localhost:3000/query?int=${i}`);
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
            fetch("http://localhost:3000/query?int=1"),
            fetch("http://localhost:3000/query?int=2"),
            fetch("http://localhost:3000/query?int=3")
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
        const response = await fetch(`http://localhost:3000/query?int=4`);
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
            fetch("http://localhost:3000/query?int=1"),
            fetch("http://localhost:3000/query?int=2"),
            fetch("http://localhost:3000/query?int=3"),
            fetch("http://localhost:3000/query?int=4")
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
        if(int==1){
            let q1= db.find(d=>d.id===int);
            res.send(q1);
        }else if(int==2){
            let q2= db.find(d=>d.id===int);
            res.send(q2);
        }else if(int==3){
            let q3= db.find(d=>d.id===int);
            res.send(q3);
        }else if(int==4){
            let q4= db.find(d=>d.id===int);
            res.send(q4);
        }else{
            console.log("napačen integer")
            res.send("napačen integer");
        }
    } catch (error) {
        console.log(error);
    }
}); 

app.listen(port, () => console.log(`Listening on port ${port}`))

// terminal odzivi

readline.question('Vnesite integer (1-4):', num => {
    if (num==1){
        asyncCall1();
    }else if (num==2){
        asyncCall2();
    }else if (num==3){
        asyncCall3();
    }else if (num==4){
        asyncCall4();
    }
    else{
        console.log("nepravilno število")
    }
    readline.close();
});
