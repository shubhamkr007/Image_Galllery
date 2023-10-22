import Imagegallery from "../components/Imagegallery"
import Navbar from "../components/Navbar"
import Uploadform from "../components/Uploadform"

const Home = () => {
  return (
      <div className='max-w-4xl mx-auto'>
      <Navbar/>
      <Uploadform/>
      <Imagegallery/>
    </div>
  )
}

export default Home