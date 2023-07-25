const increment = () => {
    return {
        type: 'INCREMENT'
    }
};

const decrement = () => {
    return {
        type: 'DECREMENT'
    }
};

const authenticate = () => {
    return {
        type: 'LOGIN'
    }
};

const withdraw = (amt) => {
    console.log('Amount:', amt)
    return {
        type: 'WITHDRAW',
        payload: {amount: amt}
    }
};

const deposit = (amt) => {
    return {
        type: 'DEPOSIT',
        payload: {amount: amt}
    }
};

export {increment, decrement, authenticate, withdraw, deposit};