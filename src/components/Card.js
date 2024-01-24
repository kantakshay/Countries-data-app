import React from "react";

const Card = (props) => {
  // console.log(props.conValue);



  return <div className="card">
        <img src={props?.conValue?.flags?.png} alt={props?.conValue?.flags?.alt} width="180px" />
              <h1>{props?.conValue?.name?.common}</h1>
              <h4>Population:{props?.conValue?.population}</h4>
              <h4>Region:{props?.conValue?.region}</h4>
              <h4>Capital:{props?.conValue?.capital}</h4>
  </div>
};

export default Card;
