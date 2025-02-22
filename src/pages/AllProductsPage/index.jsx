import ProductsContainer from '../../components/ProductsContainer';
import { useSelector } from 'react-redux';
import s from './index.module.scss';
import SortForm from '../../components/SortForm';
import FilterByPriceForm from '../../components/FilterByPriceForm';
import { sortProductsByCategoryAction, filterByPriceAction, filterCheapAllProductsAction } from '../../store/actions/productsAction';
import CheapProductsCheck from '../../components/CheapProductsCheck';

const AllProductsPage = () => {
    const allProductsState = useSelector(store => store.products);

    console.log(allProductsState);

    return (
        <div className={`${s.all_products} app-container`}>
            <h2>All Products</h2>
            <div className={`${s.sortComponent} sortComponent`}>
                <FilterByPriceForm action={filterByPriceAction} />
                <CheapProductsCheck action={filterCheapAllProductsAction}/>
                <SortForm action={sortProductsByCategoryAction} />
            </div>
            <ProductsContainer products={allProductsState.data.filter(product => product.visible)} />
        </div>
    );
};

export default AllProductsPage;
