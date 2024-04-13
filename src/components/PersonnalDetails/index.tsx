import React from 'react';

const PersonnalDetails = () => {
  return (
    <div className='flex flex-col items-center gap-2 p-2'>
      <div className="bg-desk bg-center bg-cover w-[18rem] h-[18rem]"></div>
      <span className='text-xl font-serif font-medium text-[#532a1e]'>Mbolatiana RAKOTOARIVONY</span>
      <span className="text-center">Première responsable et prestataire de vente <br />
      De service de lundi à vendredi</span>
      <span className="">+261.34.10.385.91</span>
    </div>
  );
};

export default PersonnalDetails;