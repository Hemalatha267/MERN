import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-gray-900 font-bold px-6 py-4">
        <ul className="flex text-blue-50 justify-around">
            <li><Link to={"/"}>Home</Link></li> 
            <li><Link to={"/about"}>about</Link></li> 
            <li><Link to={"/Services"}>Services</Link></li> 
            <li><Link to={"/contact"}>contact</Link></li> 
        </ul>
    </div>
  )
}

export default Navbar