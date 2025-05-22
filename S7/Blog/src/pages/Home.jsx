import { useState } from 'react';
import * as Yup from 'yup';

function Home() {
    const json = sessionStorage.getItem("User");
    if (!json) {

        const [data, setEmail] = useState({ email: '', age: 0});
        const [errors, setErrors] = useState({});

        const detectChange = (e) => {
            const {name, value} = e.target;
            const d = {...data, [name]: value};
            setEmail(d); 

            subscribe(e);
        }

        const schema = Yup.object().shape({
            email: Yup.string()
                .required("L'adresse email est requis")
                .min(6, "Il que l'address ai au moins 6 caractere")
                .email('Il faut que cela soit un mail valid'),
            age: Yup.number()
                .required('Vous devez donner votre age')
                .min(10, "Vous devez au moins avoir 10 ans")
    
        })

        const subscribe = async (e) => {
            e.preventDefault();

            try{
                await schema.validate(data, {abortEarly: true});
                setErrors({});
            }catch(validationError){
                const errObject = {};
                if(validationError instanceof Yup.ValidationError){
                    console.log(validationError);
                    validationError.inner.forEach(err => {
                        if(!errObject[err.path]){
                            console.log(err.errors);
                            errObject[err.path] = err.errors.join("\n");
                        }
                    })
                }
                setErrors(errObject);
            }
        }


        return (
            <>
                <h1>Hi every one</h1>
                <form onSubmit={subscribe}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <span style={{color: 'red', fontSize: '9px'}}>{errors.email}</span>
                        <label>Adresse email</label>
                        <input value={data.email}  name='email' onChange={detectChange} placeholder='Votre adresse email'/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <span style={{color: 'red', fontSize: '9px'}}>{errors.age}</span>
                        <label>Votre age</label>
                        <input value={data.age}  name='age' onChange={detectChange} placeholder='Votre age'/>
                    </div>
                    <button >S'abonner</button>
                </form>
            </>
        )
    }

    const person = JSON.parse(json);
    return (
        <h1>Hi am {person.name} my email address is : {person.email}</h1>
    )
}

export default Home;