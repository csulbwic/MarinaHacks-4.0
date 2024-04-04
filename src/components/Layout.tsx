import { NavBar, Footer, Landing } from '@/components'

export const Layout = ({ children, showOverlay, setShowOverlay }:any) => {
  return (
    <>
      {/* <NavBar showOverlay={showOverlay} setShowOverlay={setShowOverlay}/> */}
      {/* <Landing/> */}
      <main>{children}</main>
      <Footer />
    </>
  )
}