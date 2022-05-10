import React, { useEffect, useState } from 'react';

const GuestList = () => {
  const [guestList, setGuestList] = useState([]);
  const [guest, setGuest] = useState('');

  const onInputChange = (e) => {
    setGuest(e.target.value);
  };

  useEffect(() => {
    console.log('We just had a new guest');
  }, [guestList]);

  const addGuests = () => {
    setGuestList([...guestList, guest]);
    setGuest('');
  };
  return (
    <div>
      <input type="text" value={guest} onChange={onInputChange} />
      <button onClick={addGuests}>Add Guest</button>
      <ul>
        {guestList.map((guest) => {
          return <li key={guest}>{guest}</li>;
        })}
      </ul>
    </div>
  );
};

export default GuestList;
