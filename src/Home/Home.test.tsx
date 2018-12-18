import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { MemoryRouter } from 'react-router';
import { HomeStore } from '../Stores/HomeStore';
import Home from './Home';

jest.mock('react-router-dom');
jest.mock('./Home.styles');

const homeStore = {} as HomeStore;

const props = {
    homeStore: homeStore,
    history: {},
    location: {},
    match: {},
    staticContext: {}
};

describe('Order Tests', () => {
    let homeWrapper: ShallowWrapper;

    beforeEach(() => {
        homeWrapper = shallow(<MemoryRouter><Home {...props} /></MemoryRouter>).first().shallow().first().shallow();
        console.log(homeWrapper.debug());
    });

    it('passes a test', () => {
        expect(true).toBe(true);
    });
});