import { useEffect, useState } from "react";
import { Layout } from "@/components";
import style from '../styles/landing.module.css'
import Cookies from 'js-cookie'

const overlayCookieName = "overlayDismissed"

export const OverlayLayout = ({ children}: any) => {
  const [showOverlay, setShowOverlay] = useState(true)

  const handleDismiss = () => {
    setShowOverlay(false);
    Cookies.set(overlayCookieName, "true", { expires: 7 })
  }

  useEffect(() => {
    const cookieValue = Cookies.get(overlayCookieName)
    if (cookieValue === "true") {
      setShowOverlay(false)
    }
  }, [])

  return (
    <>
        {showOverlay && (
            <div className="h-screen w-full bg-blue-200 flex justify-center items-center" >

        </div>
        )}
        <Layout showOverlay={showOverlay} setShowOverlay={setShowOverlay}>{children}</Layout>
    </>
  )
}
