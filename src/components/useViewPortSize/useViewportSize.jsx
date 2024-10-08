import { useState, useEffect } from "react";
import throttle from "lodash/throttle";

const useViewportSize = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  // Throttle the height and width to 500ms
  const heightSetter = throttle(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
    console.log("Height: ", height);
    console.log("Width: ", width);
  }, 500);

  // Add event listener to window resize
  useEffect(() => {
    window.addEventListener("resize", heightSetter);
    heightSetter();
  }, [heightSetter]);

  return { width, height };
};

export default useViewportSize;
