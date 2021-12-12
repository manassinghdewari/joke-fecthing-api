//fetch()
//1-fullfilled 2-reject
//async await
// GET https://icanhazdadjoke.com/ 
const jokes=document.querySelector("#joke");
const jokeBtn=document.querySelector("#jokeBtn");
const generateJokes=()=>{
    const setHeader={
        headers:{
            "Accept":"application/json"
        }
    }
    fetch('https://icanhazdadjoke.com/',setHeader)
    .then((res)=>                      //used for getting the response from api and it will store it into "res".
        res.json()                      //we get datain html format to convert it to json object we use this method.
    )
    .then((data)=>{                     //for getting data
        jokes.innerHTML=data.joke;    
    })
    .catch((error)=>{
        console.log(error);             //if there is any then catch will run and type of error store in error 
    })
}
jokeBtn.addEventListener('click',generateJokes);
generateJokes();    //automatically calling of function bcz one jokes should be display when we refresh the page .
