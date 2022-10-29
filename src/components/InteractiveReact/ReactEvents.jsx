// example 1: handling click events
function Button({onClick, children}){
    return <button onClick={onClick}>{children}</button>
}
function Toolbar({onPlayMovie, onUploadImage}){
    return(
        <div>
            <Button onClick={onPlayMovie}>
                Play Movie
            </Button>
            <Button onClick={onUploadImage}>
                Upload Image
            </Button>
            
        </div>
    )
}
export default function ReactEventsJSX(){
    return (
        <div className="container">
            <section id='intro'>
                <h1>Adding Interactivity In React</h1>
                <p>Some things on the screen update in response to user input. For example, clicking an image gallery switches the active image. In React, data that changes over time is called state. You can add state to any component, and update it as needed. In this chapter, you'll learn how to write components that handle interactions, update their state, and display different output over time.</p>
            </section>
            <section id='events'>
                <h3>React Events</h3>
                <p>React lets you add event handlers to your JSX. Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.</p>
                <center>
                    <i>Example 1: (handling click events)</i>
                    <Toolbar onPlayMovie={() => {alert('Playing Movie')}}
                            onUploadImage={() => {alert('Uploading Image')}}/>
                </center>
                <ul>
                    <h4><u>Summary:</u></h4>
                    <li>You can handle events by passing a function as a prop to an element like button</li>
                    <li>Event handlers must be passed, not called! onClick={'{'}handleClick{'}'}, not onClick={'{'}handleClick(){'}'}.</li>
                    <li>You can define an event handler function separately or inline.</li>
                    <li>Event handlers are defined inside a component, so they can access props.</li>
                    <li>You can define your own event handler props with application-specific names.</li>
                    <li>Events propagate upwards. Call e.stopPropagation() on the first argument to prevent that.</li>
                    <li>Events may have unwanted default browser behavior. Call e.preventDefault() to prevent that.</li>
                    <li>Explicitly calling an event handler prop from a child handler is a good alternative to propagation.</li>
                </ul>
                <hr />
            </section>
        </div>
    )
}
