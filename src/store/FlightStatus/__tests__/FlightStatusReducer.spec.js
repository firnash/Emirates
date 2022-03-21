import * as actions from '../FlightStatusAction';
import flightStatusreducer, { INITIAL_STATE } from '../FlightStatusReducer';

describe('flightStatusreducer', () => {
	const data = {
    data: {
      date: '09/08/2022',
      origin: 'DXB',
      departure: 'CMB'
    }
  }

	it('handle default', () => {
		expect(flightStatusreducer(undefined, {})).toEqual(INITIAL_STATE);
	});

	it('handle GET_STATUS_RECEIVE', () => {
		const expectedResult = {
			...INITIAL_STATE,
      ...data.data
		}
		expect(flightStatusreducer(undefined, actions.actionStatusRequest(data.data))).toEqual(expectedResult);
	});
});