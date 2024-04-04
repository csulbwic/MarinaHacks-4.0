import { NavBar, Footer } from '@/components'

export const Layout = ({ children, showOverlay, setShowOverlay }:any) => {
  return (
    <>
      {/* <NavBar showOverlay={showOverlay} setShowOverlay={setShowOverlay}/> */}
      <main>{children}</main>
      <Footer />
    </>
  )
}