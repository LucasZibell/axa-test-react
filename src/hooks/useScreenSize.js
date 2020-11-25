import { useState, useEffect } from 'react';

export default function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    screenWidth: null,
    screenHeight: null
  });

  useEffect(() => {
    const handleResize = () =>
      setScreenSize({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight
      });

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
}
