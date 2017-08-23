import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TabListStyle = styled.ul`
  background-color: tomato;
`;

export default function TabList({ children, ...props }) {
  return (
    <TabListStyle {...props}>
      {
        children.map((item) => (
          <li>{item}</li>
        ))
      }
    </TabListStyle>
  );
}
