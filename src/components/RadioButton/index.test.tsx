import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import RadioButton from './index';
describe('MyComponent', () => {
  it('should have lenght of 1', () => {
    const component = shallow(<RadioButton id='id' name='name' onChange={() => {} }>click</RadioButton>)
    expect(component).toHaveLength(1)
  });
});
