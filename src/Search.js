import React from "react";
import "./App.css";

export default function Search() {
  return (
    <div className="form">
      <form>
        <div className="row">
          <div className="col-10">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control city-input-box"
                placeholder="Enter a city"
              />
              <button
                className="btn btn-outline-secondary search-btn"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
