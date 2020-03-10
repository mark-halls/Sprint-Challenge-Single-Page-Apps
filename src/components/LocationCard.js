import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  min-width: 30%;
  margin: 20px;
  padding: 10px;
  background-color: #a6eee6ff;
`;

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <StyledCard>
      <p>Name: {name}</p>
      <p>Type: {type}</p>
      <p>Dimension: {dimension}</p>
      <p>Residents: {residents.length}</p>
    </StyledCard>
  );
}
