/*
    * React can change how you think about the designs you look at and the apps you build. When you build a user interface with React, you will first break it apart into pieces called components.
    * Then, you will describe the different visual states for each of your components.
    * Finally, you will connect your components together so that the data flows through them.
    
    
    * There are two types of “model” data in React: props and state. The two are very different:

    * Props are like arguments you pass to a function. They let a parent component pass data to a child component and customize its appearance. For example, a Form can pass a color prop to a Button.
    * State is like a component’s memory. It lets a component keep track of some information and change it in response to interactions. For example, a Button might keep track of isHovered state.
    
    * Props and state are different, but they work together. A parent component will often keep some information in state (so that it can change it), and pass it down to child components as their props. It’s okay if the difference still feels fuzzy on the first read. It takes a bit of practice for it to really stick!

    * inverse data flow

*/

export default function Info({name}){
    return (
        <div className="container">
            <h2>Thinking in {name}</h2>
            <ul>
                <li>React can change how you think about the designs you look at and the apps you build. When you build a user interface with React, you will first break it apart into pieces called components.</li>
                <li>Then, you will describe the different visual states for each of your components.</li>
                <li>Finally, you will connect your components together so that the data flows through them.</li>
            </ul>
            <i><a target={"_blank"} href='https://beta.reactjs.org/learn/thinking-in-react'>Read More</a></i>
            <h3>Let's Look at this example:</h3>
            <p>JSON Api data:</p>
            <code>
                const items = [
                    {'{'} category: "Fruits", price: "$1", stocked: true, name: "Apple" {'}'}, <br></br>
                    {'{'} category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" {'}'},<br></br>
                    {'{'} category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" {'}'},<br></br>
                    {'{'} category: "Vegetables", price: "$2", stocked: true, name: "Spinach" {'}'},<br></br>
                    {'{'} category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" {'}'},<br></br>
                    {'{'} category: "Vegetables", price: "$1", stocked: true, name: "Peas" {'}'}
                ]
            </code>
            <p>Design Mockup:</p>
            <img src={require('./desgin-mckup-react-learn.png')} style={{width: "250px"}} alt='desgin-mockup'></img>
            <p>Design into components break apart:</p>
            <img src={require('./design-break-apart-react-dark.png')} style={{width: "380px"}} alt='desgin-mockup'></img>
            <div>
                <h2><i>State?</i> & how to identify what component to hold a state</h2>
                <p>State is like a component's memory. It lets a component keep track of some information and change it in response to interactions. For example, a Button might keep track of isHovered state.</p>
                <h3>Identify where your state should live</h3>
                <ul>
                    <li>Identify every component that renders something based on that state.</li>
                    <li>Find their closest common parent component—a component above them all in the hierarchy.</li>
                    <li>Decide where the state should live:
                        <ol>
                            <li>Often, you can put the state directly into their common parent.</li>
                            <li>You can also put the state into some component above their common parent.</li>
                            <li>If you can't find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common parent component.</li>
                        </ol>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Inverse Dataflow</h2>
                <ul>
                    <li>Currently you know how app renders correctly with props and state flowing down the hierarchy. But to change the state according to user input, you will need to support data flowing the other way: the form components deep in the hierarchy need to update the state in parent Component.</li>
                    <li>React makes this data flow explicit, Read More about it here: <a href='https://beta.reactjs.org/learn/thinking-in-react#step-5-add-inverse-data-flow' target={'_blank'}>add-inverse-data-flow</a></li>
                </ul>
            </div>
      </div>
      
    )
} 