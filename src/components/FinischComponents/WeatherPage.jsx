import React from "react";
import Template from "../UI/ProductTemplate/Template";
import WeatherPack from "../Layout/Weather/WeatherPack";

const WeatherPage = (props) => {
  return (
    <React.Fragment>
      <Template name='Sprawdź prognozę pogody' product={<WeatherPack />} />
    </React.Fragment>
  );
};
export default WeatherPage;
