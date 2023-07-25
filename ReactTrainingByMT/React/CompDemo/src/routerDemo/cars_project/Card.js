import { Link, useParams } from "react-router-dom";

const Card = ({car}) => {

    let {brand,make,year,km,color,price, _id} =car;

    const {id} = useParams();

    return(
        <>
            <div className="card card-compact"> 
                <div className="card-body">
                    <Link to={`cars/${_id}`}></Link>
                    <h2>{brand} {make}</h2>
                    <div className="d-flex justify-content-center">
                        <div className="my-1">
                    Year : {year} / Km: {km} / Color :{color}
                        </div>

                        <div className="my-1">
                    Price : ${price}
                        </div>


                    </div>


                </div>

            </div>
        </>
    )
}

export { Card };
