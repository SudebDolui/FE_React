import { useEffect, useState } from 'react';
import { getCars } from '../../assests/data/cars_data';
import { Card } from './Card'

const CarList = () => {
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([])
    const [isPending, setIsPending] = useState(true);
    const [brand, setBrand] = useState();

    useEffect(() => {
        // setFilteredCars([...cars]);
        if(cars.length === 0) {
            getCars().then(data => setCars(data));
            setIsPending(false);
        } else {
            setCars(cars.filter(c => c.brand === brand));
        };
    }, [brand]);

    const changeBrandHandle = (event) => {
        setBrand(event.target.value);
        setIsPending(true);
        // setCars(cars.filter(c => c.brand === brand)); 
        // setFilteredCars(cars.filter(c => c.brand === brand));

    };

    return(
        <>
            <figure>
                <img src='' alt='car' />
            </figure>

            <h2>Cars: {brand ? brand : 'All Brands'}</h2>

            <label>Choose a Brand</label>

            <div>
                {isPending && <div><h2>Loading Cars from: {brand}</h2></div>}
            </div>

            <select name='cars' id='cars' onChange={changeBrandHandle}>
                <option value=''>All Cars</option>
                <option value='Fiat'>Fiat</option>
                <option value='Renault'>Renault</option>
                <option value='BMW'>BMW</option>
                <option value='Citroen'>Citroen</option>
                <option value='Hyundai'>Hyundai</option>
            </select>

            

            <div>
                {cars && cars.map(el => {
                    return (<Card key={el._id} car={el}/>)
                })}
            </div>
        </>
    );
};

export {CarList}