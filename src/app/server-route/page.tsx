import ImageSlider from "@/components/ImageSlider";
import { serverSideFunction } from "@/utils/server-utils";

const ServerRoutePage = () => {
  console.log("Server Route Page Rendered");

  const result = serverSideFunction();
  return (
    <>
      <h1>Server Route Page</h1>
      <p>{result}</p>
      <ImageSlider />
    </>
  );
};

export default ServerRoutePage;
