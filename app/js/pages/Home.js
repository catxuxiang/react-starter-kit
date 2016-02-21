import React from 'react';
import {
  Link,
} from 'react-router';
import PageContainer from '../components/PageContainer';
import {
  Icon,
  Slider,
  List,
  ListItem,
} from 'amazeui-react';

const Home = React.createClass({
  renderSlider() {
    const data = [
      {
        img: './i/1.jpg',
        desc: '我是不是很萌'
      },
      {
        img: './i/2.jpg',
        desc: '宽敞的地方才好耍宝'
      },
      {
        img: './i/3.jpg',
        desc: '坐在爷爷身上有点紧张'
      },
      {
        img: './i/4.jpg',
        desc: '奶奶是最爱和我疯的人'
      }
    ];
    return (
      <Slider>
        {data.map( function(item, i) {
          return (
            <Slider.Item key={i}>
              <img src={item.img} />
              <div className="am-slider-desc">
                {item.desc}
              </div>
            </Slider.Item>
          );
        })}
      </Slider>
    );
  },
  renderList() {
    return (
      <List
        className="adm-msg-list"
      >
        <ListItem
          linkComponent={Link}
          linkProps={{
            to: `/photos`
          }}
        >
          <div
            className="adm-msg-list-main am-text-truncate"
          >
            郎郎的照片
          </div>
          <Icon
            icon="chevron-right"
            className="adm-msg-icon"
          />
        </ListItem>
        <ListItem
          linkComponent={Link}
          linkProps={{
            to: `/todo`
          }}
        >
          <div
            className="adm-msg-list-main am-text-truncate"
          >
            郎郎大事记
          </div>
          <Icon
            icon="chevron-right"
            className="adm-msg-icon"
          />
        </ListItem>
      </List>
    );
  },
  render() {
    return (
      <PageContainer>
        {this.renderSlider()}
        {this.renderList()}
      </PageContainer>
    );
  }
});

export default Home;
