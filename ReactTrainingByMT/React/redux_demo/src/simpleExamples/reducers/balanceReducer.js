const balanceReducer = (state=0, action) => {
    switch(action.type) {
        case 'WITHDRAW': return state-action.payload.amount;
        case 'DEPOSIT': return state+action.payload.amount;
        // case 'LOGIN':
        default: return state;
    }
};

export default balanceReducer;