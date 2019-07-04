import React from "react";
import {TooltipImage} from './TooltipImage';
import {ButtonGo} from "./ButtonGo"
import {EventName} from "./EventName"
import styles from './Tooltip.module.css'


export const Tooltip = () =>  {
    return (
        <div className={styles.container}>
            <TooltipImage image={"https://media-cdn.tripadvisor.com/media/photo-s/12/ab/e8/e1/getlstd-property-photo.jpg"}/>
                <div className={styles.infoContent}> 
                    <EventName/>
                    <EventName/>
                    <ButtonGo/>
                    <h2 className={styles.eventPlace}>EventPlace</h2>
                </div>
        </div>
    )
}