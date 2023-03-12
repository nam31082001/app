import AssessClient from "./AssessClient"

const InformationProduct = (props) => {
    const { detail } = props
    console.log(detail)
    return (
        <>
            <h3>Information Product</h3>
            <p>Category:{detail.category}</p>
            <p>Trademark :{detail.category}</p>
            <p>Sent from :Hà Nội</p>
            <h3>Product Description</h3>
            <p>{detail.description}</p>
            <h3>Assess Product from Client</h3>
            <div>
                <AssessClient />
                <div>
                    <div>
                        <h2>Related Products</h2>
                    </div>

                </div>
            </div>
        </>
    )
}
export default InformationProduct