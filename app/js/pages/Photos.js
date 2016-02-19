import React from 'react';
import PageContainer from '../components/PageContainer';
import {
  Gallery,
} from 'amazeui-react';


const Photos = React.createClass({
  render() {
    const data = [
      {
        'img': './i/20150326.jpg',
        'title': '来到世界的第一天，靠着妈妈最温暖。',
        'desc': '2015-03-26',
      },
      {
        'img': './i/20150610.jpg',
        'title': '即使在睡梦中，我也是全家人关注的焦点。',
        'desc': '2015-06-10',
      },
      {
        'img': './i/20150709.jpg',
        'title': '我喜欢这个世界，但我更喜欢这个大盆。',
        'desc': '2015-07-09',
      },
    ];

    const themes = ['bordered'];

    return (
      <PageContainer
        {...this.props}
      >
        <div>
          { themes.map(function (theme, i) {
            return [
              <Gallery theme={theme} data={data} key={i} sm={1} />
            ];
          }
          )}
		</div>
      </PageContainer>
    );
  },
});

export default Photos;
