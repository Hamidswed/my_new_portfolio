import { useEffect, useState } from 'react';
import { Loading } from './Loading';

export function withPageLoader(WrappedComponent) {
  return function PageWithLoader(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const onLoad = () => {
        setIsLoading(false);
        setIsVisible(true);
      };

      window.addEventListener('load', onLoad);
      if (document.readyState === 'complete') onLoad();

      return () => {
        window.removeEventListener('load', onLoad);
      };
    }, []);

    if (isLoading) return <Loading />;

    return (
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}


