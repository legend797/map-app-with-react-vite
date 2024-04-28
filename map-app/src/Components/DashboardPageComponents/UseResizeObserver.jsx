import { useState, useEffect, useCallback } from 'react';

const useResizeObserver = (ref) => {
  const [dimensions, setDimensions] = useState(null);

  const handleResize = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        setDimensions(entry.contentRect);
      });
    },
    [setDimensions]
  );

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(handleResize);
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, handleResize]);

  return dimensions;
};

export default useResizeObserver;