import { types } from '../types/types';

const savePricesInLocalStorage = ( prices = null ) => {
    localStorage.setItem('prices',JSON.stringify(prices) || null);
};

export const getPricesFromInternet = () => {
    return (dispatch) => {

        const prices = [{ id: 123, precios: [1,2,3,4,5,6]}];
        
        console.log(prices);

        dispatch(
            {
                type: types.updatePrices,
                payload: prices
            }
        )

        savePricesInLocalStorage(prices);
    }
}