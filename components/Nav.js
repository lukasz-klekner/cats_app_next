import Link from 'next/link'

const Nav = () => (
  <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <div className='container-md'>
      <Link className='navbar-brand' href='/'>
        Navbar
      </Link>
    </div>
  </nav>
)

export default Nav
