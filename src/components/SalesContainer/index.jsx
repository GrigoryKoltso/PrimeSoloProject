
import s from './index.module.scss'
import Sale from '../Sale';
import { Link } from 'react-router-dom';
const SalesContainer = () => {
    return (
        <div className={`${s.salesContainer} container`}>
            <div className={s.cart_title}>
               <h2>Sale</h2>
               <div>
                    <div className={s.border}></div>
                    <Link to="/sales">All sales</Link>
               </div>
            </div>
            <Sale/>
        </div>
    );
};

export default SalesContainer;