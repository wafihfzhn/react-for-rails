import React, { Component } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #d74234;
  min-height: 350px;
  padding: 100px 0;
  color: #fff;
`

const Header = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
`

const Subhead = styled.p`
  font-size: 18px;
  font-weight: 500;
`

const Jumbotron = () => {
  return (
    <Section className="home-section--1">
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <div className="pt-4">
              <Header>React For Rails Developers</Header>
              <Subhead>Supercharge your Ruby on Rails Apps with React.js</Subhead>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Jumbotron