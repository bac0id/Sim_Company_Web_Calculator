import React from 'react';
import { useCalculaRetail } from '../hooks/useCalculaRetail';
import { FormRetail } from './ui/FormRetail';

export const RetailCalculator = () => {
    const {productsJSON} = useCalculaRetail();
    console.log(productsJSON)
    
    return (
        <div className="window-app">
            <h1>Retail calculator</h1>
            <FormRetail/>
        </div>
    )
}
