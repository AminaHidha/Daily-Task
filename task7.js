                                        //   FETCHING


fetch("https://jsonplaceholder.typicode.com/posts")
.then(res=>res.json())
.then(txt=>console.log(txt[0]))
.catch(err=>console.log("error"+err))


