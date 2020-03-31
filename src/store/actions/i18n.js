import axios from 'axios';


function fetchI18nDataFail(err) {
    return {
        type: "FETCH_i18N_DATA_FAIL"
    }
}

export function fetchI18nData(i18n){
    return dispatch => {
        axios.get(`/config/i18n/${i18n}.json`)
            .then(res => {
                dispatch({
                    type: "FETCH_i18N_DATA",
                    data: res.data
                })
            })
            .catch(err => {
                dispatch(fetchI18nDataFail(err));
            })
    };
}