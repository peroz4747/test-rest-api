const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const fetch = require("node-fetch");
const express = require('express')
const app = express();
const port = 3000;

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
app.get('/:id', (req, res) => {
    let arr= db.find(d=>d.id===parseInt(req.params.id));
    if (!arr){
        res.status(404).send('ni rezultata');
    }else{
        res.send(arr);
    }
}); 
app.listen(port, () => console.log(`Listening on port ${port}`))

readline.question('Vnesite integer (1-4):', num => {
    if (num==1){
        let cou=0;
        function result1(){
            let a=new Promise ((resolve,reject)=>{
                resolve(fetch('http://localhost:3000/1',{
                    method:'GET',
                }))
            });
            a.then(data=>data.json()).then(res=>{
                console.log(res.title);
                cou+=1;
            }).catch(error=>{
                console.log(error);
            });
        }
        function result2(){
            let b=new Promise ((resolve,reject)=>{
                resolve(fetch('http://localhost:3000/2',{
                    method:'GET',
                }))
            });
            b.then(data=>data.json()).then(res=>{
                console.log(res.title);
                cou+=1;
            }).catch(error=>{
                console.log(error);
            });
        }
        function result3(){
            let c=new Promise ((resolve,reject)=>{
                resolve(fetch('http://localhost:3000/3',{
                    method:'GET',
                }))
            });
            c.then(data=>data.json()).then(res=>{
                console.log(res.title);
                cou+=1;
            }).catch(error=>{
                console.log(error);
            });
        }
        function result4(){
            let d=new Promise ((resolve,reject)=>{
                resolve(fetch('http://localhost:3000/4',{
                    method:'GET',
                }))
            });
            d.then(data=>data.json()).then(res=>{
                console.log(res.title);
                cou+=1;
            }).catch(error=>{
                console.log(error);
            });
        }
        function state(cou){
            console.log(cou+"/4 uspešni klici");
        }
        async function myFunct(){
            const res1= await result1();
            const res2= await result2();
            const res3= await result3();
            const res4= await result4();
            const st=state(cou);
        }
        myFunct()
    }else if(num==2){
        let cou=0;
        function result1(){
            let a=new Promise ((resolve,reject)=>{
                resolve(fetch('http://localhost:3000/1',{
                    method:'GET',
                }))
            });
            a.then(data=>data.json()).then(res=>{
                console.log(res.title);
                cou+=1;
            }).catch(error=>{
                console.log(error);
            });
        }
        function result2(){
            let b=new Promise ((resolve,reject)=>{
                resolve(fetch('http://localhost:3000/2',{
                    method:'GET',
                }))
            });
            b.then(data=>data.json()).then(res=>{
                console.log(res.title);
                cou+=1;
            }).catch(error=>{
                console.log(error);
            });
        }
        function result3(){
            let c=new Promise ((resolve,reject)=>{
                resolve(fetch('http://localhost:3000/3',{
                    method:'GET',
                }))
            });
            c.then(data=>data.json()).then(res=>{
                console.log(res.title);
                cou+=1;
            }).catch(error=>{
                console.log(error);
            });
        }
        function result4(){
            let d=new Promise ((resolve,reject)=>{
                resolve(fetch('http://localhost:3000/4',{
                    method:'GET',
                }))
            });
            d.then(data=>data.json()).then(res=>{
                console.log(res.title);
                cou+=1;
            }).catch(error=>{
                console.log(error);
            });
        }
        function state(cou){
            console.log(cou+"/4 uspešni klici");
        }
        async function myFunct(){
            const res1= await result1();
            const res2= await result2();
            const res3= result3();
            const res4= result4();
            const st=state(cou);
        }
        myFunct()
    }else if(num==3){
        let cou=0;
        function result1(){
            let a=new Promise ((resolve,reject)=>{
                resolve(fetch('http://localhost:3000/1',{
                    method:'GET',
                }))
            });
            a.then(data=>data.json()).then(res=>{
                console.log(res.title);
                cou+=1;
            }).catch(error=>{
                console.log(error);
            });
        }
        function result2(){
            let b=new Promise ((resolve,reject)=>{
                resolve(fetch('http://localhost:3000/2',{
                    method:'GET',
                }))
            });
            b.then(data=>data.json()).then(res=>{
                console.log(res.title);
                cou+=1;
            }).catch(error=>{
                console.log(error);
            });
        }
        function result3(){
            let c=new Promise ((resolve,reject)=>{
                resolve(fetch('http://localhost:3000/3',{
                    method:'GET',
                }))
            });
            c.then(data=>data.json()).then(res=>{
                console.log(res.title);
                cou+=1;
            }).catch(error=>{
                console.log(error);
            });
        }
        function result4(){
            let d=new Promise ((resolve,reject)=>{
                resolve(fetch('http://localhost:3000/4',{
                    method:'GET',
                }))
            });
            d.then(data=>data.json()).then(res=>{
                console.log(res.title);
                cou+=1;
            }).catch(error=>{
                console.log(error);
            });
        }
        function state(cou){
            console.log(cou+"/4 uspešni klici");
        }
        async function myFunct(){
            const res1= await result1();
            const res2= result2();
            const res3= result3();
            const res4= result4();
            const st=state(cou);
        }
        myFunct()
    }else if(num==4){
        let cou=0;
        function result1(){
            let a=new Promise ((resolve,reject)=>{
                resolve(fetch('http://localhost:3000/1',{
                    method:'GET',
                }))
            });
            a.then(data=>data.json()).then(res=>{
                console.log(res.title);
                cou+=1;
            }).catch(error=>{
                console.log(error);
            });
        }
        function result2(){
            let b=new Promise ((resolve,reject)=>{
                resolve(fetch('http://localhost:3000/2',{
                    method:'GET',
                }))
            });
            b.then(data=>data.json()).then(res=>{
                console.log(res.title);
                cou+=1;
            }).catch(error=>{
                console.log(error);
            });
        }
        function result3(){
            let c=new Promise ((resolve,reject)=>{
                resolve(fetch('http://localhost:3000/3',{
                    method:'GET',
                }))
            });
            c.then(data=>data.json()).then(res=>{
                console.log(res.title);
                cou+=1;
            }).catch(error=>{
                console.log(error);
            });
        }
        function result4(){
            let d=new Promise ((resolve,reject)=>{
                resolve(fetch('http://localhost:3000/4',{
                    method:'GET',
                }))
            });
            d.then(data=>data.json()).then(res=>{
                console.log(res.title);
                cou+=1;
            }).catch(error=>{
                console.log(error);
            });
        }
        function state(cou){
            console.log(cou+"/4 uspešni klici");
        }
        async function myFunct(){
            const res1= result1();
            const res2= result2();
            const res3= result3();
            const res4= result4();
            const st= state(cou);
        }
        myFunct()
    }else{
            console.log('napačna številka');
    }
    readline.close();
});
