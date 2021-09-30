import React from "react";
import '../assets/css/Gradient.css';

function Gradient(props) {

    let myStyle = '90deg, ';
    let arrayGrade = ['0%', '18.57%', '32.55%', '48.38%', '64.55%', '81.29%', '100%'];
    let styleObject = {
        background: ""
    }
    let arrayText = [];

    for (var i = 0; i < arrayGrade.length; i++) {
        myStyle += props.data.items[i].color + ' ';
        myStyle += arrayGrade[i] + ',';

        if (props.data.items[i].name !== undefined) {
            arrayText.push(props.data.items[i].name.toLowerCase());
        }
    }

    myStyle = myStyle.slice(0, -1)

    styleObject.background = `linear-gradient(${myStyle})`;

    return (
        <section className="Gradient-Component">
            <div>
                <hr className="lineGradient" style={styleObject} />
            </div>
            <div className="lineText">
                <span>{arrayText[0]}</span>
                <span>{arrayText[1]}</span>
            </div>
        </section>
    )
}

export default Gradient;

