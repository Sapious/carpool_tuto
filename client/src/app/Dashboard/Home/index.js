import React, { Fragment, useState } from "react";
import SearchInput from "../../shared/SearchInput";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFilteredJourneys } from "../../../actions/journey.actions";
const Home = ({ getFilteredJourneys, journeyState }) => {
  const [SearchQueries, setSearchQueries] = useState({
    destinationFrom: "",
    destinationTo: "",
    date: "",
    placeNumber: "",
    minPrice: "",
    maxPrice: "",
  });
  const searchJourneys = (e) => {
    console.log(SearchQueries);
    e.preventDefault();
    getFilteredJourneys(SearchQueries);
  };
  const onChangeHandler = (e) => {
    setSearchQueries({ ...SearchQueries, [e.key]: e.value });
  };
  return (
    <Fragment>
      <div className="w-full rounded-2xl shadow-lg border border-secondary p-10 justify-items-stretch">
        <form className="grid grid-cols-8 gap-4">
          <div className="col-span-3">
            <SearchInput
              name={"destinationFrom"}
              onChangeHandler={(e) => onChangeHandler(e)}
              title={"from"}
              placeholder={"destination"}
              icon={"fas fa-map-marker-alt"}
              isRequired={true}
            />
          </div>
          <div className="col-span-3">
            <SearchInput
              name={"destinationTo"}
              onChangeHandler={(e) => onChangeHandler(e)}
              title={"to"}
              placeholder={"destination"}
              icon={"fas fa-map-marker-alt"}
              isRequired={true}
            />
          </div>
          <div className="col-span-2">
            <SearchInput
              name={"placeNumber"}
              onChangeHandler={(e) => onChangeHandler(e)}
              title={"places"}
              placeholder={"person"}
              inputType={"number"}
              icon={"fas fa-male"}
            />
          </div>
          <div className="col-span-2">
            <SearchInput
              name={"date"}
              onChangeHandler={(e) => onChangeHandler(e)}
              title={"Departure"}
              placeholder={Date.now()}
              inputType={"date"}
              icon={"fas fa-calendar-alt"}
              isRequire={true}
            />
          </div>
          <div className="col-span-2">
            <SearchInput
              name={"minPrice"}
              onChangeHandler={(e) => onChangeHandler(e)}
              title={"min price"}
              placeholder={"$$$$"}
              inputType={"number"}
              icon={"fas fa-dollar-sign"}
            />
          </div>
          <div className="col-span-2">
            <SearchInput
              name={"maxPrice"}
              onChangeHandler={(e) => onChangeHandler(e)}
              title={"max price"}
              placeholder={"$$$$"}
              inputType={"number"}
              icon={"fas fa-dollar-sign"}
            />
          </div>
          <div className="col-span-2">
            <button
              onClick={(e) => searchJourneys(e)}
              class="px-4 py-2 h-full w-full rounded text-4xl font-bold text-secondary-tint inline-block shadow-lg bg-primary hover:bg-primary-shade focus:bg-primary-shade"
              type="button">
              Search
            </button>
          </div>
        </form>
      </div>
      {journeyState.journeys &&
        journeyState.journeys.map((journey) => {
          return (
            <div className="grid grid-cols-1 gap-4 my-8">
              <div className="w-full rounded-2xl shadow-lg border border-secondary p-4 flex items-center justify-between gap-6">
                <div className="text-dark text-2xl font-semibold capitalize">
                  {journey.driver.firstName} {journey.driver.lastName}
                </div>
                <div className="flex justify-center items-center gap-10">
                  <div className="text-dark text-2xl font-semibold uppercase">
                    {journey.destinationFrom}
                  </div>
                  <div className="relative flex justify-between items-center gap-0.5">
                    {[...new Array(30)].map((el) => {
                      return (
                        <span className="rounded-full h-0.5 w-1 bg-dark"></span>
                      );
                    })}
                    <i
                      style={{ left: "calc(50% - 16px)" }}
                      class="fas fa-map absolute text-dark text-3xl"></i>
                  </div>
                  <div className="text-dark text-2xl font-semibold uppercase">
                    {journey.destinationTo}
                  </div>
                </div>

                <button
                  class="px-3 py-2 rounded-full font-bold text-dark inline-block shadow-lg bg-secondary-shade hover:bg-opacity-80 focus:bg-opacity-80"
                  type="button">
                  View Details
                </button>
                <div className="text-dark text-2xl font-semibold">{journey.price} TND</div>
                <button
                  class="px-8 py-2 rounded text-xl font-bold text-secondary-tint inline-block bg-primary hover:bg-primary-shade focus:bg-primary-shade"
                  type="button">
                  Book
                </button>
              </div>
            </div>
          );
        })}
    </Fragment>
  );
};
Home.propTypes = {
  getFilteredJourneys: PropTypes.func.isRequired,
  journeyState: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  journeyState: state.journeyState,
});

const mapDispatchToProps = {
  getFilteredJourneys,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
