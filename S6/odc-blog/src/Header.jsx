import './Header.css';

function Header(props) {
    const styles = {
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25px',
        border: 'solid 1px #00000030',
        backgroundColor: '#0071bd'
    }

    const navStyle = {
        display: 'flex',
        gap: '20px'
    }
    return (
        <div style={styles}>
            <h2>{props.title}</h2>
            <nav style={navStyle}>
                <a>{props.home}</a>
                <a>{props.blog}</a>
                <a>{props.about}</a>
            </nav>
            <button>{props.contact}</button>
        </div>
    )
}

export default Header;