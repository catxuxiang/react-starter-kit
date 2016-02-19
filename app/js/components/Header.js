import React from 'react';
import {
  Topbar,
} from 'amazeui-react';

const Header = React.createClass({
  render() {
    return (
      <Topbar
        brand="郎郎的小窝"
        toggleNavKey="nav"
		showToggleBtn="false"
        inverse
        fluid
      >
      </Topbar>
    );
  }
});

export default Header;
