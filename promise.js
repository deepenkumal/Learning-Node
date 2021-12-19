let p =new Promise((resolve, reject)=>{
    let a = 1+2;
    if (a==3){
        resolve("This is succes");
    }
    else{
        reject("This is failed");
    }
});

p.then((message)=>{
    console.log("this is :"+message)
}).catch((message)=>{
    console.log("this is :"+message)
})

module.exports.p = p;