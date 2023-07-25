import { useState } from "react";

import useZipLookUp from "./useZipLookUp";

export default function ShippingAddress() {

    const [zipcode, setZipcode] = useState('');
    const [city, state] = useZipLookUp(zipcode);

    const setZip = (e) => {
        e.preventDefault();
        setZipcode(e.target.zipcode.value);
    };

    return (
            <>
            <form onSubmit={setZip}>
                Zipcode: <input type="text" name='zipcode'/>
                <button type="submit">Lookup for state and city</button>
            </form>
            <h2>City: {city}</h2>
            <h2>State: {state}</h2>
            </>
    )

};
