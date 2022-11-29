import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import svgLogo from '../img/logo.svg';
import svgSearch from '../img/search.svg';
import jsonStays from '../JSON/stays.json';
import svgLocation from '../img/location.svg';
import { StaysContext } from '../context/StaysProvider';
import { useCounter } from '../hooks/useCounter';
import { useForm } from '../hooks/useForm';

const initialState = {
  formLocation: '',
  formGuests: '',
};

const locationStays = jsonStays.map((item) => item.city);

const filterLocation = locationStays.filter((item, index) => {
  return locationStays.indexOf(item) === index;
});

const Navbar = () => {
  const { addStays } = useContext(StaysContext);

  useEffect(() => addStays(jsonStays), []);

  const { handleChange, handleClickLocation, form, addForm } =
    useForm(initialState);

  const adults = useCounter();
  const children = useCounter();

  const handleReiniciar = () => {
    adults.handleReiniciarCounter();
    children.handleReiniciarCounter();
    addForm(initialState);
    addStays(jsonStays);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.formLocation === '' || form.formGuests === '') {
      console.log('no deje espacios vacios');
      return;
    }
    addStays(
      jsonStays.filter(
        (item) =>
          item.city === form.formLocation && item.maxGuests >= form.formGuests,
      ),
    );
  };
  return (
    <>
      <nav className="navbar navbar-expand bg-white">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" onClick={handleReiniciar}>
            <img src={svgLogo} alt="logo" />
          </Link>
          <form
            className="input-group"
            id="formNav"
            onSubmit={(e) => {
              handleSubmit(e, addStays, jsonStays);
            }}
          >
            <button
              className="btn btn-outline-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              {`${form.formLocation !== '' ? form.formLocation : 'Location'}`}
            </button>
            <div className="form-floating" id="flotanteNav">
              <input
                type="text"
                className="form-control"
                placeholder="Add guests"
                readOnly
                id="input"
                name="formGuests"
                value={form.formGuests}
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
              />
              <label htmlFor="input" className="text-muted">{`${
                form.formGuests ? 'Guests' : 'Add Guests'
              }`}</label>
            </div>
            <button className="btn btn-outline-primary" type="submit">
              <img src={svgSearch} alt="search" className="align-middle" />
            </button>
          </form>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-top"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <form className="input-group" onSubmit={handleSubmit}>
            <div className="form-floating">
              <input
                type="text"
                name="formLocation"
                className="form-control"
                placeholder="Add Location"
                readOnly
                onChange={handleChange}
                id="inputLocation"
                value={form.formLocation}
              />
              <label htmlFor="inputLocation" className="text-muted">
                Location
              </label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                name="formGuests"
                readOnly
                onChange={handleChange}
                id="inputGuests"
                className="form-control"
                placeholder="Add guests"
                value={form.formGuests}
              />
              <label htmlFor="inputGuests" className="text-muted">
                Guests
              </label>
            </div>

            <button
              className="btn btn-outline-primary form-control"
              type="submit"
              data-bs-dismiss="offcanvas"
            >
              <img src={svgSearch} alt="search" className="align-middle" />
            </button>
          </form>
        </div>
        <div className="offcanvas-body row">
          <div className="col-4">
            <ul className="list-group">
              {filterLocation.map((item, index) => (
                <li key={index} className="d-flex m-1">
                  <span className="aling-bottom">
                    <img src={svgLocation} alt="location" />
                  </span>
                  <button
                    className="list-group-item list-group-item-action"
                    onClick={handleClickLocation}
                  >
                    {`${item}`}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-4">
            <div className="d-flex flex-column">
              <div className="vstack mb-4">
                <span className="fs-6 fw-semibold">Adults</span>
                <p className="text-muted m-0">Ages 13 or above</p>
                <div className="d-flex">
                  <button
                    className="btn btn-outline-dark"
                    onClick={(e) => {
                      adults.handleCounter(e, children.counter, addForm, form);
                    }}
                  >
                    -
                  </button>
                  <p className="m-0 align-bottom mx-3">{adults.counter}</p>
                  <button
                    className="btn btn-outline-dark"
                    onClick={(e) => {
                      adults.handleCounter(e, children.counter, addForm, form);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="vstack mb-4">
                <span className="fs-6 fw-semibold">Children</span>
                <p className="text-muted m-0">Ages 2-12</p>
                <div className="d-flex">
                  <button
                    className="btn btn-outline-dark"
                    onClick={(e) => {
                      children.handleCounter(e, adults.counter, addForm, form);
                    }}
                  >
                    -
                  </button>
                  <p className="m-0 align-bottom mx-3">{children.counter}</p>
                  <button
                    className="btn btn-outline-dark"
                    onClick={(e) => {
                      children.handleCounter(e, adults.counter, addForm, form);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
