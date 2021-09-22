import { Config } from '../../config/Config';

export const GET_MENUS_REQUEST = 'RESTAURANT_LIST_REQUEST';
export const GET_MENUS_RESPONSE = 'RESTAURANT_LIST_RESPONSE';

export const getMenus = (start, limit) => {
    return dispatch => {
        dispatch({
            type: GET_MENUS_REQUEST
        });
        
        return fetch(`${Config.backendBaseUrl}/menus?start=${start}&limit=${limit}`)
        .then(response => response.json()).then(menus => {
            dispatch({
                type: GET_MENUS_RESPONSE,
                menus
            });
        });
    }
}