/* eslint-disable default-case */
export const reducer = (state, action) => {
    switch (action.type) {
        case "Update":
            return { ...state, ...action.payload }
        case "ADD":
            return { ...state, result: parseInt(state?.num1) + parseInt(state?.num2) }
        case "Subtract":
            return { ...state, result: parseInt(state?.num1) - parseInt(state?.num2) }
    }
}