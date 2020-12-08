import React from "react";
import { render } from "react-dom";
import "../styles/tailwind.css";

import styled from "styled-components";

const HelloComponent = styled.div`
  font-weight: bold;
`;

document.addEventListener("DOMContentLoaded", function (event) {
  render(
    <HelloComponent>Hello</HelloComponent>,
    document.querySelector("#app")
  );
});
