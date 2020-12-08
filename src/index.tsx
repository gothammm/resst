import React from "react";
import { render } from "react-dom";
import "antd/dist/antd.css";
import styled from "styled-components";
import Welcome from "./Welcome";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

document.addEventListener("DOMContentLoaded", function (event) {
  render(
    <Container>
      <Welcome />
    </Container>,
    document.querySelector("#app")
  );
});
