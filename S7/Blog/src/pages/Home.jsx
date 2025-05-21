function Home(){

    const json = sessionStorage.getItem("User");
    if(!json){
       return (
            <h1>Hi every one</h1>
       )
    }
    
    const person = JSON.parse(json);
    return (
        <h1>Hi am {person.name} my email address is : {person.email}</h1>
    )
}

export default Home;