import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useClickAway } from "react-use";
import { connect } from "react-redux";
import { createJourney } from "../../../../actions/journey.actions";
const JourneyModal = ({ closeModal, createJourney }) => {
  const [JourneyData, setJourneyData] = useState({
    destinationFrom: "",
    destinationTo: "",
    date: "",
    placeNumber: "",
    description: "",
    price: "",
  });
  const onChangeData = (e) => {
    setJourneyData({ ...JourneyData, [e.target.name]: e.target.value });
    console.log(JourneyData);
  };

  const modalRef = useRef(null);
  useClickAway(modalRef, () => {
    closeModal(false);
  });

  const onSubmitJourney = async (e) => {
    e.preventDefault();
    await createJourney(JourneyData);
    closeModal(false);
  };
  return (
    <div className="bg-secondary-shade w-full h-full fixed top-0 left-0 bg-opacity-60">
      <div
        ref={modalRef}
        className="float-right relative bg-white w-1/3 py-4 px-6 h-screen shadow-md flex flex-col">
        <div className="flex items-center justify-between text-lg">
          <div className="text-dark font-semibold text-lg">
            Create new journey
          </div>
          <i
            onClick={(e) => closeModal(false)}
            className="fas fa-times text-dark text-lg cursor-pointer"></i>
        </div>
        <form className="overflow-y-auto mt-8">
          <div className="flex justify-between items-center gap-4 w-full">
            <div class="mb-4 w-1/2">
              <label
                class="block text-dark text-sm font-normal mb-2"
                for="destinationFrom">
                Destination From
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
                name="destinationFrom"
                type="text"
                required
                placeholder="Destination From"
                value={JourneyData.destinationFrom}
                onChange={(e) => onChangeData(e)}
              />
            </div>
            <div class="mb-4 w-1/2">
              <label
                class="block text-dark text-sm font-normal mb-2"
                for="destinationTo">
                Destination To
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
                name="destinationTo"
                type="text"
                required
                placeholder="Destination To"
                value={JourneyData.destinationTo}
                onChange={(e) => onChangeData(e)}
              />
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-dark text-sm font-normal mb-2" for="date">
              Date
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
              name="date"
              type="datetime-local"
              required
              placeholder="Date"
              value={JourneyData.date}
              onChange={(e) => onChangeData(e)}
            />
          </div>
          <div className="flex w-full gap-4">
            <div class="mb-4">
              <label
                class="block text-dark text-sm font-normal mb-2"
                for="price">
                Price (TND)
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
                name="price"
                type="number"
                required
                placeholder="Price"
                value={JourneyData.price}
                onChange={(e) => onChangeData(e)}
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-dark text-sm font-normal mb-2"
                for="places">
                places
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
                name="placeNumber"
                type="number"
                required
                placeholder="places"
                value={JourneyData.placeNumber}
                onChange={(e) => onChangeData(e)}
              />
            </div>
          </div>
          <div class="mb-4">
            <label
              class="block text-dark text-sm font-normal mb-2"
              for="description">
              Description
            </label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
              name="description"
              type="text"
              required
              placeholder="Description"
              value={JourneyData.description}
              onChange={(e) => onChangeData(e)}
            />
          </div>
        </form>
        <div className="flex justify-end items-center gap-4 pt-4">
          <button
            onClick={(e) => closeModal(false)}
            class="px-4 py-2 rounded text-dark inline-block shadow-lg bg-secondary hover:bg-secondary-shade focus:bg-secondary-shade"
            type="button">
            Cancel
          </button>
          <button
            onClick={(e) => onSubmitJourney(e)}
            class="px-4 py-2 rounded text-secondary-tint inline-block shadow-lg bg-primary hover:bg-primary-shade focus:bg-primary-shade"
            type="button">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

JourneyModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  createJourney: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  createJourney,
};

export default connect(mapStateToProps, mapDispatchToProps)(JourneyModal);
