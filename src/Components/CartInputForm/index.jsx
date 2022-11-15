// import propTypes, { func } from 'prop-types';

function CartInputForm() {
  return (
    <form>
      <label>
        <span>name</span>
        <input type="text" />
      </label>
      <label>
        <span>price</span>
        <input type="number" />
      </label>
      <button>+add</button>
    </form>
  )
}

export default CartInputForm;