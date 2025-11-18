import './Header.css'
import logo from '../assets/logo.png'


function Header() {
  return (
    <div className = 'header_container'>
        <div className = 'header_logo'>
            <img src = {logo} alt = 'logo' />
        </div>
      <h1 className = 'header_title'>
        Hello World</h1>
    </div>
  )
}

export default Header;