
import { useSelector } from 'react-redux';
import ProductsContainer from '../../components/ProductsContainer';
import s from './index.module.scss';
import FilterByPriceForm from '../../components/FilterByPriceForm';
import SortForm from '../../components/SortForm';
import { filterByPriceAction, sortProductsByCategoryAction } from '../../store/actions/productsAction';

const AllSalesPage = () => {
    const productsState = useSelector((store) => store.products);

    // Отфильтровать товары со скидкой
    const filteredDiscountedProducts = productsState.data.filter(
        (product) => product.visible && product.discont_price
    );

    return (
        <section className={`${s.sales} container`}>
            <h2>Discounted items</h2>
            <div className={s.sortComponent}>
                <FilterByPriceForm action={filterByPriceAction} />
                <SortForm action={sortProductsByCategoryAction} />
            </div>
            <ProductsContainer products={filteredDiscountedProducts} />
        </section>
    );
};

export default AllSalesPage;
