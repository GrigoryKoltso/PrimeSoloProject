import { useDispatch } from 'react-redux'
import s from './index.module.scss'
const SortForm = ({ action }) => {

    const dispatch = useDispatch();

    const sortProducts = e => dispatch(action(e.target.value));

    return (
        <div className={s.sortForm}>
            <span>Sorted </span>
            <select onInput={sortProducts}>
                <option value='price_asc'>by price ASC</option>
                <option value='price_desc'>by price DESC</option>
                <option value='title'>by title A-Z</option>
            </select>
        </div>
    );
};

export default SortForm;