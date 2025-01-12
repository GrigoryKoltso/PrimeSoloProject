import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import s from './index.module.scss';

const OrderForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const cartState = useSelector(store => store.cart);

    const totalItems = cartState.length

    const totalPrice = cartState.reduce((acc, el) => acc + (el.price * el.count), 0).toFixed(2);

    const submit = data => {
        const newOrder = {
            ...data,
            totalPrice: +totalPrice,
            cart: cartState
        };

        console.log(newOrder);
        reset();
    };

    const nameRegister = register('name', {
        required: '*The field NAME is required',
        minLength: 3
    });

    const phoneRegister = register('phone', {
        required: '*The field PHONE is required',
        pattern: {
            value: /^[1-9]\d{0,2}\d{10}$/,
            message: '*Phone number should contain country code and 10 digits'
        }
    });

    const emailRegister = register('email', {
        required: '*The field EMAIL is required',
        pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: '*Email should meet the format'
        }
    });

    return (
        <div className={` ${s.orderForm} container`}>
            <form onSubmit={handleSubmit(submit)}>
                <h3>Order details</h3>
                <p>{totalItems} items</p>
                <div>
                    <p>Total</p>
                    <p>${totalPrice}</p>
                </div>

                <input type='text' placeholder='Name' {...nameRegister} />
                {errors.name && <p>{errors.name.message}</p>}

                <input type='text' placeholder='Phone number' {...phoneRegister} />
                {errors.phone && <p>{errors.phone.message}</p>}

                <input type='text' placeholder='Email' {...emailRegister} />
                {errors.email && <p>{errors.email.message}</p>}

                <button>Order</button>
            </form>
        </div>
    );
};

export default OrderForm;
