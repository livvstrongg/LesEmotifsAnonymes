import {Link} from 'react-router-dom'

function Header(props) {
    return (
    <header>
        <h1>Les Emotif's Anonymes</h1>
        <nav>
            <Link to='/'>
                <div>Home</div>
            </Link>
            <Link to='/about'>
                <div>About</div>
            </Link>
        </nav>
    </header>
        )
  }
  
  export default Header;