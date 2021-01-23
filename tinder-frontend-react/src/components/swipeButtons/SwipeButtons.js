import React, { useState } from "react";
import "./Swipebuttons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      {/* muiIconButton-root */}
      <IconButton className="iconButton__swipe">
        <ReplayIcon fontSize="large"  className="iconButton__replay"/>
      </IconButton>
      <IconButton className="iconButton__swipe">
        <CloseIcon fontSize="large" className="iconButton__close"/>
      </IconButton>
      <IconButton className="iconButton__swipe">
        <StarRateIcon fontSize="large" className="iconButton__star"/>
      </IconButton>
      <IconButton className="iconButton__swipe">
        <FavoriteIcon fontSize="large" className="iconButton__fav"/>
      </IconButton>
      <IconButton className="iconButton__swipe">
        <FlashOnIcon fontSize="large" className="iconButton__flash"/>
      </IconButton>
    </div>
  );
}
export default SwipeButtons;
