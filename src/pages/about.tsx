import React, { useEffect, useState } from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import logging from "../config/login";
import IPage from "../interfaces/page";

const AboutPage: React.FunctionComponent<IPage & RouteComponentProps<any>> = (
  props
) => {
  const [message, setMessage] = useState<string>("");
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
    let number = props.match.params.number;
    if (number) {
      setMessage(`The Number is ${number}`);
    } else {
      setMessage(`No number is provided!`);
    }
  }, [props]);

  return (
    <div>
      <p>{message}</p>
      <Link to="/">GO to the home page!</Link>
    </div>
  );
};

export default AboutPage;
