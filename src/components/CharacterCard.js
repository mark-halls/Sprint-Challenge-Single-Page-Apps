import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <p>Name: {props.character.name}</p>
      <p>Gender: {props.character.gender}</p>
      <p>Species: {props.character.species}</p>
      <p>Location: {props.character.location.name}</p>
      <p>Status: {props.character.status}</p>
    </div>
  );
}
