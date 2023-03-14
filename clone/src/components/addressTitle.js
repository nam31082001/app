const AddressTitle = (props) => {
    const { handleAddressTitle, itemAddress } = props
    const check = Object.keys(itemAddress).length === 0
    return (
        <div className="address_title">
            <tr>
                {
                    check ?
                        <>
                            <td><p>Cao Văn Nam</p><p>0824006601</p></td>
                            <td>Khu xưởng thực hành trường đại học kinh tế kĩ thuật công nghiệp, xã Mỹ Xá, Thành phố Nam Định, Tỉnh Nam Định., Phường Mỹ Xá, Thành Phố Nam Định, Nam Định</td>
                        </>
                        :
                        <>
                            <td><p>{itemAddress.name}</p><p>{itemAddress.phone}</p></td>
                            <td>{itemAddress.address}</td>
                        </>
                }

                <td>
                    <button onClick={() => handleAddressTitle(false)} style={{width:'150px'}}>Change</button>
                </td>
            </tr>
        </div>
    )
}

export default AddressTitle