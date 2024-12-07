
import { Link } from "react-router-dom";
import s from './index.module.scss'
const CategoryCard = ({ id, image, title }) => {
    return (
        <Link to={`/categories/${id}`}>
            <div className={s.card}>
                <img src={`http://localhost:3333${image}`} alt={title} />
                <p>{title}</p>
            </div>
        </Link>
    );
};

export default CategoryCard;