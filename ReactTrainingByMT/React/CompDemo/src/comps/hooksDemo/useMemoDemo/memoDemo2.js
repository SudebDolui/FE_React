import { useMemo, useState } from "react";

const fruits = ['Apple', 'Orange', 'Banana', 'Orange', 'PineApple'];

const MemoRender = () => {
    const [text, setText] = useState('');
    const [query, setQuery] = useState('');

    // const matched = fruits.filter(v => v.includes(query));

    let matched = [];
    matched = useMemo (() => {
        console.log("Created", query);
        console.log("Array", (matched));
        // fruits.filter(v => v.includes(query));
        return fruits.filter(v => v.includes(query));
    }, [query]);

    // const onType = e => setText(e.target.value);
    
    const onType = e => {
        const v = e.target.value;
        setText(v);
        setQuery(v);
    };

    console.log('Text updated', text);

    // const onSearch = () => setQuery(text);

    return (
        <>
            <input value={text} onChange={onType}/>
            {/* <button onClick={onSearch}>Search</button> */}
            {/* <h3>{matched?.join(',')}</h3> */}
            <h3>{matched}</h3>
        </>
    )
};

export default MemoRender;