import React from "react";
import PropTypes from "prop-types";

const FormImg = ({ handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="w-75">
          <input
            className="form-control me-2 my-3"
            placeholder="Buscar..."
            type="text"
            name="inputText"
          />
        </label>
        <button type="submit" className="btn btn-outline-success mx-2">
          <span className="material-symbols-outlined">search</span>
        </button>
      </form>
    </>
  );
};

FormImg.propTypes = {
  handleSubmit: PropTypes.func,
};

export default FormImg;
