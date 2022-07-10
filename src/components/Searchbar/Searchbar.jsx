import { Component } from 'react';
import PropTypes from 'prop-types';
import { BiSearchAlt }   from 'react-icons/bi'
import { toast } from 'react-toastify';
import { SearchbarBox, SearchForm, Button, Input } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({ searchQuery: value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    
    if (this.state.searchQuery.trim() === '') {
      toast.error("Please fill in the input.");
      return;
    }
    this.props.onSubmit( this.state.searchQuery );
    this.reset();
  };

  reset = () => {
    this.setState({ searchQuery: ''});
  };

  render() {

    return (
      <SearchbarBox>
        <SearchForm onSubmit={this.handleSubmit}>
          <Button type="submit">
            <BiSearchAlt size={26} />
          </Button>

          <Input
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarBox>
    );
  }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default Searchbar;