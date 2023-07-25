import banner from '../../assests/images/mercedes-benz-vision-avtr.png'

export default function CarHome() {
    return(
        <div className="container">
            <img src={banner} alt="car banner" style={{width:"100%"}}/>
            <div className='top-left'>
                <h2 className='text-center text-blue display-2 p-4'>True value cars</h2>
            </div>
        </div>
    );
};