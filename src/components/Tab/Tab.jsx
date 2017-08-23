import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const TabStyle = styled.div`
  position: relative;
  z-index: 1;
  display: inline-block;
  min-width: 190px;
  max-width: 400px;
  height: 40px;
  line-height: 40px;
  padding: 0 55px 0 15px;
  font-size: 16px;
  font-weight: 600;
  cursor: ${props => props.active ? 'default' : 'pointer'};;
  vertical-align: top;
  white-space: nowrap;
  color: ${props => props.active ? '#434343': '#4c4c4c'} ;
  background-color: ${props => props.active ? '#f4f4f4' : '#fff'} ;
  transition: all .25s ease-out;
  border-bottom: 1px solid ${props => props.active ? '#fff' : '#e8e8e8'};
  ${props => props.active ? 'box-shadow: inset 0 2px 0 0 #02a6f2' : ''};
`


export default function Tab({ children, ...props }) {
  return <TabStyle {...props}>{children}</TabStyle>;
}
