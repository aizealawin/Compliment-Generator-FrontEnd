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

        </div>
      )}
    </>
  );
};


export default MoreInfo