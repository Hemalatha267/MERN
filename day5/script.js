//Executes immediately->microtask(promises)
//Executes after some time->macrotask
console.log('hello');
setTimeout(()=>{
    console.log("will log after 2 seconds")
},0)
console.log('end')
