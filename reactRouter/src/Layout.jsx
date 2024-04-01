import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/* this is used to render dynamic components */}
      <Footer />
    </>
  )
}

export default Layout