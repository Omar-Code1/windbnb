import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import svgLogo from '../img/logo.svg';
import svgSearch from '../img/search.svg';
import jsonStays from '../JSON/stays.json';
import svgLocation from '../img/location.svg';
import { StaysContext } from '../context/StaysProvider';

const Navbar = () => {
  const initialState = {
    formLocation: '',
    formGuests: '',
  };
  const { setStays } = useContext(StaysContext);
  useEffect(() => setStays(jsonStays), []);
  const [formSearch, setFormSearch] = useState(initialState);
  const [counterAdults, setCounterAdults] = useState(0);
  const [counterChildrens, setCounterChildrens] = useState(0);

  const locationStays = jsonStays.map((item) => item.city);

  const filterLocation = locationStays.filter((item, index) => {
    return locationStays.indexOf(item) === index;
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const { formLocation, formGuests } = formSearch;
    if (formLocation === '' || formGuests === '') {
      console.log('no deje espacios vacios');
      return;
    }
    setStays(
      jsonStays.filter(
        (item) => item.city === formLocation && item.maxGuests > formGuests
      )
    );
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormSearch(() => ({
      ...formSearch,
      [name]: value,
    }));
  };
  const handleClickLocation = (e) => {
    setFormSearch(() => ({
      ...formSearch,
      formLocation: e.target.innerText,
    }));
  };
  const handleCounterAdults = (e, counter) => {
    setCounterAdults((state) => {
      if (e.target.innerText === '+') {
        setFormSearch(() => ({
          ...formSearch,
          formGuests: state + counter,
        }));
        return (state = counterAdults + 1);
      } else if (e.target.innerText === '-') {
        if (state > 1) {
          setFormSearch(() => ({
            ...formSearch,
            formGuests: state + counter,
          }));
          return (state = counterAdults - 1);
        } else if (state === 1) {
          setFormSearch(() => ({
            ...formSearch,
            formGuests: counter > 0 ? counter : '',
          }));
          return (state = counterAdults - 1);
        } else {
          setFormSearch(() => ({
            ...formSearch,
            formGuests: counter > 0 ? counter : '',
          }));
          return state;
        }
      }
    });
  };
  const handleCounterChildrens = (e, counter) => {
    setCounterChildrens((state) => {
      if (e.target.innerText === '+') {
        setFormSearch(() => ({
          ...formSearch,
          formGuests: state + counter,
        }));
        return (state = counterChildrens + 1);
      } else if (e.target.innerText === '-') {
        if (state > 1) {
          setFormSearch(() => ({
            ...formSearch,
            formGuests: state + counter,
          }));
          return (state = counterChildrens - 1);
        } else if (state === 1) {
          setFormSearch(() => ({
            ...formSearch,
            formGuests: counter > 0 ? counter : '',
          }));
          return (state = counterChildrens - 1);
        } else {
          setFormSearch(() => ({
            ...formSearch,
            formGuests: counter > 0 ? counter : '',
          }));
          return state;
        }
      }
    });
  };
  const handleReiniciar = () => {
    setCounterAdults(0);
    setCounterChildrens(0);
    setFormSearch(initialState);
    setStays(jsonStays);
  };
  return (
    <>
      <nav className="navbar navbar-expand bg-white">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" onClick={handleReiniciar}>
            <img src={svgLogo} alt="logo" />
          </Link>
          <form className="input-group" id="formNav">
            <button
              className="btn btn-outline-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              {`${
                formSearch.formLocation !== ''
                  ? formSearch.formLocation
                  : 'Location'
              }`}
            </button>
            <div className="form-floating" id="flotanteNav">
              <input
                type="text"
                className="form-control"
                placeholder="Add guests"
                readOnly
                id="input"
                value={
                  formSearch.formGuests !== '' ? formSearch.formGuests : ''
                }
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
              />
              <label htmlFor="input" className="text-muted">{`${
                formSearch.formGuests ? 'Guests' : 'Add Guests'
              }`}</label>
            </div>
            <button className="btn btn-outline-primary" type="button">
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
                value={formSearch.formLocation}
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
                value={formSearch.formGuests}
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
                      handleCounterAdults(e, counterChildrens);
                    }}
                  >
                    -
                  </button>
                  <p className="m-0 align-bottom mx-3">{counterAdults}</p>
                  <button
                    className="btn btn-outline-dark"
                    onClick={(e) => {
                      handleCounterAdults(e, counterChildrens);
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
                      handleCounterChildrens(e, counterAdults);
                    }}
                  >
                    -
                  </button>
                  <p className="m-0 align-bottom mx-3">{counterChildrens}</p>
                  <button
                    className="btn btn-outline-dark"
                    onClick={(e) => {
                      handleCounterChildrens(e, counterAdults);
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
