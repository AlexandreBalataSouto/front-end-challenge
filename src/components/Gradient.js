import React from "react";
import '../assets/css/Gradient.css';

function Gradient(props) {

    //String variables that will contains the color grade
    let myStyle = '90deg, ';
    //Array with the grades
    let arrayGrade = ['0%', '18.57%', '32.55%', '48.38%', '64.55%', '81.29%', '100%'];
    //Object where I will set the final style
    let styleObject = {
        background: ""
    }
    //Array that will contain the text "0%" and "Urban"
    let arrayText = [];

    //Iterate the arrayGrade
    for (var i = 0; i < arrayGrade.length; i++) {
        //Concatenate the color
        myStyle += props.data.items[i].color + ' ';
        myStyle += arrayGrade[i] + ',';

        //arrayText gets the text in the object
        if (props.data.items[i].name !== undefined) {
            arrayText.push(props.data.items[i].name.toLowerCase());
        }
    }

    myStyle = myStyle.slice(0, -1)
    //Result of myStyle = "90deg, #fef0d9 0%,#fef0d9 18.57%,#fdbb84 32.55%,#fc8d59 48.38%,#e34a33 64.55%,#b30000 81.29%,#7f0000 100%"

    //Set property
    styleObject.background = `linear-gradient(${myStyle})`;

    return (
        <section className="Gradient-Component">
            <div>
                <hr className="lineGradient" style={styleObject} /> {/*Set gradient effect */}
            </div>
            <div className="lineText">
                {/*Display text */}
                <span>{arrayText[0]}</span>
                <span>{arrayText[1]}</span>
            </div>
        </section>
    )
}

export default Gradient;

