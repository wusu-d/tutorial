import { useState } from 'react';
import '../SearchBar.css';

const Searchbar = (props) => {
  const [term, setTerm] = useState('');

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onFormSubmit(term);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label>Video Search</label>
        <input type="text" value={term} onChange={onInputChange} />
      </form>
    </div>
  );
};

export default Searchbar;
