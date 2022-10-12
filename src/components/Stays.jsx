import React from 'react';

const Stays = ({ stay }) => {
  const { photo, title, rating, type, superHost, beds } = stay;
  return (
    <div className="col-12 col-lg-6 col-xl-4">
      <div className="card border-light m-1">
        <img src={photo} className="card-img-top" height="260rem" alt={title} />
        <div className="card-body py-4 px-2">
          <div className="d-flex justify-content-between mb-2">
            <div className="d-flex">
              {superHost && (
                <button className="btn btn-outline-dark" id="btn-dark-card">
                  SUPER HOST
                </button>
              )}
              <p className="text-muted m-0 align-self-center m-2">{type}</p>
              {superHost && beds && (
                <p className="text-muted m-0 align-self-center">{beds} beds</p>
              )}
            </div>
            <p className="m-0 align-self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-star pe-1 align-middle"
                viewBox="0 0 17 17"
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>
              {rating}
            </p>
          </div>
          <div className="mb-2">
            <h5 className="card-title text-truncate">{title}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stays;
