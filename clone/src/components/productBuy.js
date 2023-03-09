import { useSelector } from "react-redux"

const ProductBuy = () => {
    const buyNow = useSelector(state => state.buyNow)
    return (
        <div className="product_buy">
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="product_buy_img">
                            <img src={buyNow.image} />
                        </td>
                        <td>{buyNow.title}</td>
                        <td>X{buyNow.quantity}</td>
                        <td>{buyNow.price}$</td>
                    </tr>
                </tbody>
                <tfoot></tfoot>

            </table>
        </div>
    )
}
export default ProductBuy