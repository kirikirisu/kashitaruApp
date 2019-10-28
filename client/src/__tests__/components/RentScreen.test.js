import React from 'react';
import { shallow } from 'enzyme';
import RentScreen from '../../components/RentScreen/index';
import DetailCard from '../../components/RentScreen/DetailedCard';
import products from '../../mockApi/products';

describe('<RentScrren />', () => {
  it('<DetailCard />を表示していること', () => {
    const wrapper = shallow(<RentScreen
      isFetching={false}
      shareInformationsArray={products}
      currentUser={{}}
      rooms={{}}
      toggleRedirectChat={jest.fn()}
      redirectChat={false}
      rest={{}}
    />);

    expect(wrapper.find(DetailCard).length).toBe(7);
  });

  it('ロード画面を表示すること', () => {
    const wrapper = shallow(<RentScreen
      isFetching
      shareInformationsArray={products}
      currentUser={{}}
      rooms={{}}
      toggleRedirectChat={jest.fn()}
      redirectChat={false}
      rest={{}}
    />);

    expect(wrapper.find('h2').length).toBe(1);
  });
});
