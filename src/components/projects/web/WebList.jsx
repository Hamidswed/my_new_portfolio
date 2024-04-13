import { useEffect, useState } from "react";
import { WebItem } from "./WebItem";
import axios from "axios";

export function WebList() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("/api/frontend.json");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

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
