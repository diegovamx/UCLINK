import Navbar from "./Navbar"
import "./Layout.css"

const Layout = ({ children }) => {
  return (
    <div className='layout'>
        <Navbar />
        <main className='screen'>{children}</main>
    </div>
  )
}

export default Layout