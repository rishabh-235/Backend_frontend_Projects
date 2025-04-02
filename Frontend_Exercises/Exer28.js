//Primise creation and handling it with .then().
const promise = new Promise((res)=>{
    setTimeout(()=>{
        res("Promise Got Resolved after 2sec");
    },2000)
})

promise.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

// Example of Async and Await
async function apiFetching(src){
    const data = await fetch(src);
    const redableData = await data.json();
    return redableData;
}

apiFetching('https://randomuser.me//api?gender=male').then((res)=>{

    const {title, first, last} = res.results[0].name;

    console.log(title+" "+ first+" "+ last);
})