
import React from 'react';
import s from './index.module.scss'
import Sale from '../Sale';
const SalesContainer = () => {
    return (
        <div className={`${s.salesContainer} container`}>
            <h2>Sale</h2>
            <Sale/>
        </div>
    );
};

export default SalesContainer;