import enzyme from 'enzyme';
import adapter from 'enzyme-adapter-react-16';

global.XMLHttpRequest = global.window.XMLHttpRequest;
global.window = {};
global.window.XMLHttpRequest = global.XMLHttpRequest;

enzyme.configure({ adapter: new adapter() });