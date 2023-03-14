import {
    ADD_ADDRESS,
    ADD_ASSESS,
    ADD_PRODUCT_CART,
    BUY_NOW, CHECK_CART,
    DELETE, DELETE_ADDRESS,
    DETAIL_API,
    GET_API,
    INCREASE,
    REDUCE,
    UPDATE_ADDRESS,
    NUMBER
} from "./action"

const initState = {
    data: [],
    detail: {},
    cart: [],
    buyNow: {},
    method_pay: ['Credit Card', 'Bank Card', 'Banking', 'Cash'],
    address: [
        { id: 103, name: 'Cao Văn Nam', phone: '0824006601', address: 'Khu xưởng thực hành trường đại học kinh tế kĩ thuật công nghiệp, xã Mỹ Xá, Thành phố Nam Định, Tỉnh Nam Định., Phường Mỹ Xá, Thành Phố Nam Định, Nam Định' },
        { id: 100, name: "Cao Van Nam", phone: '0824006601', address: 'Số nhà 18 ngõ 24 phố kim mã hai bà trung hà nội' },
        { id: 101, name: "Cao Van Bắc", phone: '0824006602', address: 'Số nhà 19 ngõ 24 phố kim mã hai bà trung hà nội' },
        { id: 102, name: "Cao Van Trung", phone: '0824006603', address: 'Số nhà 20 ngõ 24 phố kim mã hai bà trung hà nội' },
    ],
    checkCart: true,
    assess: [
        {
            id: 'a',
            evaluate: 3,
            name: "t****1",
            describe: 'same as description',
            material: "good",
            color: "green",
            title: 'The color and fabric are fine, a bit hot to wearFast delivery',
            img: ['https://bom.so/yDNS8l', `https://bom.so/GvBJ2i`, `https://bom.so/W4QrrI`],
            feedback: "Thank you for reviewing 2s Clothing Hope you had a great experience at the shop. Hope 2s Clothing can serve you in the near future"
        },
        {
            id: 'z',
            name: "t****1",
            evaluate: 3,
            describe: 'same as description',
            material: "good",
            color: "green",
            title: 'The color and fabric are fine, a bit hot to wearFast delivery',
            img: ['https://bom.so/yDNS8l', `https://bom.so/GvBJ2i`, `https://bom.so/W4QrrI`],
            feedback: "Thank you for reviewing 2s Clothing Hope you had a great experience at the shop. Hope 2s Clothing can serve you in the near future"
        },
    ],
    number: 0
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_API:
            return { ...state, data: action.payload, detail: {} }
        case DETAIL_API:
            return { ...state, detail: action.payload }
        case ADD_PRODUCT_CART:
            let check = false
            const index = action.payload
            const cartCopy = [...state.cart]
            if (cartCopy.length === 0) {
                return {
                    ...state,
                    cart: [...state.cart, index]
                }
            }
            cartCopy.map(item => {
                if (item.id === index.id) {
                    check = true
                    item.quantity++
                    item.total = item.quantity * item.price
                }
            })
            if (check === false) {
                return {
                    ...state,
                    cart: [...state.cart, index]
                }
            }
            return {
                ...state
            }
        case DELETE:
            const copyCart = [...state.cart]
            const cartNew = copyCart.filter(item => item.id !== action.payload)

            return {
                ...state,
                cart: cartNew,
                number:state.number-1
            }

        case REDUCE:
            const copyCartReduce = [...state.cart]
            copyCartReduce.forEach((item, index) => {
                if (item.id === action.payload) {
                    item.quantity--
                    item.total = item.quantity * item.price
                }
            })
            return {
                ...state, cart: copyCartReduce
            }
        case INCREASE:
            const copyCartIncrease = [...state.cart]
            copyCartIncrease.forEach((item, index) => {
                if (item.id === action.payload) {
                    item.quantity++
                    item.total = item.quantity * item.price
                }
            })
            return {
                ...state, cart: copyCartIncrease
            }
        case BUY_NOW:

            return {
                ...state, buyNow: action.payload, checkCart: true
            }
        case ADD_ADDRESS:
            return { ...state, address: [...state.address, action.payload] }
        case DELETE_ADDRESS:
            const copyAddress = [...state.address].filter(item => item.id !== action.payload)
            return { ...state, address: copyAddress }
        case UPDATE_ADDRESS:
            console.log(action.payload)
            const updateAddress = [...state.address]
            updateAddress.forEach((item, index) => {
                if (item.id === action.payload.id) {
                    item.name = action.payload.name
                    item.phone = action.payload.phone
                    item.address = action.payload.address
                }
            })

            return { ...state, address: updateAddress }
        case CHECK_CART:
            return { ...state, checkCart: false }
        case ADD_ASSESS:
            return {
                ...state,
                assess: [...state.assess, action.payload]
            }
        case NUMBER:
            return { ...state,number:state.cart.length}

        default:
            return state
    }

}

export default rootReducer