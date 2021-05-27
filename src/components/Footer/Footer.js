import './Footer.css'

const footerLinks = [
  {
    link: '/privacy',
    text: 'Privacy'
  },
  {
    link: '/terms',
    text: 'Terms'
  },
  {
    link: '/contact',
    text: 'Contact'
  }
]

const Footer = () => {
  return (
    <footer>
      <ul>
        {footerLinks.map(item => (
          <li key={item.link}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
      <span>Copyright 2016, Original Trombones</span>
    </footer>
  )
}

export default Footer
