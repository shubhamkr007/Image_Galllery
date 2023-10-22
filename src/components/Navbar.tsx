import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

const Navbar = () => {

  const handleLogout =async ()=>{
    try{
      await signOut(auth)
    }
    catch(error){
      console.log(error.message);
    }
  }

  return (
    <div className="navbar bg-base-100 justify-between">
  <a className="font-bold normal-case text-3xl ">Image Gallery 🖼️</a>
  <button className="btn btn-outline btn-error max-h-2" onClick={handleLogout}>Logout</button>
</div>
  )
}

export default Navbar