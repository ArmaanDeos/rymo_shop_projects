import React from "react";
import Loader from "../loader/Loader";

const SingleCategory = ({ cat }) => {
  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href="">
          <div className="cat-item d-flex align-items-center mb-4">
            <div className="flex-fill pl-3">
              <h6 className="cat-title">{cat.toUpperCase()}</h6>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default SingleCategory;
