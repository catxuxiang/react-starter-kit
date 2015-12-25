import React from 'react';
import {
  Link,
  History,
} from 'react-router';

const RouteLink = React.createClass({
  mixins: [History],

  render() {
    const isActive = this.history.isActive(this.props.to, this.props.query);
    const activeClassName = isActive ? 'am-active' : '';
    const link = (
      <Link {...this.props} />
    );

    return (
      <li className={activeClassName}>
        {link}
      </li>
    );
  },
});

export default RouteLink;
