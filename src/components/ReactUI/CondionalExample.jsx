function Item({ name, isPacked }){
    return (
        <li className="item">
            {/* {isPacked ? name + '✔' : name}  */}
            {/* You can read this as “if isPacked, then (&&) render the checkmark, otherwise, render nothing”. */}
            {name} {isPacked && '✔'}
        </li>
    )
}

export default function PackingList(){
    return (
        <section>
            <h1>Example 2: Sally Ride's Packing List (Conditions)</h1>
            <ul>
                <Item 
                isPacked={true} 
                name="Space suit" 
                />
                <Item 
                isPacked={true} 
                name="Helmet with a golden leaf" 
                />
                <Item 
                isPacked={false} 
                name="Photo of Tam" 
                />
            </ul>
        </section>
    )
}