import React, { Component } from 'react';
import styled from 'styled-components';

const SecFooter = styled.footer`
  background: #333;
  color: white;
  padding: 20px 0;
`

const Name = styled.a`
  color: white; &:hover {
    color: white;
  }
`

const Text = styled.p`
  font-size: 14px;
`

  const Footer = () => {
    return (
      <SecFooter>
        <div className="container text-center">
          <Text className="mb-0">Build by <Name href="https://github.com/wafihfzhn/react-for-rails">Wafihfzhn</Name> with Love</Text>
        </div>
      </SecFooter>
    )
  }

export default Footer