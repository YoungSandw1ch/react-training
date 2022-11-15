import CartInputForm from "../../Components/CartInputForm";
import CartList from '../../Components/CartList';
import Loader from '../../Components/Loader';
import TotalAmount from '../../Components/TotalAmount';

function Cart() {
  return (
    <div className="Cart">
      <CartInputForm />
      <Loader />
      <CartList />
      <TotalAmount />
    </div>
  )
}

export default Cart;