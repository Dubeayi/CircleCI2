import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonClicked: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      buttonClicked: !this.state.buttonClicked
    })
  }

  render() {

    const { buttonClicked } = this.state;
    let content;

    if (!buttonClicked) {
      content = (
        <div>
          <button data-testid="main-btn" onClick = {this.onClick}>Click Me!</button>
        </div>
      )
    } else if (buttonClicked) {
      content = (
        <div data-testid="message">
          Hey there! Welcome to Dubeayi's Page!!! Feel free to look around!!!
        </div>
      )
    }

    return (
      <div className="" onClick={this.onClick}>
        {content}
      </div>
    );
  }
}

export default App;
