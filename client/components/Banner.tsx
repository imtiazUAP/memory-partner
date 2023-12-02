import React from "react";
import styles from "../styles/Home.module.css";
import Typography from "@mui/material/Typography";

const Banner = () => {
  return (
    <>
      <Typography variant="h2" noWrap component="div">
        More than a Friend!
      </Typography>
      <Typography variant="h2" noWrap component="div">
        I can remember anything you want me to remember!
      </Typography>
      <p className={styles.description}>
        
      </p>
    </>
  );
};

export default Banner;
