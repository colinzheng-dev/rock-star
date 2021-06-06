import ProgressBar from '../components/ProgressBar'
import { reducer } from './index'

describe('reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            salary: '2'
        })
    })
    it('should handle UPDATE_FIRST_NAME', () => {
        expect(reducer(undefined, {
            type: 'UPDATE_FIRST_NAME',
            payload: 'arian'
        })
    ).toEqual({
        firstname: 'arian',
        lastname: '',
        email: '',
        phone: '',
        salary: '2'
    })
    })
})