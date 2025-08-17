import { WebList } from "../components/projects/web/WebList";
import { useEffect, useState } from "react";

export function WebProjects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`relative transition-all duration-1000 mt-8 lg:mt-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <WebList />
    </div>
  );
}
