import { ThreeDots } from "react-loader-spinner";

export function Loading({ width = "75", height = "40", color = "#9e8e7f" }) {
  return (
    <ThreeDots
      height={height}
      width={width}
      radius={9}
      color={color}
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
      }}
      visible={true}
    />
  );
}
