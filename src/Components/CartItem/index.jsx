function CartItem() {
  return (
    <div className="card-item">
      <span>name</span>
      <span>100$</span>

      <div>
        <button>-</button>
        <span>2</span>
        <button>+</button>
      </div>

      <span>200$</span>
      <button>x</button>
    </div>
  )
}

export default CartItem;