import { Link } from 'react-router-dom';


function Navbar(){
    const styles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: 'solid 1px #00000020'
    }

    return (
        <nav style={styles}>
            <h1>Blog</h1>
            <div style={{display: 'flex', gap: '10px'}}>
                <Link to="/"><span>Home</span></Link>
                <Link to="/about"><span>About</span></Link>
                <Link to="/contact"><span>Contact</span></Link>
            </div>
            <div style={{display: 'flex', gap: '10px'}}>
                <Link to='/register'>
                    <button>S'inscrire</button>
                </Link>
                <button>Connexion</button>
            </div>
        </nav>
    )
}

export default Navbar;