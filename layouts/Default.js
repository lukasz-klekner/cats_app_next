import Nav from '../components/Nav'

const DefaultLayout = ({ children }) => (
  <>
    <Nav />
    <main>{children}</main>
  </>
)

export default DefaultLayout
