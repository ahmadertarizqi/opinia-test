import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

function useBreakpoints() {
  const [isClient, setIsClient] = useState<boolean>(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: '992px' });
  const isMobile = useMediaQuery({ minWidth: '768px' });
  const isTablet = useMediaQuery({ minWidth: '992px' });
  const isDesktop = useMediaQuery({ minWidth: '1024px' });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true); 
    };
  }, []);

  return {
    isTabletOrMobile: isClient ? isTabletOrMobile : false,
    isDesktop: isClient ? isDesktop : true,
    isTablet: isClient ? isTablet : false,
    isMobile: isClient ? isMobile : false,
  };
}

export default useBreakpoints;
