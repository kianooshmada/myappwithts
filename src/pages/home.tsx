import React, { useEffect } from "react";
import logging from "../config/login";
import IPage from "../interfaces/page";

const HomePage: React.FunctionComponent<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);

  return <p>This is the HOME page!</p>;
};

export default HomePage;
