import React, { useState, useRef } from "react";
import '../assets/css/Toolbar.css';
import dragDots from '../assets/icons/drag-dots.svg';
import show from '../assets/icons/show.svg';
import hide from '../assets/icons/hide.svg';
import info from '../assets/icons/info.svg';
import arrowDown from '../assets/icons/arrow-down.svg';

import Modal from './Modal';

function Toolbar(props) {
    const contentAccordion = useRef(null);
    const [flag, setFlag] = useState(false);
    const [maxHeight, setHeight] = useState("500px");
    const [arrowClass, setClass] = useState("arrow-Down");
    const [eyeIcon, setIcon] = useState(hide);
    const [eyeTooltip, setEyeTooltip] = useState("Hide layer");
    const [arrowTooltip, setArrowTooltip] = useState("Collapse");

    function createMarkup(description) {
        return { __html: description };
    }

    function onChangeInfo() {
        setFlag(!flag);
    }
    function onChangeVisibility() {

        setIcon(
            eyeIcon == hide ? show : hide
        );

        setEyeTooltip(
            eyeIcon == hide ? "Show layer" : "Hide layer"
        );

    }

    function onChangeCollapse() {
        setHeight(
            maxHeight == "0px" ? `${contentAccordion.current.scrollHeight}px` : "0px"
        );
        setClass(
            maxHeight == "0px" ? "arrow-Down" : "arrow-Down rotate"
        );
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
                        <span className="toolbarText"><strong>{props.data.name}</strong></span>
                    </div>
                    <div className="iconGroup">
                        <div className="tooltip">
                            <img src={eyeIcon} className="eye" alt="eye" name="eye" onClick={onChangeVisibility} />
                            <span className="tooltiptext">{eyeTooltip}</span>
                        </div>

                        <div className="tooltip">
                            <img src={info} className="info" alt="info" onClick={onChangeInfo} />
                            <span className="tooltiptext">Layer info</span>
                        </div>

                        <div className="tooltip">
                            <img src={arrowDown} className={arrowClass} alt="arrowDown" onClick={onChangeCollapse} />
                            <span className="tooltiptext">{arrowTooltip}</span>
                        </div>
                    </div>
                </div>
            </nav>

            <div ref={contentAccordion} className="accordion__content" style={{ maxHeight: `${maxHeight}` }}>
                {props.contentComponent}
            </div>

            <Modal flag={flag} handleClose={onChangeInfo}>
                <p dangerouslySetInnerHTML={createMarkup(props.data.description)}></p>
            </Modal>
        </section >
    )
}

export default Toolbar;