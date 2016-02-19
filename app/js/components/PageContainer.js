import React from 'react';

const PageContainer = React.createClass({
  render() {
    return (
      <div
        className={`adm-page ${this.props.className}`}
      >
        {this.props.children}
      </div>
    );
  }
});

export default PageContainer;
