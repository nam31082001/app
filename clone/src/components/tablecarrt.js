import { useDispatch, useSelector } from "react-redux"

const TableCart = () => {
    const count = 0
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    return (
        <div className="cart_product">
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Amount Of Money</th>
                        <th>Delete</th>
                    </tr>

                </thead>
                <tbody>
                    {cart.map(item => {
                        return (

                            <tr key={item.id}>
                                <td className="table_img">
                                    <img src={item.image} />
                                    <p>{item.title}</p>
                                    <p>{item.category}</p>
                                </td>
                                <td>{item.price}$</td>
                                <td className="table_quantity">
                                    <div>
                                        <div onClick={() => dispatch({ type: 'REDUCE', payload: item.id })}>-</div>
                                        <div>{item.quantity}</div>
                                        <div onClick={() => dispatch({ type: 'INCREASE', payload: item.id })}>+</div>
                                    </div>

                                </td>
                                <td> {item.total}$</td>
                                <td>
                                    <button onClick={() => dispatch({ type: 'DELETE', payload: item.id })}>DELETE</button>
                                </td>
                            </tr>

                        )
                    })}
                </tbody>
                <tfoot></tfoot>



            </table>

        </div>
    )
}
export default TableCart

