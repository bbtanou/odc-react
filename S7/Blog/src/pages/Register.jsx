import { useState } from "react";
import { useNavigate } from 'react-router-dom';


function Register(){
    const navigate = useNavigate();
    const [person, setData] = useState({name: '', email: '', password: ''});
    
    const detectChange = (e) => {
        const p = {...person, [e.target.name]: e.target.value}
        setData(p);
    }

    const addPerson = (e) => {
        e.preventDefault();

        if(!person.name || !person.email || !person.password){
            console.log('Formulaire invalide');
            return;
        }

        const json = JSON.stringify(person);
        sessionStorage.setItem("User", json);

        setData({
            name: '', email: '', password: ''
        })

        navigate('/connexion');
    }
    
    return (
        <div>
            <h1>Formulaire d'inscription</h1>
            <form onSubmit={addPerson}>
                <input placeholder="Nom complet" name='name' value={person.name} onChange={detectChange}/>
                <input placeholder="Email" name='email' value={person.email} onChange={detectChange} />
                <input placeholder="Votre mot de pass" name='password' value={person.password} onChange={detectChange} />

                <button type="submit">Enregistrer</button>
            </form>
        </div>
    );
}

export default Register;