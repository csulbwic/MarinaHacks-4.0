import { NavBar, Footer } from '@/components'

export const Layout = ({ children }:any) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}