import React, { Component } from 'react';
import { SubTitle, ContentInner, Button } from '../styled';

const API = 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';

class Gif extends Component {
  state = {
    url: '',
    isLoading: false,
    error: null
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getRandomUrl();
  }

  getRandomUrl = () => {
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data =>
        this.setState({ url: data.data.images.source.url, isLoading: false })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  };

  render() {
    const { url, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <ContentInner>
        <SubTitle>Gif</SubTitle>
        <img src={url} with="600" height="400" alt="Gif" />
        <Button onClick={this.getRandomUrl} type="button">
          Refresh
        </Button>
      </ContentInner>
    );
  }
}

export default Gif;
