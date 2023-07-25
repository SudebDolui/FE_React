import { Animal } from "./animal";

export default function ParentContainer() {
    const name = "Tiger";
    const number = 3890;
    const endangered = true;
    const animalDetails = {
        name: "Tiger",
        number: 3890,
        endangered: true,
    };
    
    const details = [
        {
            name: "Tiger",
            number: 3890,
            endangered: true,
            photo: "https://source.unsplash.com/gRB4Euk4BYQ/200x100",
            donation: 100,
        },
        {
            name: "Brown Bear",
            number: 200000,
            endangered: false,
            photo: "https://source.unsplash.com/c8XlAc1akIU/200x100",
            donation: 30,
        },
        {
            name: "Red Panda",
            number: 10000,
            endangered: true,
            photo: "https://source.unsplash.com/2zYHKx8jtvU/200x100",
            donation: 800,
        },
    ];

    //passing object as props
    
    return (
        <div>
            {/* 
                <Animal name = {name} number = {number} endangered = {endangered ? 'Yes' : 'No'} />
                <Animal details = {animalDetails} /> 
            */}
            <Animal details={details}>
                <h1>Endangered Animals</h1>
            </Animal>
        </div>
    );
}
