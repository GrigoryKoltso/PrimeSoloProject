import { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import s from './index.module.scss'
const FilterByPriceForm = ({ action }) => {
    const dispatch = useDispatch();

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(Infinity);

    const handleMinValue = e => setMinValue(e.target.value || 0);
    const handleMaxValue = e => setMaxValue(e.target.value || Infinity);

    // Обернуть action в useCallback для стабильности
    const stableAction = useCallback(action, [action]);

    useEffect(() => {
        dispatch(stableAction({ minValue, maxValue }));
    }, [dispatch, stableAction, minValue, maxValue]);

    return (
        <div className={s.filterByPrice}>
            <span>Price: </span>
            <input type='number' placeholder='from' name='min' onChange={handleMinValue} />
            <input type='number' placeholder='to' name='max' onChange={handleMaxValue} />
        </div>
    );
};

export default FilterByPriceForm;
