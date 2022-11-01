/*
    * How to think about UI changes as state changes
    * How to structure state well
    * How to “lift state up” to share it between components
    * How to control whether the state gets preserved or reset
    * How to consolidate complex state logic in a function
    * How to pass information without “prop drilling”
    * How to scale state management as your app grows
*/
// section one reacting to input with state
function OneOfSeven(){
    return (
        <section>
            <h1>Reacting to Input with State</h1>
            <p>React uses a declarative way to manipulate the UI. Instead of manipulating individual pieces of the UI directly, you describe the different states that your component can be in, and switch between them in response to the user input. This is similar to how designers think about the UI.</p>
            <i>Summury: </i>
            <ul>
                <li>Declarative programming means describing the UI for each visual state rather than micromanaging the UI (imperative).</li>
                <li>When developing a component:
                    <ol>
                        <li>Identify all its visual states.</li>
                        <li>Determine the human and computer triggers for state changes.</li>
                        <li>Model the state with useState.</li>
                        <li>Remove non-essential state to avoid bugs and paradoxes.</li>
                        <li>Connect the event handlers to set state.</li>
                    </ol>
                </li>
            </ul>
        </section>
    )
}


export default function ManagingState(){
    return (
        <div className="container">
            <OneOfSeven />
            
        </div>
    )
}