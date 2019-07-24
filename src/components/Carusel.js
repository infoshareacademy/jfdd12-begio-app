import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/carousel.css";
import "react-responsive-carousel/lib/styles/main.css";
import "react-responsive-carousel/lib/styles/main.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./PhotoGallery.module.css";

export function PhotoGallery(props) {
  return (
    <div className={styles.photo}>
      <Carousel
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        <div>
          <img className={styles["img_container"]} alt="d" src={props.one} />
        </div>
        <div>
          <img className={styles["img_container"]} alt="sd" src={props.two} />
        </div>
        <div>
          <img className={styles["img_container"]} alt="sd" src={props.three} />
        </div>
      </Carousel>
    </div>
  );
}
