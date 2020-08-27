import React, { useState } from "react";
import Modal from "react-modal";

//stores
import tripStore from "../../Stores/tripStore";

//Style
import { CreateButtonStyled } from "../../styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const TripsModal = ({ isOpen, closeModal, oldTrip }) => {
  const [trip, settrip] = useState(
    oldtrip ?? {
      title: "",
      date: 0,
      details: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    settrip({ ...trip, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    settrip({ ...trip, image: event.target.files[0] });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    tripStore[oldTrip ? "updateTrip" : "createTrip"](trip);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Trips Modal"
    >
      <h3>New Trip</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6" name="title">
            <label>Title</label>
            <input
              required
              type="text"
              name="name"
              className="form-control"
              onChange={handleChange}
              value={trip.title}
            />
          </div>
          <div className="col-6">
            <label>Date</label>
            <input
              required
              type="number"
              min="35"
              className="form-control"
              name="date"
              onChange={handleChange}
              value={trip.date}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Details</label>
          <input
            required
            type="text"
            className="form-control"
            name="details"
            onChange={handleChange}
            value={trip.details}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            required
            type="file"
            className="form-control"
            name="image"
            onChange={handleImage}
          />
        </div>
        <CreateButtonStyled className="btn float-right" type="submit">
          {oldTrip ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default TripsModal;
