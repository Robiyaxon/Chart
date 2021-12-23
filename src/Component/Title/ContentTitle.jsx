import React from 'react';
import style from "./Title.module.css"
import Button from '@material-ui/core/Button'
import pantone from "../../picture/pantone.jpg"
import baby from "../../picture/baby.jpg"
import "./Flickity.css";
import Flickity from "react-flickity-component";
import { Redirect } from 'react-router-dom';
const ContentTitle = (props) => {
  if (!props.isAuth) {
    return <Redirect to={'/login'}/>
}
  return (
    <div className={style.wrapper}>
      <div className={style.Title}>
        <div>
          <h1>Welcome back,</h1>
          <h1> Robiya To`xtayeva!</h1>
          <p>
            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
          </p>
          <Button variant="contained" color="secondary">
            Go Now
          </Button>
        </div>
        <div>
        </div>
      </div>
      <Carousel23 />
    </div>
  );
};
function Carousel23() {
  return (
    <div className={style.CarouselNamePage}>
      <Flickity>
        <img alt="" src={pantone} />
        <img alt="" src={baby} />
      </Flickity>
    </div>

  );
}
export default ContentTitle;