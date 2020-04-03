import { mainInstance } from '../../axios';
import axios from 'axios';

function fetchMainDataFail(err) {
    return {
        type: "FETCH_MAIN_DATA_FAIL"
    }
}

export function fetchMainData(i18n){
    return dispatch => {
        mainInstance.get(`/json/config/main_${i18n}.json`)
            .then(res => {
                dispatch({
                    type: "FETCH_MAIN_DATA",
                    data: res.data
                })
            })
            .catch(err => {
                dispatch(fetchMainDataFail(err));
            })
    };
}