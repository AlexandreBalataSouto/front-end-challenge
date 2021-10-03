import React from "react";
import '../assets/css/Basic.css';

function Basic(props) {
    return (
        <section className="Basic-Component">
            <div>
                <ul>
                    {/*Iterate the data to render the HTML list */}
                    {props.data.items.map(subItem => {
                        return (
                            <div>
                                <li key={subItem.name} style={{ color: subItem.color }}>
                                    <span className="listSubItem">{subItem.name}</span>
                                </li>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Basic;
