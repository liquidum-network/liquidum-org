import { useLayoutEffect, useCallback, useState } from 'react';

export type RectResult = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
};

function getRect<T extends HTMLElement>(element?: T): RectResult {
  let rect: RectResult = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0
  };
  if (element) {
    rect = element.getBoundingClientRect();
  }
  return rect;
}

export function useRect<T extends HTMLElement>(ref: React.RefObject<T>): RectResult {

  const initialRect: RectResult = (ref && ref.current) ? getRect(ref.current) : getRect();
  const element = ref.current;

  const [rect, setRect] = useState<RectResult>(initialRect);

  const handleResize = useCallback(() => {
    if (!element) {
      return;
    }
    setRect(getRect(element)); // Update client rect
  }, [element]);

  useLayoutEffect(() => {
    if (!element) {
      return;
    }

    handleResize();

    if (typeof ResizeObserver === 'function') {
      let resizeObserver: ResizeObserver | null = new ResizeObserver(() => handleResize());
      resizeObserver.observe(element);
      return () => {
        if (!resizeObserver) {
          return;
        }
        resizeObserver.disconnect();
        resizeObserver = null;
      };
    } else {
      window.addEventListener('resize', handleResize); // Browser support, remove freely
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [handleResize, element]);

  return rect;
}

