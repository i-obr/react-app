import React, { Component } from 'react';
import { ContentInner } from '../styled';

class Home extends Component {
  state = {
    UserName: ''
  };

  render() {
    const { UserName } = this.state;
    return (
      <ContentInner>
        <label>
          Введите Ваше имя:
          <input
            type="text"
            value={UserName}
            onChange={this.changeName}
            autoFocus={true}
          />
        </label>
        <p>Приветствую, {UserName.length ? <b>{UserName}</b> : <b>%имя%</b>}</p>
      </ContentInner>
    );
  }

  changeName = e => {
    const value = e.target.value;

    this.setState({
      UserName: value
    });
  };
}

export default Home;
