import NavItem from './NavItem'

import './Nav.css'

const menu = [
  {
    link: '#features',
    text: 'Features'
  },
  {
    link: '#how-it-works',
    text: 'How It Works'
  },
  {
    link: '#pricing',
    text: 'Pricing'
  }
]

const Nav = () => {
  return (
    <nav id='nav-bar'>
      <ul>
        {menu.map(menuItem => (
          <NavItem
            key={menuItem.link}
            link={menuItem.link}
            text={menuItem.text}
          />
        ))}
      </ul>
    </nav>
  )
}

export default Nav
