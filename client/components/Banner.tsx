import React from "react";
import styles from "../styles/Home.module.css";
import Divider from "@mui/material/Divider";

const Banner = () => {
  return (
    <>
      <div className={styles.title}>Beyond a Friend, Your Virtual Partner!</div>
      <Divider />
      <div className={styles.description}>
        I remember for you, remind you on time, and guard your secrets. Elevate
        your daily experience with a trustworthy companion – more than an
        assistant, your confidant.
      </div>
    </>
  );
};

export default Banner;
