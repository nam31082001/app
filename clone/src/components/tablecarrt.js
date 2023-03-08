import { useSelector } from "react-redux"

const TableCart = () => {
    const cart = useSelector(state => state.cart)
    return (
        <div className="cart_product">
            <div>
                {cart.map(item => {
                    return (
                        <div key={item.id}>
                            <div className="table_img">
                                <img src={item.image} />
                            </div>
                            <div className="table_title">
                                {item.title}
                            </div>
                            <div className="table_category">
                                {item.category}
                            </div>
                            <div className="table_price">
                                {item.price}
                            </div>
                            <div className="table_quantity">
                                <div>
                                    <div>-</div>
                                    <div>1</div>
                                    <div>+</div>
                                </div>
                            </div>
                            <div className="table_delete">
                                <button>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
export default TableCart