import Login from "../Auth/Login";

const Navbar = () => {
  return (
    <nav className="site-navigation bg-gray-800 text-white ">
      <div className="container flex flex-wrap items-center content-between mx-auto">
      <h4 ><a href="/">Social Site</a></h4>
      <Login/>
      </div>
    </nav>
  )
}

export default Navbar;