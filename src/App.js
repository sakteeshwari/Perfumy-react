import Navbar from "./components/Navbars"
import Searchbar from "./components/Search"
import Images from "./components/Images"
import Aboutus from "./components/About"
import Contact from "./components/Footer"


function App(){
    return (
        <div>
        <Navbar></Navbar>
        <Searchbar></Searchbar>
       <Images></Images>
       <Aboutus></Aboutus>
       <Contact></Contact>
      </div>
    )
}
export default App