import { useEffect, useState } from "react"

import "../../Style.css"

const Home = () =>{

   const [conData, setConData]= useState("");


   const fetchData = async() =>{
      const data =  await fetch("https://restcountries.com/v3.1/all");
       const jsonData =  await  data.json();
       setConData(jsonData)
   }
   useEffect(fetchData,[])


   console.log(conData[0]);


    return(
        <div className="home-container">
         <div className="card">
            <img src="https://upload..org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg" alt="" width="180px"/>
            <h1>{conData[0]?.name?.common}</h1>
            <h4>Population:{conData[0]?.population}</h4>
            <h4>Region:{conData[0]?.region}</h4>
            <h4>Capital:{conData[0]?.capital[0]}</h4>
         </div>         
         <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg" alt="" width="180px"/>
            <h1>Afghanistan</h1>
            <h4>Population</h4>
            <h4>Region</h4>
            <h4>Capital</h4>
         </div>   
         <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg" alt="" width="180px"/>
            <h1>Afghanistan</h1>
            <h4>Population</h4>
            <h4>Region</h4>
            <h4>Capital</h4>
         </div>      
         <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg" alt="" width="180px"/>
            <h1>Afghanistan</h1>
            <h4>Population</h4>
            <h4>Region</h4>
            <h4>Capital</h4>
         </div>   
         <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg" alt="" width="180px"/>
            <h1>Afghanistan</h1>
            <h4>Population</h4>
            <h4>Region</h4>
            <h4>Capital</h4>
         </div>   
         <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg" alt="" width="180px"/>
            <h1>Afghanistan</h1>
            <h4>Population</h4>
            <h4>Region</h4>
            <h4>Capital</h4>
         </div>   
         <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg" alt="" width="180px"/>
            <h1>Afghanistan</h1>
            <h4>Population</h4>
            <h4>Region</h4>
            <h4>Capital</h4>
         </div>   
         <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg" alt="" width="180px"/>
            <h1>Afghanistan</h1>
            <h4>Population</h4>
            <h4>Region</h4>
            <h4>Capital</h4>
         </div>   
        </div>
    )
}

export default Home