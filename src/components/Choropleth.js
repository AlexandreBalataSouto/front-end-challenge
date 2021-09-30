import React from "react";
import '../assets/css/Choropleth.css';

function Choropleth(props) {
    return (
        <section className="Choropleth-Component">
            <div className="container">
                {props.data.items.map(subItem => {
                    return (
                        <div className="containerLine">
                            <div>
                                <hr className="lineColor" style={{ backgroundColor: subItem.color }} />
                            </div>
                            <div className="lineColorText">
                                <span>{subItem.name}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Choropleth;