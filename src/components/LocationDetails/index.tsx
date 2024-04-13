import React from 'react';

const LocationDetails = ({setLocationDetails}) => {
  const closing = () => {
    setLocationDetails(false)
  }
  return (
    <div onClick={closing}>
      fff
    </div>
  );
};

export default LocationDetails;