import { useSelector } from "react-redux"

const ProductBuy = () => {
    const buyNow = useSelector(state => state.buyNow)
    const cart = useSelector(state => state.cart)
    const check = useSelector(state => state.checkCart)
    return (
        <div className="product_buy">
            <table>
                <thead>
                    <tr className="product_buy_tr">
                        <th>Product</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {check ?
                        <>
                            <tr>
                                <td className="product_buy_img">
                                    <img src={buyNow.image} />
                                </td>
                                <td>{buyNow.title}</td>
                                <td>X1</td>
                                <td>{buyNow.price}$</td>
                            </tr>
                        </>
                        :
                        <>
                            {cart.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td className="product_buy_img">
                                            <img src={item.image} />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>X{item.quantity}</td>
                                        <td>{item.price}$</td>
                                    </tr>
                                )
                            })}
                        </>

                    }

                </tbody>
                <tfoot></tfoot>

            </table>
        </div>
    )
}
export default ProductBuy