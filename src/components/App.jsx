import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34756481-ec8746fc3857b8c268e985924';
const searchParams = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 3,
});

export class App extends React.Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    loading: false,
    error: null,
    showModal: false,
    imageModal: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.setState({ loading: true });
      fetch(
        `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&${searchParams}`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error('There is no results for {this.state.searchQuery}')
          );
        })
        .then(images => {
          console.log(images);
          this.setState(prevState => ({
            images: [...prevState.images, ...images.hits],
          }));
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({ showModal: !showModal }));
  // };

  formSubmitHandler = value => {
    if (this.state.searchQuery !== value) {
      this.setState({ images: [], searchQuery: value, page: 1 });
    } else {
      this.setState({ images: [], searchQuery: '' });
    }
  };

  onPageChange = () => {
    console.log('load more');
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onChoseImage = large => {
    console.log(large);
    this.setState({ imageModal: large });
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.formSubmitHandler} />
        {this.state.error && (
          <h1>There is no results for {this.state.searchQuery}</h1>
        )}
        {/* {this.state.images && this.state.images.length === 0 && (
          <h1>There is no results for {this.state.searchQuery}</h1>
        )} */}
        {this.state.loading && <Loader />}
        {this.state.images && (
          <ImageGallery
            images={this.state.images}
            onChoseImage={this.onChoseImage}
          />
        )}
        {this.state.images.length !== 0 && !this.state.loading && (
          <Button onPageChange={this.onPageChange} />
        )}
        {this.state.showModal && <Modal largeImage={this.state.imageModal} />}
      </div>
    );
  }
}
