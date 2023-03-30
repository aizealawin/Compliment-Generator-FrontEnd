import React from 'react'
import { useState } from 'react';

const MoreInfo = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
      >
        ?
      </button>
      {open && (
        <div
          className="modal fade"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <h1>Hello, I'm Kusal!</h1>
        </div>
      )}
    </>
  );
};


export default MoreInfo