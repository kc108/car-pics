import React from "react";

// *** CONTROLLED FORM ***
class SearchBar extends React.Component {
  state = { term: "Hi there!" };

  // ** Arrow function below will solve the problem
  //   onFormSubmit(event) {
  //     event.preventDefault();

  //     // // console.log(this.state.term); // Error msg -> TypeError: Cannot read properties of undefined (reading 'state'). I cannot access the state on the property trying to be accessed.
  //   }

  onFormSubmit = (event) => {
    event.preventDefault();

    // console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className=" ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              //   overwrite the text that user puts in the input, it is what is assigned from the value prop
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

// ** UNCONTROLLED FORM ***
// class SearchBar extends React.Component {
//   // *** LONGER APPROACH SEE BELOW ***
//   onInputChange(event) {
//     console.log(event.target.value);
//   }

//   render() {
//     return (
//       <div className=" ui segment">
//         <form className="ui form">
//           <div className="field">
//             <label>Image Search</label>
//             <input type="text" onChange={this.onInputChange} />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// Abbreviated syntax. Alternate way to do this.
//   render() {
//     return (
//       <div className=" ui segment">
//         <form className="ui form">
//           <div className="field">
//             <label>Image Search</label>
//             <input type="text" onChange={(e) => console.log(e.target.value)} />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default SearchBar;
