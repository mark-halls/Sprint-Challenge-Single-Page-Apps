import React, { useEffect, useState } from "react";

import axios from "axios";
import styled from "styled-components";

import LocationCard from "./LocationCard";
import SearchForm from "./SearchForm";

const LocationSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

function LocationsList() {
  // TODO: Add useState to track data from useEffect
  const [LocationData, setLocationData] = useState();
  const [dataToDisplay, setDataToDisplay] = useState();

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(res => {
        setLocationData(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    LocationData && setDataToDisplay(LocationData.results);
  }, [LocationData]);

  if (!dataToDisplay) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <SearchForm
        data={LocationData.results}
        setDataToDisplay={setDataToDisplay}
      />
      <LocationSection className="Location-list">
        {console.log(dataToDisplay)}
        {dataToDisplay.map(location => {
          return <LocationCard {...location} key={location.id} />;
        })}
      </LocationSection>
    </>
  );
}

export default LocationsList;
