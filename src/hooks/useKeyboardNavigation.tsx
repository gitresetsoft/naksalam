
import { useEffect, useCallback } from 'react';
import { Direction } from '../types/profile';

interface KeyboardNavigationProps {
  onDirectionChange: (direction: Direction) => void;
  onAction: () => void;
  disabled?: boolean;
}

export function useKeyboardNavigation({
  onDirectionChange,
  onAction,
  disabled = false
}: KeyboardNavigationProps) {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (disabled) return;
    
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        onDirectionChange('left');
        break;
      case 'ArrowRight':
        event.preventDefault();
        onDirectionChange('right');
        break;
      case 'ArrowUp':
        event.preventDefault();
        onDirectionChange('up');
        break;
      case 'ArrowDown':
        event.preventDefault();
        onDirectionChange('down');
        break;
      case 'Enter':
      case ' ': // Space
        event.preventDefault();
        onAction();
        break;
      default:
        break;
    }
  }, [onDirectionChange, onAction, disabled]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
}
