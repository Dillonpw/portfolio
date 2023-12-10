import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const useScrollIn = () => {
  const [isInView, setInView] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setInView(true);
    }
  }, [inView]);

  return [ref, isInView];
};

export default useScrollIn;
