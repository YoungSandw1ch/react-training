import CartInputForm from "../../Components/CartInputForm";
import CartList from '../../Components/CartList';
import Loader from '../../Components/Loader';
import TotalAmount from '../../Components/TotalAmount';

const initialState = [
  { id: '1', name: 'monitor', price: 200, count: 1 },
  { id: '2', name: 'RAM', price: 15, count: 2 },
  { id: '3', name: 'printer', price: 10, count: 1 },
]

function Cart() {
  return (
    <div className="cart">
      <CartInputForm />
      <Loader />
      <CartList items={initialState} />
      <TotalAmount items={initialState} />
    </div>
  )
}

export default Cart;