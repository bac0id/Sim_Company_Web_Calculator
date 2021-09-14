import { typesTableProduction } from '../types/typesTableProduction';
import { createData, getStateWWithMarketPrices, getStateWithNameIdAndAmoutItem, getStateWithDetailItemsPriced, 
  getStateWithTotalCostItemsCalculated, getStateWithWagesUpdated, getStateWithUnitsHourUpdated, getStateWithAdditionTotalCostItems } from './auxiliarReducers/tableProductionReducerAux';

const initialState = [
    createData('.',1),
    createData('..',2),
    createData('...',3 ),
  ];

export const tableProductionReducer = (state = initialState, action) => {  
    switch (action.type) {
        case typesTableProduction.clean:
            return initialState;   
            
        case typesTableProduction.updateNamesAndIds:             //this action erase previous information of table 
          const newDataNameId = action.payload.map( ({db_letter,name}) => createData(name,db_letter));
        return newDataNameId;

        case typesTableProduction.updatePrices:
          const newState =  getStateWWithMarketPrices(state, action.payload.marketPrices, action.payload.quality );
        return newState;

        case typesTableProduction.updateUnitsHour:
          const stateWithUnitsHourUpdated =  getStateWithUnitsHourUpdated(state, action.payload.productsJSON,
            action.payload.bonus, action.payload.abundance);
        return stateWithUnitsHourUpdated;

        case typesTableProduction.updateNamesAmountAndIdsItems:   //this action erase previous information of detail                      
          const stateWithNameIdAndAmoutItem =  getStateWithNameIdAndAmoutItem(state, action.payload.productsJSON)
        return stateWithNameIdAndAmoutItem;

        case typesTableProduction.updatePricesItems: 
          const stateWithItemsPriced = getStateWithDetailItemsPriced(state, action.payload.marketPrices, action.payload.quality);
        return stateWithItemsPriced;

        case typesTableProduction.calculateTotalCostItems:
          const stateTotalCostItemsCalculated = getStateWithTotalCostItemsCalculated(state);
        return stateTotalCostItemsCalculated;

        case typesTableProduction.calculateAdditionTotalCostItems:
          const stateWithAdditionTotalCostItem = getStateWithAdditionTotalCostItems(state);
        return stateWithAdditionTotalCostItem;


        case typesTableProduction.updateWagesItems: 
          const stateWagesItemsUpdated = getStateWithWagesUpdated(state, action.payload.wages);
        return stateWagesItemsUpdated;

        case typesTableProduction.updateAdminItems: 
          console.log('updateAdminItems');
        return state;

        case typesTableProduction.calculateTotalCostFabrication: 
          console.log('calculateTotalCostFabrication');
        return state;

        default:
            return state;
    }
}