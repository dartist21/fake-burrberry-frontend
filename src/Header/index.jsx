import React from 'react';
import styled from 'styled-components';

import logo from '../assets/img/logo.svg';

const Header = styled.header`
  padding: 1rem 0;
  border-bottom: 1px solid #c6c6c6;
  @media screen and (min-width: 48rem) {
    padding: 1.5rem 0;
  }
  @media screen and (min-width: 62rem) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 0;
  }
`;

const Logo = styled.img`
  display: block;
  margin: auto;

  @media screen and (min-width: 62rem) {
    height: 1rem;
  }
`;

export default function () {
  return (
    <Header>
      <a href="">
        <Logo alt="logo" src={logo} />
      </a>
    </Header>
  );
}