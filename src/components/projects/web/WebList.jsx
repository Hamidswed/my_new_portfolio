import { useEffect, useState } from "react";
import { WebItem } from "./WebItem";
import axios from "axios";

export function WebList() {
  const [data, setData] = useState();

  const getData = async () => {
    const res = await axios.get("/api/frontend.json");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mt-16 flex flex-col items-center gap-y-4 min-[500px]:flex-row min-[500px]:justify-between min-[500px]:flex-wrap">
      {data?.map((item) => {
        return <WebItem key={item.id} item={item} />;
      })}
    </div>
  );
}
