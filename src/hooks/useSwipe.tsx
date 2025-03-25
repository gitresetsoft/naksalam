
import { useState, useRef, useEffect } from 'react';
import { Direction } from '../types/profile';

interface SwipeProps {
  onSwipe: (direction: Direction) => void;
  threshold?: number;
  disabled?: boolean;
}

interface Position {
  x: number;
  y: number;
}

export function useSwipe({
  onSwipe,
  threshold = 50,
  disabled = false
}: SwipeProps) {
  const [touchStart, setTouchStart] = useState<Position | null>(null);
  const [touchEnd, setTouchEnd] = useState<Position | null>(null);
  const [direction, setDirection] = useState<Direction | null>(null);
  const [touchPosition, setTouchPosition] = useState<Position | null>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  const resetTouch = () => {
    setTouchStart(null);
    setTouchEnd(null);
    setDirection(null);
    setTouchPosition(null);
  };

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    if (disabled) return;

    // Get position
    let clientX: number, clientY: number;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    setTouchStart({ x: clientX, y: clientY });
    setTouchPosition({ x: clientX, y: clientY });
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!touchStart || disabled) return;

    // Get position
    let clientX: number, clientY: number;
    
    if ('touches' in e) {
      e.preventDefault(); // Prevent scrolling on touch devices
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    setTouchPosition({ x: clientX, y: clientY });
    
    const deltaX = touchStart.x - clientX;
    const deltaY = touchStart.y - clientY;
    
    let newDirection: Direction | null = null;
    
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal swipe
      if (Math.abs(deltaX) > threshold / 3) { // Show preview before crossing threshold
        newDirection = deltaX > 0 ? 'left' : 'right';
      }
    } else {
      // Vertical swipe
      if (Math.abs(deltaY) > threshold / 3) { // Show preview before crossing threshold
        newDirection = deltaY > 0 ? 'up' : 'down';
      }
    }
    
    if (newDirection !== direction) {
      setDirection(newDirection);
    }
    
    setTouchEnd({ x: clientX, y: clientY });
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || disabled) return;
    
    const deltaX = touchStart.x - touchEnd.x;
    const deltaY = touchStart.y - touchEnd.y;
    
    // Determine if the swipe is primarily horizontal or vertical
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal swipe
      if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
          onSwipe('left');
        } else {
          onSwipe('right');
        }
      }
    } else {
      // Vertical swipe
      if (Math.abs(deltaY) > threshold) {
        if (deltaY > 0) {
          onSwipe('up');
        } else {
          onSwipe('down');
        }
      }
    }
    
    resetTouch();
  };

  // Fix for mouse leaving the screen and coming back
  useEffect(() => {
    const handleMouseLeave = () => {
      resetTouch();
    };
    
    const handleMouseEnter = () => {
      resetTouch();
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  const style = {
    transform: touchPosition && touchStart ? `translate(${touchPosition.x - touchStart.x}px, ${touchPosition.y - touchStart.y}px)` : undefined,
    transition: touchStart ? undefined : 'transform 0.3s ease',
  };

  const swipeHandlers = {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    onMouseDown: handleTouchStart,
    onMouseMove: touchStart ? handleTouchMove : undefined,
    onMouseUp: handleTouchEnd,
    onMouseLeave: handleTouchEnd,
  };

  return {
    swipeHandlers,
    style,
    direction,
    elementRef,
  };
}
