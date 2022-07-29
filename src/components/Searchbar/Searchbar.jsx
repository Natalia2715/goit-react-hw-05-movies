import { useState } from 'react';
import { SearchbarEl, Form, Button, Input } from './Searchbar.styled';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import { ReactComponent as SearchIcon } from '../../images/SearchIcon.svg';

const Searchbar = ({ setSearchParams, onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      toast.error('you have nothing written yet');
      return;
    }
    const queryString = query.trim().split(' ').join('+');
    setSearchParams({ query: queryString });
    onSubmit(query);
  };

  return (
    <>
      <SearchbarEl>
        <Form onSubmit={handleSubmit}>
          <Button type="submit">
            <SearchIcon />
            {/* <span>Search</span> */}
          </Button>

          <Input onChange={handleChange} type="text" autoFocus value={query} />
        </Form>
      </SearchbarEl>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
