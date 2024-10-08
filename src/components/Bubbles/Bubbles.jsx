import React, { useEffect, useRef, useState } from "react";
import useViewportSize from "../useViewPortSize/useViewportSize";
import drawBubbles from "./drawBubbles";

// Draws bubbles on the canvas
const Bubbles = () => {
  // Get the viewport size
  const { width, height } = useViewportSize();
  // Reference to the canvas element
  const canvasRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  // Draws bubbles on the canvas when the viewport size changes
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(width <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, [width]);

  useEffect(() => {
    if (canvasRef.current && width > 0 && height > 0) {
      drawBubbles(canvasRef.current, width, height, isMobile);
    }
  }, [height, width, isMobile]);

  // Returns the canvas element
  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.7
      }}
    />
  );
};

export default Bubbles;
