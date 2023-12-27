import React from "react";
import PropTypes from "prop-types";

export default function Saludar(props){
// const {firstname = "Wilver", lastname= "Rojas", edad, birthday} = props; // Destructuring
const {firstname, lastname, edad, birthday} = props; // Destructuring

 return
 <Text>
  Hola {firstname} {lastname}
 </Text>
}

Saludar.defaultProps = {
    firstname: "Wilver",
    lastname: "Rojas",
    edad: 22,
    birthday: "1999-01-01"
}

Saludar.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string,
  edad: PropTypes.number.isRequired,
  birthday:
    PropTypes.string.isRequired,
}