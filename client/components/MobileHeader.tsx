import React from "react";
import { useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";

const MobileHeader = () => {
  const dispatch = useDispatch();

  return (
    <div className="mobile-header">
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        Memory Partner
      </Typography>
    </div>
  );
};

export default MobileHeader;
