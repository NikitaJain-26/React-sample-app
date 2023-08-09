import { useState, useEffect } from "react";
import UserClass from "./UserClass";
const About = () => {
  const [name, setName] = useState("Nikita");
  useEffect(() => {
    console.log("about useEffect");
  }, []);
  return (
    <>
      {console.log("About render")}
      <button
        onClick={() => {
          name == "Nikita" ? setName("Monica") : setName("Nikita");
        }}
      >
        Change Name
      </button>
      <h1>Welcome to Eat and Repeat</h1>
      <h2>know us better</h2>
      <UserClass name={name} location="Bangalore" />
    </>
  );
};

export default About;
