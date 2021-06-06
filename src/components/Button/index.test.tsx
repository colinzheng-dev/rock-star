import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import Button from './index';

const clickFn = jest.fn();
describe('MyComponent', () => {
  it('should have lenght of 1', () => {
    const component = shallow(<Button className='btn'>click</Button>)
    expect(component).toHaveLength(1)
  });
});
