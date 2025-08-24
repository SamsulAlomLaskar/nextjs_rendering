import { cookies } from "next/headers";

const AboutPage = () => {
  console.log("AboutPage component rendered");

  const cookieStore = cookies();

  const theme = cookieStore.get("theme");

  return <h1>About Page {new Date().toLocaleTimeString()}</h1>;
};

export default AboutPage;
