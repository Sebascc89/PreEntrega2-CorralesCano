import { Link } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";

import './NavBar.css'

function NavBar() {

  const links = [
    {
      linkId: 'transparente',
      linkName: 'Línea transparente'
    }, {
      linkId: 'blanca',
      linkName: 'Línea blanca'
    }, {
      linkId: 'papel',
      linkName: 'Línea papel'
    }
  ]
  return (

    <div className='Navbar'>
      <div className='Logo'>
        <Link to={'/'}>UMAN</Link>
      </div>
      <ul className='NavigationList'>
        {links.map(({ linkId, linkName }) =>
          <li key={linkId}>
            <Link to={`category/${linkId}`}>{linkName}</Link>
          </li>
        )}
      </ul>
      {/* <i className="fa-solid fa-cart-plus" /> */}
      <CartWidget />
    </div>


  );
}

export default NavBar;