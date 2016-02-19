import React from 'react';
import PageContainer from '../components/PageContainer';

const Todo = React.createClass({
  render() {
    return (
      <PageContainer
        {...this.props}
      >
        <h2>系统信息</h2>
        <hr />
        <p>该页面尚在建设中。</p>
      </PageContainer>
    );
  },
});

export default Todo;
