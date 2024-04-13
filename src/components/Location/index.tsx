import React from 'react';
import { LocationType } from '../../utils/types';

const Location: React.FC<LocationType> = ({
  province: province,
  local: local,
  background: background,
  handleLocation
}) => {
  return (
    <div className={`w-[20rem] h-[15rem] bg-${background} bg-cover bg-no-repeat bg-center rounded-md hover:scale-105 duration-100 flex flex-col gap-4 justify-center items-center`} onClick={()=>handleLocation && handleLocation(true)}>
     <span className="text-2xl font-semibold font-mono">{province}</span>
    <span className="text-lg">{local} locaux</span>
    </div>
  );
};

export default Location;