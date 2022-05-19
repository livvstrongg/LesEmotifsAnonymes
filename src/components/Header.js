import {Link} from 'react-router-dom'
import logo from './../img/logo.png'

function Header(props) {
    return (
    <header className='center'>
        <img src={logo} alt="Les Emotifs Anonymes" />
    </header>
        )
  }
  
  export default Header;