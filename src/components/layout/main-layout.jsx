import Footer from "../footer"
import Navbar from "../header"

const MainLayout = ({children}) => {
  return (
    <>
     <Navbar/>
     {children}
     <Footer />
    </>
  )
}

export default MainLayout