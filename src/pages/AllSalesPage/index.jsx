
import { useSelector } from 'react-redux';
import ProductsContainer from '../../components/ProductsContainer';
import s from './index.module.scss'
import FilterByPriceForm from '../../components/FilterByPriceForm';
import CheapProductsCheck from '../../components/CheapProductsCheck';
import SortForm from '../../components/SortForm';
import { filterByPriceAction, sortProductsByCategoryAction } from '../../store/actions/productsAction';
const AllSalesPage = () => {

    const productsState = useSelector((store) => store.products);

    const discountedProducts = productsState.data.filter((product) => product.discont_price)
    return (
        <section className={`${s.sales} container`}>
            <h2>Discounted items</h2>
            <div className='sortComponent'>
                <FilterByPriceForm action={filterByPriceAction} />
                <SortForm action={sortProductsByCategoryAction} />
            </div>
            <ProductsContainer products={discountedProducts} />
        </section>
    );
};

export default AllSalesPage;