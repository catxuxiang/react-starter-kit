import React from 'react';
import {
  render,
} from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from 'react-router';

import {
  Topbar,
  Nav,
  CollapsibleNav,
  Header,
} from 'amazeui-react';

// components
import {
  Message,
  NoMessage,
  PageContainer,
} from './components';

import {
  About,
  Home,
  Photos,
  Todo,
  Messages,
  Profile,
} from './pages';

const pages = {
  home: Home,
  photos: Photos,
  todo: Todo,
  about: About,
  profile: Profile,
  messages: Messages,
};

const App = React.createClass({
  render() {
    const page = this.props.params.page;
    const title = page ? page === 'photos' ? '郎郎的照片' : '郎郎大事记' : '郎郎的小窝';
    const data = page ? {
      left: [
        {
          link: '#',
          onSelect: function() { },
          icon: 'home',
        },
      ],
    } : {};
    const props = {
      title: title,
      link: '#title-link',
      data: data,
      onSelect: function(nav, e) {
        e.preventDefault();
        console.log('你点击了', nav);
        // do something
      },
    };
    return (
      <div className="adm-container">
        <Header {...props} />
        <div className="adm-main">
          {this.props.children}
        </div>
      </div>
    );
  },
});

const Page = React.createClass({
  render() {
    const page = this.props.params.page;
    const { query } = this.props.location;
    const breadcrumb = query && query.breadcrumb;

    if (pages[page]) {
      return React.createElement(
        pages[page],
        {
          breadcrumb: breadcrumb,
        }
      );
    } else {
      return (
        <PageContainer
          breadcrumb={breadcrumb}
        >
          你访问页面是: 「{this.props.params.page}」
        </PageContainer>
      );
    }
  }
});

const routes = (
  <Router>
    <Route path="/" component={App}>
      <Route path="messages" component={Messages} >
        <Route path=":id" component={Message} />
        <IndexRoute component={NoMessage} />
      </Route>
      <Route path=":page" component={Page} />
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  render(routes, document.getElementById('root'));
});
