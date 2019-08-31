import React, { Component } from "react";
import axios from "axios";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

//Component
import BeerCard from "../components/BeerCard";
import Navbar from "./Navbar";

export default class ListBeers extends Component {
  constructor(props) {
    super(props);
    this.var = "lager";
    this.url = `https://api.openbrewerydb.org/breweries?per_page=50`;
    this.beerSingle = false;
    this.state = {
      beers: []
    };
    this.getValue = this.getValue.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get(this.url).then(res => {
      const beers = res.data;
      // console.log(beers);
      this.setState({ beers });
    });
  }

  getDataSingle(idBeer) {
    axios.get(`https://api.openbrewerydb.org/breweries/${idBeer}`).then(res => {
      const beerSingle = res.data;
      // console.log(beerSingle);
      this.beerSingle = beerSingle;
    });
  }

  getValue(event) {
    if (event.key === "Enter") {
      this.var = event.target.value;
      this.url = `https://api.openbrewerydb.org/breweries/autocomplete?query=${this.var}`;
      this.getData();
    }
  }

  render() {
    return (
      <>
        <Navbar getValue={this.getValue} />
        <div className="beerContainer">
          {// eslint-disable-next-line
          this.state.beers.map(beer => {
            if (this.state.beers) {
              this.getDataSingle(beer.id);
              // console.log(this.beerSingle);
              if (this.beerSingle) {
                return (
                  <Fade right key={beer.id}>
                    <BeerCard
                      key={beer.name}
                      title={beer.name}
                      country={this.beerSingle.country}
                      state={this.beerSingle.state}
                      city={this.beerSingle.city}
                      url={this.beerSingle.website_url}
                    />
                  </Fade>
                );
              } else
                return (
                  <Fade right key={beer.id}>
                    <BeerCard
                      key={beer.name}
                      title={beer.name}
                      country={beer.country}
                      state={beer.state}
                      city={beer.city}
                      url={beer.website_url}
                    />
                  </Fade>
                );
            }
          })}
        </div>
      </>
    );
  }
}
