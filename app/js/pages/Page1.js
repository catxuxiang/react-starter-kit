import React from 'react';
import {
  Container,
} from 'amazeui-react';

const Page1 = React.createClass({
  render() {
    return (
      <Container className="am-padding-vertical-lg">
        <h2>页面 1</h2>
        <p>页面内容</p>
      </Container>
    );
  },
});

export default Page1;
