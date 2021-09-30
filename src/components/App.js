import React from "react";
import '../assets/css/App.css';
import Basic from './Basic';
import Choropleth from './Choropleth'
import Gradient from './Gradient'
import Toolbar from "./Toolbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/Vizzuality/front-end-code-challenge/master/data.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, data } = this.state;
    let basicItem;
    let choroplethItem;
    let gradientItem;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

      for (const key in data) {
        if (data[key].id == "2a022fc2-bfed-477e-9a16-75a1fb594620") {
          basicItem = data[key];
        }
        if (data[key].id == "d787d894-f7af-47c4-af0f-0849b06686ee") {
          choroplethItem = data[key];
        }
        if (data[key].id == "acfc2b99-a06b-4763-83e5-7e14539940b3") {
          gradientItem = data[key];
        }
      }

      return (
        <article className="App">
          <Toolbar data={basicItem} contentComponent={<Basic data={basicItem} />} />
          <Toolbar data={choroplethItem} contentComponent={<Choropleth data={choroplethItem} />} />
          <Toolbar data={gradientItem} contentComponent={<Gradient data={gradientItem} />} />
        </article>
      );
    }
  }
}

export default App;


