import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getOwnJourneyDemands } from "../../../actions/journeyDemands.actions";
import Spinner from "../../shared/Spinner";
const Demands = ({ journeyDemand, getOwnJourneyDemands, spinner }) => {
  useEffect(() => {
    getOwnJourneyDemands();
  }, []);
  return spinner.loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <table className="min-w-max w-full table-auto border-collapse">
        <thead className="rounded-md">
          <tr className="bg-secondary-shade text-dark uppercase text-sm">
            <th className="py-3 px-6 text-left rounded-l-2xl">.No</th>
            <th className="py-3 px-6 text-center">Driver</th>
            <th className="py-3 px-6 text-center">Passenger</th>
            <th className="py-3 px-6 text-center">Price</th>
            <th className="py-3 px-6 text-center">Status</th>
            <th className="py-3 px-6 text-center rounded-r-2xl">Actions</th>
          </tr>
        </thead>
        <tbody className="space-y-3">
          {journeyDemand?.journeyDemands &&
            journeyDemand.journeyDemands.map((demand) => {
              return (
                <tr className="bg-secondary text-dark uppercase text-sm">
                  <td className="py-3 px-6 text-left rounded-l-2xl">
                    {demand.journeyDemand.reference}
                  </td>
                  <td className="py-3 px-6 text-center capitalize">
                    {demand.driver.firstName}
                    {demand.driver.lastName}
                  </td>
                  <td className="py-3 px-6 text-center capitalize">
                    {demand.passenger.firstName}
                    {demand.passenger.lastName}
                  </td>
                  <td className="py-3 px-6 text-center">{demand.state}</td>
                  <td className="py-3 px-6 text-center rounded-r-2xl">test</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Fragment>
  );
};

Demands.propTypes = {
  journeyDemand: PropTypes.object.isRequired,
  spinner: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  journeyDemand: state.journeyDemand,
  spinner: state.spinnerState,
});

const mapDispatchToProps = {
  getOwnJourneyDemands,
};

export default connect(mapStateToProps, mapDispatchToProps)(Demands);
