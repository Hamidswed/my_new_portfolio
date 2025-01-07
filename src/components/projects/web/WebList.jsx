import { useEffect, useState } from "react";
import { WebItem } from "./WebItem";
import axios from "axios";
import { Loading } from "../../loading/Loading";

export function WebList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await axios.get("/api/frontend.json");
      setData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div
      className="mt-16 grid grid-cols-1 justify-items-center gap-x-5 gap-y-6 min-[500px]:grid-cols-2
                md:grid-cols-3 lg:grid-cols-4"
    >
      {data?.map((item) => {
        return <WebItem key={item.id} item={item} />;
      })}
    </div>
  );
}
