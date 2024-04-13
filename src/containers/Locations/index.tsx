import React, { useEffect, useState } from 'react';
import Location from '../../components/Location';
import LocationDetails from '../../components/LocationDetails';

const Locations = () => {
  const [locationDetails, setLocationDetails] = useState(false)
  return (
    <div className='flex gap-2 -translate-y-36 pr-4'>
      <div className="flex flex-wrap gap-2 justify-center items-center">
        <Location local={4} province='ANTSIRANANA' background='car' handleLocation={setLocationDetails}></Location>
        <Location local={4} province='ANALAMANGA' background='car' handleLocation={setLocationDetails}></Location>
        <Location local={4} province='FIANARANTSOA' background='desk' handleLocation={setLocationDetails}></Location>
        <Location local={4} province='TOAMASINA' background='car' handleLocation={setLocationDetails}></Location>
        <Location local={4} province='MAHAJANGA' background='car' handleLocation={setLocationDetails}></Location>
        <Location local={4} province='TOLIARA' background='car' handleLocation={setLocationDetails}></Location>
      </div>
      <span className="text-white text-lg text-end">Nous disposons de plusieurs locaux dans toutes les provinces de madagascar pour la recupération de vos articles après attibution de la vente</span> 
      {locationDetails === true && (
        <div><LocationDetails setLocationDetails={setLocationDetails}></LocationDetails></div>
      )}
    </div>
  );
};

export default Locations;