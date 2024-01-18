import { useEffect, useState } from "react";

import "../../Style.css";
import Card from "./Card";

const Home = () => {
  const [conData, setConData] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await data.json();
    setConData(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return conData.length == 0 ? (
    <h1>Loading..</h1>
  ) : (
    <div className="home-container">
      {conData.map((value) => <Card conValue={value} />  )}
    </div>
  );
};

export default Home;

