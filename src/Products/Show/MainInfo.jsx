import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Large } from '../../Common/BreakPoints';
import ColorBtn from './ColorBtn';
import Size from './Size';

const Wrapper = styled.div`
  margin: 1rem 0 2rem 0;
  border-bottom: 1px solid #c6c6c6;

  @media (min-width: 48rem) {
    margin: 0 0 2rem 0;
  }

  @media (min-width: 62rem) {
    border-bottom: none;
    margin: 0 0 1.5rem 0;
  }
`;

const PriceAndNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Price = styled.h2`
  margin: 0;

  color: #171717;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.19;

  @media screen and (min-width: 62rem) {
    font-weight: 500;
  }
`;

const Id = styled.p`
  margin: 0;
  color: #171717;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.17;

  @media screen and (min-width: 62rem) {
    display: none;
  }
`;

const Color = styled.p`
  margin: 1rem 0;
  margin-left: .5rem;
  color: #171717;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;

  @media screen and (min-width: 62rem) {
    margin-left: 0;
    margin-top: 3rem;
    & span {
      font-weight: bold;
    }
  }
`;

const ColorBtnWrapper = styled.div`
  display: flex;
  padding-bottom: 2rem;
  margin-left: .5rem;

  @media screen and (min-width: 62rem) {
    padding-bottom: 0;
    margin-left: 0;
  }
`;

export default class MainInfo extends Component {
  state = {
    selectedColor: 0,
  };

  handleSelectColor = (selectedColor) => {
    this.setState({ selectedColor });
  };

  render() {
    return (
      <Wrapper>
        <PriceAndNumberWrapper>
          <Price>110 000 руб</Price>
          <Id>Item 39428531</Id>
        </PriceAndNumberWrapper>
        <div className="row">
          <div className="col-lg-6">
            <Color>
              Colour: <span>{this.props.colors[this.state.selectedColor].name}</span>
            </Color>
            <ColorBtnWrapper>
              {this.props.colors.map((color, index) =>
                (<ColorBtn
                  key={color.value}
                  value={color.value}
                  name={color.name}
                  isActive={this.state.selectedColor === index}
                  onClick={() => this.handleSelectColor(index)}
                />),
              )}
            </ColorBtnWrapper>
          </div>
          <div className="col-lg-6">
            <Large>
              <Size />
            </Large>
          </div>
        </div>
      </Wrapper>
    );
  }
}

MainInfo.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.object).isRequired,
};