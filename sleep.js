function sleep(millis){
    return new Promise((resolve)=>{
        setTimeout(resolve,millis)
    })
}

async function setsleep() {
    let t=Date.now()
    await sleep(200)
    console.log(Date.now()-t);
    
}
setsleep()


