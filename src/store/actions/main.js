import { mainInstance } from '../../axios';

function fetchMainDataFail(err) {
    return {
        type: "FETCH_MAIN_DATA_FAIL"
    }
}

export function fetchMainData(i18n){
    return dispatch => {
        mainInstance.get(`main_${i18n}.json`)
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