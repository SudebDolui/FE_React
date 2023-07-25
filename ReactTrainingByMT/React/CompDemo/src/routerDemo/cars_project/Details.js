import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function CarDetail({car}) {
    // const param = useParams();
    const [searchParams] = useSearchParams();
    const searchItem = searchParams.get('make');
    console.log(
        searchParams
    )

    return (
        <>
            <h1>Received Value: {searchItem}</h1>
            <h1>Car Details: {car.brand}</h1>
            <h1>Car Make: {car.make}</h1>
        </>
    )
}

export default CarDetail