import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withdraw, deposit } from '../actions';

function BankTransaction() {
    const balance = useSelector(state => state.transaction);
    const dispatch = useDispatch();

    const [inputAmt, setInputAmt] = useState(0);
    
    return (
        <>
            <h1>
                BankTransaction Details
            </h1>

            <h2>
                Current Balance:  Rs.{balance}/-
            </h2>

            <br/>

            <input 
            onChange={(e) => setInputAmt(parseInt(e.target.value))}
            />

            <br/>
            <button
            onClick={() => dispatch(withdraw(inputAmt))}
            >
                Withdraw
            </button>

            <button
            onClick={() => dispatch(deposit(inputAmt))}
            >
                Deposit
            </button>
        </>
    );
}

export default BankTransaction