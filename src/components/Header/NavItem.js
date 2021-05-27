import './NavItem.css'

const NavItem = props => {
  return (
    <li>
      <a className='nav-link' href={props.link}>
        {props.text}
      </a>
    </li>
  )
}

export default NavItem
