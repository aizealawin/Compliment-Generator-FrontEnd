import React from 'react'
import { useState } from 'react';

const MoreInfo = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className="info-btn"
        data-toggle="modal"
      >
        More Info
      </button>
      {open && (
        <div
          className="popup overlay"
        >
          <h2>Hello, I'm Kusal!</h2>
          <p>lore ipsum</p>
        </div>
      )}
    </>
  );
};


export default MoreInfo