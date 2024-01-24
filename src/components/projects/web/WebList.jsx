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
    <div className="mt-8 flex flex-col gap-y-4 md:flex-row md:justify-between md:flex-wrap">
      {data?.map((item) => {
        return <WebItem key={item.id} item={item} />;
      })}
    </div>
  );
}
