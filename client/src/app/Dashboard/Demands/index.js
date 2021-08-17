import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getOwnJourneyDemands,
  confirmDemand,
  cancelDemand,
} from "../../../actions/journeyDemands.actions";
import Spinner from "../../shared/Spinner";
const Demands = ({
  journeyDemand,
  getOwnJourneyDemands,
  spinner,
  confirmDemand,
  cancelDemand,
  auth,
}) => {
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
            <th className="py-3 px-6 text-center rounded-l-2xl">Driver</th>
            <th className="py-3 px-6 text-center">Passenger</th>
            <th className="py-3 px-6 text-center">State</th>
            {auth.user.isDriver && (
              <th className="py-3 px-6 text-center rounded-r-2xl">Actions</th>
            )}
          </tr>
        </thead>
        <tbody className="space-y-3">
          {journeyDemand.journeyDemands &&
            journeyDemand.journeyDemands.map((demand) => {
              return (
                <tr className="bg-secondary text-dark uppercase text-sm">
                  <td className="py-3 px-6 text-center capitalize rounded-l-2xl">
                    {demand.driver?.firstName}
                    {demand.driver?.lastName}
                  </td>
                  <td className="py-3 px-6 text-center capitalize">
                    {demand.passenger?.firstName}
                    {demand.passenger?.lastName}
                  </td>
                  <td className="py-3 px-6 text-center">{demand?.state}</td>
                  {auth.user.isDriver && (
                    <td className="py-3 px-6 text-center rounded-r-2xl flex justify-start items-center gap-2">
                      {demand.state !== "canceled" &&
                        demand.state !== "confirmed" && (
                          <Fragment>
                            <button
                              onClick={async (e) => {
                                await cancelDemand(demand._id);
                                getOwnJourneyDemands();
                              }}
                              type="button"
                              className="py-1 px-2 rounded text-white inline-block bg-danger hover:bg-danger-shade focus:bg-danger-shade">
                              <i class="fas fa-times"></i>
                            </button>
                            <button
                              onClick={async (e) => {
                                await confirmDemand(demand._id);
                                getOwnJourneyDemands();
                              }}
                              type="button"
                              className="py-1 px-2 rounded text-white inline-block bg-success hover:bg-success-shade focus:bg-success-shade">
                              <i class="fas fa-check"></i>
                            </button>
                          </Fragment>
                        )}
                    </td>
                  )}
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
  confirmDemand: PropTypes.func.isRequired,
  cancelDemand: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  journeyDemand: state.journeyDemandState,
  spinner: state.spinnerState,
  auth: state.authState,
});

const mapDispatchToProps = {
  getOwnJourneyDemands,
  confirmDemand,
  cancelDemand,
};

export default connect(mapStateToProps, mapDispatchToProps)(Demands);
