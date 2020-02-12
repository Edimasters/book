import React from 'react';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Edit.css';
import { animateScroll as scroll } from "react-scroll";

class Edit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {count: 1,}
  }

  inputStateHandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  inputStateRemove = () => {
    this.setState({
      count: this.state.count - 1,
    })
  }

  scrollToBottom = () => {
      scroll.scrollToBottom();
  };

  render() {
    return (
      <div className="Edit m-2">

        {[...Array(this.state.count)].map(() => (
          <div className="new" onClick={this.scrollToBottom}>
            <div className="buttons">
              <button type="button" className="add m-3 btn btn-outline-dark btn-md" onClick={this.inputStateHandler}>Добавить</button>
              <button type="button" className="delete m-3 btn btn-outline-dark btn-md" onClick={this.inputStateRemove}>Удалить</button>
            </div>
            <Card/>
          </div>))}

      </div>
    );
  }
}

export default Edit;
