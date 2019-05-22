import intl from 'react-intl-universal';

const mePageDataArray = [
  {
    id: 100,
    text: intl.get('label.test1'),
    classname: 'icon-xinyongqia',
    description: 'Test1 description',
    extra: 0,
    url: '/me/test1',
    block: true,
    style:
      { fontSize: '1.2rem',
        // color: '#99ff0d',
      },
  },
  {
    id: 200,
    text: intl.get('label.test2'),
    classname: 'icon-jifen',
    description: 'Test2 description',
    extra: 0,
    url: '/me/test2',
    style:
      { fontSize: '1.2rem',
        // color: '#99ff0d',
      },
  },
  {
    id: 2100,
    text: 'PageGo Demo ',
    classname: 'icon-ai238',
    description: 'Demo',
    extra: 0,
    url: '/pagego',
    style:
      { fontSize: '1.2rem',
        // color: '#99ff0d',
      },
  },
];

export function getMePageData() {
  return mePageDataArray;
}
