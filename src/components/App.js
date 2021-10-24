import React from "react";
// // Import Axios - using unsplash.js file instead
// import axios from "axios";

// Import unsplash
import unsplash from "../api/unsplash";

// Import Dependencies
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    // console.log(term);
    // const response = await axios.get("/search/photos", {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    // More difficult to write then ->
    // .then((response) => {
    //   console.log(response.data.results);
    // });

    // Second way ** Easier
    // // This shows where the Unhandled Rejection error is coming from
    // //console.log(this);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

// refactor so that App can take a fnct and pass it to the searchBar.js
// this.onSearchSubmit
// const App = () => {
//   return (
//     <div className="ui container" style={{ marginTop: "10px" }}>
//       <SearchBar />
//     </div>
//   );
// };

export default App;
