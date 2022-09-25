import React from 'react';
import scareCrow from '../img/Scarecrow.png';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <h1>404 NOT FOUND</h1>
      <section className="p-3 row align-items-center">
        <div className="my-5 col-12 col-lg-6 text-center">
          <img
            className="img-fluid"
            src={scareCrow}
            width="539.22px"
            height="auto"
            alt="A Scarecrow"
          />
        </div>
        <div className="col-12 col-lg-6 p-0 p-xl-4">
          <div className="my-4 my-lg-2">
            <p className="pe-xxl-8" id="Bad-news">
              I have bad news for you
            </p>
          </div>
          <div className="my-4 my-lg-2 ">
            <p className="pe-xxl-9" id="message">
              The page you are looking for might be removed or is temporarily
              unavailable
            </p>
          </div>
          <button className="btn btn-primary py-4 px-7 my-4" id="button">
            <Link to="/" className="text-white">
              BACK TO HOMEPAGE
            </Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
