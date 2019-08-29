import React from "react";
import BookList from "./components/BookList";

class App extends React.Component {
  render() {
    return (
      <div id="main">
        <h1>Reading List</h1>
        <BookList></BookList>
      </div>
    );
  }
}

export default App;
