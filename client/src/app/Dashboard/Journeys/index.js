import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import JourneyModal from "./JourneyModal";
import { connect } from "react-redux";
import {
  getOwnJourneys,
  cancelJourney,
} from "../../../actions/journey.actions";
import Spinner from "../../shared/Spinner";
import { parseISO, format } from "date-fns";
const Journeys = ({ journeyState, getOwnJourneys, cancelJourney, spinner }) => {
  const [isModalOpen, setisModalOpen] = useState(false);

  const handleCloseModal = (e) => {
    setisModalOpen(false);
  };
  useEffect(() => {
    getOwnJourneys();
  }, []);
  return spinner.loading ? (
    <Spinner />
  ) : (
    <Fragment>
      {isModalOpen && <JourneyModal closeModal={(e) => handleCloseModal(e)} />}

      <div className="mb-12">
        <button
          onClick={(e) => setisModalOpen(true)}
          class="px-4 py-2 rounded text-secondary-tint inline-block shadow-lg bg-primary hover:bg-primary-shade focus:bg-primary-shade"
          type="submit">
          Create Journey
        </button>
      </div>

      <table className="min-w-max w-full table-auto border-collapse">
        <thead className="rounded-md">
          <tr className="bg-secondary-shade text-dark uppercase text-sm">
            <th className="py-3 px-6 text-left rounded-l-2xl">.No</th>
            <th className="py-3 px-6 text-center">From</th>
            <th className="py-3 px-6 text-center">To</th>
            <th className="py-3 px-6 text-center">Date</th>
            <th className="py-3 px-6 text-center">Status</th>
            <th className="py-3 px-6 text-center rounded-r-2xl">Actions</th>
          </tr>
        </thead>
        <tbody className="space-y-3">
          {journeyState.journeys &&
            journeyState.journeys.map((journey) => {
              return (
                <tr className="bg-secondary text-dark uppercase text-sm">
                  <td className="py-3 px-6 text-left rounded-l-2xl">
                    {journey.reference}
                  </td>
                  <td className="py-3 px-6 text-center">
                    {journey.destinationFrom}
                  </td>
                  <td className="py-3 px-6 text-center">
                    {journey.destinationTo}
                  </td>
                  <td className="py-3 px-6 text-center">
                    {format(parseISO(journey.date), "PPPP")}
                  </td>
                  <td className="py-3 px-6 text-center">{journey.state}</td>
                  <td className="py-3 px-6 text-center rounded-r-2xl flex justify-start items-center gap-2">
                    {journey.state !== "canceled" && (
                      <button
                        onClick={async (e) => {
                          await cancelJourney(journey._id);
                          await getOwnJourneys();
                        }}
                        type="button"
                        className="py-1 px-2 rounded text-white inline-block bg-danger hover:bg-danger-shade focus:bg-danger-shade">
                        <i class="fas fa-times"></i>
                      </button>
                    )}
                    {/* TODO: implement modal to view journey */}
                    <button
                      type="button"
                      className="py-1 px-2 rounded text-white inline-block bg-primary hover:bg-primary-shade focus:bg-primary-shade">
                      <i class="fas fa-tv"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Fragment>
  );
};

Journeys.propTypes = {
  journeyState: PropTypes.object.isRequired,
  getOwnJourneys: PropTypes.func.isRequired,
  cancelJourney: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  journeyState: state.journeyState,
  spinner: state.spinnerState,
});

const mapDispatchToProps = {
  getOwnJourneys,
  cancelJourney,
};

export default connect(mapStateToProps, mapDispatchToProps)(Journeys);
