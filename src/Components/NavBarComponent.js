import './Components.css';

function NavBarComponent() {
  return (
    <>
    
      <nav className='navBar'>

        <ul className='items fontMenu'>

          <div className='logoContainer'>
            <a href='/' className='logoLink'><div className='logo'></div></a>
          </div>

          <a href='/'><li className='item'>
            Home
          </li></a>
          <a href='/'>
          <li className='item'>
          Elenco
          </li></a>
          <a href='/'><li className='item'>
            Conquistas
          </li></a>
          <li className='item'>
            Campeonatos
            <div className="dropdown-content">
              <a href='/'>OBR</a>
              <a href='/'>FLL</a>
            </div>
          </li>
          <a href='/'><li className='item'>
          Sobre nós
          </li></a>

        </ul>

      </nav>
    
    </>
  );
}

export default NavBarComponent;
