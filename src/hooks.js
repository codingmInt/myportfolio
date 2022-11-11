import { useEffect, useState } from "react";

export default function useOnScreen(ref, index) {
  const [isIntersecting, setIntersecting] = useState(false);
  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting)
  );
  useEffect(() => {
    observer.observe(ref.current[index]);
    return () => {
      observer.disconnect();
    };
  }, []);
  return isIntersecting;
}
