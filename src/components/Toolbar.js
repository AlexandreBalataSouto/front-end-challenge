import React, { useState, useRef } from "react";
import '../assets/css/Toolbar.css';
import dragDots from '../assets/icons/drag-dots.svg';
import show from '../assets/icons/show.svg';
import hide from '../assets/icons/hide.svg';
import info from '../assets/icons/info.svg';
import arrowDown from '../assets/icons/arrow-down.svg';

import Modal from './Modal';

function Toolbar(props) {
    const contentAccordion = useRef(null); //Reference to get the content height inside the div accordionContent
    const [modalflag, setFlag] = useState(false); //State to open or close Modal component
    const [maxHeight, setHeight] = useState("500px"); //State to collapse and expand
    const [arrowClass, setClass] = useState("arrowDown"); //State to set a className in order to display rotate effect
    const [eyeIcon, setIcon] = useState(hide); //State to change the icon in onChangeVisibility
    const [eyeTooltip, setEyeTooltip] = useState("Hide layer"); //State to change and display tooltip text
    const [arrowTooltip, setArrowTooltip] = useState("Collapse"); //State to change and display tooltip text

    //In order to use dangerouslySetInnerHTML I return an object __html
    function createMarkup(description) {
        return { __html: description };
    }

    function onChangeInfo() {
        //Open or close Modal base on modalFlag
        setFlag(!modalflag);
    }

    function onChangeVisibility() {
        //Change the icon img
        setIcon(
            eyeIcon == hide ? show : hide
        );
        //Change tooltip text
        setEyeTooltip(
            eyeIcon == hide ? "Show layer" : "Hide layer"
        );

    }

    function onChangeCollapse() {
        //Set height to collapse or expand
        setHeight(
            //contentAccordion.current.scrollHeight gets the entire height of the content I reference
            maxHeight == "0px" ? `${contentAccordion.current.scrollHeight}px` : "0px"
        );
        //Set className to show effect rotate with css
        setClass(
            maxHeight == "0px" ? "arrowDown" : "arrowDown rotate"
        );
        //Change tooltip text
        setArrowTooltip(
            maxHeight == "0px" ? "Collapse" : "Expand"
        );
    }

    return (
        <section className="Toolbar-Component">
            <nav>
                <div className="navButton">
                    <div className="drag">
                        <img src={dragDots} className="dragDots" alt="dragDots" />
                    </div>
                    <div className="textTitle">
                        <span className="toolbarText"><strong>{props.name}</strong></span>
                    </div>
                    <div className="iconGroup">
                        <div className="tooltip"> {/*Hover here to display tooltiptext */}
                            <img src={eyeIcon} className="eye" alt="eye" name="eye" onClick={onChangeVisibility} />
                            <span className="tooltiptext">{eyeTooltip}</span>
                        </div>

                        <div className="tooltip"> {/*Hover here to display tooltiptext */}
                            <img src={info} className="info" alt="info" onClick={onChangeInfo} />
                            <span className="tooltiptext">Layer info</span>
                        </div>

                        <div className="tooltip"> {/*Hover here to display tooltiptext */}
                            <img src={arrowDown} className={arrowClass} alt="arrowDown" onClick={onChangeCollapse} />
                            <span className="tooltiptext">{arrowTooltip}</span>
                        </div>
                    </div>
                </div>
            </nav>

            {/**
             *Render any of the three components here
             *Div work as accordion to collapse or expand and display content
             *ref to get content height
            */}
            <div ref={contentAccordion} className="accordionContent" style={{ maxHeight: `${maxHeight}` }}>
                {props.contentComponent}
            </div>

            <Modal modalflag={modalflag} handleClose={onChangeInfo}>
                {/*Use dangerouslySetInnerHTML to parse the HTML of the string*/}
                <p dangerouslySetInnerHTML={createMarkup(props.description)}></p>
            </Modal>
        </section >
    )
}

export default Toolbar;