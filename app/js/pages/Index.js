import React from 'react';
import {
  Container,
} from 'amazeui-react';

const Index = React.createClass({
  render() {
    return (
      <div className="ask-banner">
        <Container>
          <h1>Hello World!</h1>
          <h2>欢迎使用 Amaze UI React 入门套件。</h2>
        </Container>
      </div>
    );
  },
});

export default Index;
