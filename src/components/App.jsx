import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import fetchImages from './API/ImagesApiService';
import { Box } from './Box';
import Button from './Button';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Modal from './Modal';
import Searchbar from './Searchbar';


export class App extends Component {
  state = {
    searchQuery: '',
    data: [],
    page: 1,
    error: null,
    loading: false,
    showModal: false,
    activeImg: null,
    total: 0,
  }
  
  async componentDidUpdate(_, prevState) {
    const prevQuery = prevState.searchQuery;
    const currentQuery = this.state.searchQuery;
    const prevPage = prevState.page;
    const currentPage = this.state.page;
  
    
    if (prevQuery !== currentQuery || prevPage !== currentPage) {
      try {
        this.setState({ loading: true, error: null });
      
        const {hits, totalHits} = await fetchImages(currentQuery, currentPage);
        
        if (hits.length === 0) {
          return toast.warning('Sorry, there are no images matching your search query. Please try again.');
        }
        
        if (currentPage === 1) {
          toast.success(`Hooray! We found ${totalHits} images.`);
        }
        
        this.addImagesToStage(hits, totalHits);
        
      } catch (error) {
        this.handleError(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  
  addImagesToStage = (hits, totalHits) => {
    this.setState(({ data }) => {
      return ({ data: [...data, ...hits], total: totalHits });
    })
  };

  handleError = error => {
    this.setState({
      error: new Error(`Sorry something went wrong. ${error.message}`),
    });
        
    toast.error(`Sorry something went wrong. ${error.message}`);
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
    }))
  }

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery: searchQuery.trim(), page: 1, data: [] });
  };

  handleImageClick = index => {
    this.toggleModal();
    return this.setState({ activeImg: this.state.data[index] });
  };

  render() {
    const { showModal, data, error, loading, activeImg, total } = this.state;
    const imagesCount = data.length;

   
    return (
      <Box display="grid" grid-template-columns="1fr" grid-gap="16px" pb={4} >
        <Searchbar onSubmit={this.handleFormSubmit} />

        {loading && <Loader />}

        {error && (<h2 style={{ color: 'orangered', textAlign: 'center' }}>{error.message}</h2>)}

        <ImageGallery images={data} onImageClick={this.handleImageClick} />

        {imagesCount > 0 && imagesCount < total && <Button onLoadMore={this.handleLoadMore} />}
        
        {showModal && (
          <Modal onCloseModal={this.toggleModal}>
            <img src={activeImg.largeImageURL} alt={activeImg.tags} />
          </Modal>
        )}
        <ToastContainer autoClose={3000} pauseOnHover />
      </Box>
    )
  }
}

export default App;