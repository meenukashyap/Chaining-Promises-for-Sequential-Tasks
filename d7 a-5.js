function starttask()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task A completed")
        },1000)
    });
}
function processtask(taskAresult)
{
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve(`Task B is process,${taskAresult}`)
},1500)
    });
}
function finaltask(taskBresult)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`final result:,${taskBresult}`)
        },500)
    });
}
starttask()
.then(resultA=>{
    console.log(resultA)
    return processtask(resultA)
})
.then(resultB=>{
    console.log(resultB)
    return processtask(resultB)
})
.then(finalresult=>{
    console.log(finalresult)
})
.catch(error=>{
console.log("error:",error)
})
