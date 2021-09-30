import React from "react";
import '../assets/css/Accordion.css';

class Accordion extends React.Component {

    render() {
        return (
            <div className="accordion__content">
                {this.props.content}
            </div>
        )
    }
}

export default Accordion;