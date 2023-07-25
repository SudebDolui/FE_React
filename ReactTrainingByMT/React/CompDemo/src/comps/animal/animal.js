import React, { Component } from 'react'


/*
export function Animal (props) {
    const {name, number, endangered} = props
    return (
        <div>
            <h1>Animal Name: {name}</h1>
            <h1>Animal Count: {number}</h1>
            <h1>Animal Endangered: {endangered}</h1>
        </div>
    )
}
*/

/*
export const Animal = ({name, number, endangered}) => {
    <div>
    <h1>Animal Name: {props.name}</h1>
    <h1>Animal Count: {props.number}</h1>
    <h1>Animal Endangered: {props.endangered}</h1>
    </div>
}
*/

/*
export const Animal = (props) => {
    <div>
    <h1>Animal Name: {props.name}</h1>
    <h1>Animal Count: {props.number}</h1>
    <h1>Animal Endangered: {props.endangered}</h1>
    </div>
}
*/

//children is special prop 


/* export  default class Animal  extends Component{
    render () {
        const details =this.props.details ;
        to return li element for each animal element  in the array
        const  listDetails = details.map( (animal ,index)  => (
        <li key ={index}>
                <h2> Animal  : {animal.name}  </h2> 
                 <h2> Number: {animal.number}</h2>
                 <h2> Endangered : {animal.endangered ? 'Yes' : 'No'} </h2>

        </li>
              )  )  ;

              return (
                <div>
                    {this.props.children}
                    <ul>{listDetails}</ul>
                </div>
              )


    }
} 
*/


const Animal = props => {

    const details = props.details ;

    
    const  listDetails = details.map( (animal ,index)  => (
        <li key ={index}>
                <h2> Animal  : {animal.name}  </h2> 
                 <h2> Number: {animal.number}</h2>
                 <h2> Endangered : {animal.endangered ? 'Yes' : 'No'} </h2>

        </li>
              )  )  ;

    return (
        <div>
              {props.children}
              <ul>
                {/* {listDetails} */}
                { details.map ((detail, index) => (
                <AnimalDetails
                    image = {
                        <Photo path = {detail.photo}
                            name = {detail.name}
                        />
                    }
                    details = {detail}
                    key = {index}
                />
                )) }
              </ul>

        </div>
    )

}

const AnimalDetails = props => {
    const {name, number, endangered, donation} = props.details;

    return (
        <li>
            <h2>Animal: {name}</h2>
            <h2>Number: {number}</h2>
            <h2>Endangered: {endangered ? 'Yes': 'No'}</h2>
            <p>{props.image}</p>
            <p style = {{color: props.donationColor}}>
                Donation Amount:
                {/* <span className='donation-color'> */}
                    ${donation}
                {/* </span>  */}
            </p>
        </li>
    )
};

const withDonationColor = (WrappedComponent) => {
    return class extends Component {
        constructor (props) {
            super (props);
            this.state = {donationColor: 'black'}
        };

        componentDidMount () {
            const donationAmount = this.props.detail.donation;
            console.log('props',this.props);
            const donationColor = donationAmount > 50 ? 'green' : 'red';
            this.setState({donationColor});
        };

        render () {
            return (
                <WrappedComponent {...this.props} donationColor = {this.state.donationColor} />
            )
        };

    }
};

const WrappedComponent = withDonationColor(AnimalDetails);

const Photo = props => {
    return <img src = {props.path} alt={props.name}/>
};



export {Animal}

