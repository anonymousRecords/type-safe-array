import { useEffect, useState } from 'react';
import { useScroll } from '../hooks/useScroll';

interface ScrollToTopButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
}

function ScrollToTopButton({ onClick, children }: ScrollToTopButtonProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    // Show button when page is scrolled more than 300px
    const toggleVisibility = () => {
      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [scrollY]);

  if (!isVisible) return null;

  return (
    <button
      aria-label="Scroll to top"
      onClick={onClick}
      className="fixed bottom-8 right-8 w-16 h-16 bg-blue-600 text-white rounded-full flex justify-center items-center cursor-pointer z-50 border-none shadow-md transition-all duration-300 hover:scale-110 hover:-translate-y-1"
    >
      {children}
    </button>
  );
}

export default ScrollToTopButton;
