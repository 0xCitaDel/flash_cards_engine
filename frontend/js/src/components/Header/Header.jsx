import {NavLink} from 'react-router-dom'

const Header = (props) => {
  return (
    <nav>
      <NavLink to='/cards'>FlashCards</NavLink> 
    </nav>
  );
}

export default Header
