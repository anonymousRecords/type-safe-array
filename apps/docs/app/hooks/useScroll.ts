'use client';
import { useEffect, useState } from 'react';

interface ScrollInfo {
  scrollY: number;
}

export function useScroll(): ScrollInfo {
  const [scrollInfo, setScrollInfo] = useState<ScrollInfo>({
    scrollY: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollInfo({
        scrollY,
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollInfo;
}
