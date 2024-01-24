import { useEffect, useState } from "react";

import "../../Style.css";
import Card from "./Card";

const Home = () => {
  const [conData, setConData] = useState([]);
  const [filterConData, setFilterConData] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await data.json();
    setConData(jsonData);
    setFilterConData(jsonData);
    console.log(conData)
  };


  useEffect(() => {
    fetchData();
  }, []);

  const searchHandler = (e) => {
    let inputdata = e.target.value || "";
    if (inputdata !== "") {
      let searchData = conData.filter((value) => {
     
        return value?.name?.common
          .toLowerCase()
          .includes(inputdata.toLowerCase());
      });
      setFilterConData(searchData);
    } else {
      setFilterConData(conData);
    }
  };

  return filterConData.length == 0 ? (
    <h1>Loading..</h1>
  ) : (
    <div className="home">
      <div>
        <input
          type="text"
          onChange={searchHandler}
          placeholder="Search for a country"
        />
      </div>
      <div className="home-container">
        {filterConData.map((value, index) => (
          <Card conValue={value} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
