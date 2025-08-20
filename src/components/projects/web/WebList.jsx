// src/pages/WebProjects/WebList.jsx
import { useEffect, useState } from "react";
import { WebItem } from "./WebItem";
import axios from "axios";
import { Loading } from "../../loading/Loading";
import { HiSparkles } from "react-icons/hi2";
import { useTranslation } from 'react-i18next'; // ✅

export function WebList() {
  const { t } = useTranslation(); // ✅
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("/api/frontend.json");
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="text-center mb-16 animate-slide-down">
        <div className="flex items-center justify-center gap-2 mb-4">
          <HiSparkles className="dark:text-dark-accent light:text-light-accent animate-pulse text-2xl" />
          <h1 className="text-3xl md:text-4xl font-bold gradient-text">
            {t('projects.title')}
          </h1>
          <HiSparkles className="dark:text-dark-primary light:text-light-primary animate-pulse text-2xl" />
        </div>
        <p className="dark:text-dark-muted light:text-light-muted max-w-2xl mx-auto">
          {t('projects.description')}
        </p>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 gap-8 min-[500px]:grid-cols-2 lg:grid-cols-3">
        {data?.map((item, index) => (
          <div 
            key={item.id} 
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <WebItem item={item} />
          </div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r dark:from-dark-primary/10 dark:to-dark-secondary/10 light:from-light-primary/10 light:to-light-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r dark:from-dark-accent/10 dark:to-dark-primary/10 light:from-light-accent/10 light:to-light-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
}