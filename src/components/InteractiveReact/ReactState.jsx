import { useState } from 'react';
import { sculptureList } from './data'

// example 2: 
function Gallery() {
    //index is a state variable and setIndex is the setter function.
    const [index, setIndex] = useState(0)
    const [showMore, setShowMore] = useState(false);

    let hasPrev = index > 0
    let hasNext = index < sculptureList.length - 1

    function handleNextClick() {
      if(hasNext){
        setIndex(index + 1)
      }
    }

    function handlePreviousClick(){
      if(hasPrev){
        setIndex(index - 1)
      }
    }
    function handleMoreClick() {
      setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
      <>
        <h3 >  
          ({index + 1} of {sculptureList.length})
            <button onClick={handlePreviousClick} disabled={!hasPrev} style={{marginLeft: '10px'}}>
            Previous
            </button>
            <button onClick={handleNextClick} disabled={!hasNext} style={{marginLeft: '10px'}}>
            Next
            </button>
        </h3>
        <b>
          <i>{sculpture.name} </i> 
          by {sculpture.artist}
        </b>
        <img 
          src={sculpture.url} 
          alt={sculpture.alt}
          style={{ display: 'block' }}
        />
        <button onClick={handleMoreClick} style={{display: 'block', marginTop: '10px'}}>
          {showMore ? 'Hide' : 'Show'} details
        </button>
        {showMore && <p>{sculpture.description}</p>}
      </>
    );
}

export default function ReactStateJSX(){
    return (
        <div className="container">
            <section id='state'>
                <h3>React State</h3>
                <p>Components often need to change what's on the screen as a result of an interaction. Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” should put a product in the shopping cart. Components need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called state.</p>
                <center>
                  <i style={{ display: 'block' }}>Example 2:</i>
                  <Gallery />
                </center>
                <h4>Notes: </h4>
                <ol>
                    <li>Local variables don't persist between renders. When React renders this component a second time, it renders it from scratch—it doesn't consider any changes to the local variables.</li>
                    <li>Changes to local variables won't trigger renders. React doesn't realize it needs to render the component again with the new data.</li>
                    <li>To update a component with new data, two things need to happen: a. Retain the data between renders, b. Trigger React to render the component with new data (re-rendering).</li>
                </ol>
                <b>The useState Hook provides those two things:</b>
                <ol>
                    <li>A state variable to retain the data between renders.</li>
                    <li>A state setter function to update the variable and trigger React to render the component again.</li>
                </ol>
                <ul>
                  <li>In React, useState, as well as any other function starting with ”use”, is called a Hook.</li>
                  <li>Hooks are special functions that are only available while React is rendering (which we'll get into in more detail on the next page). They let you “hook into” different React features.</li>
                  <li>Hooks—functions starting with use—can only be called at the top level of your components or your own Hooks. You can't call Hooks inside conditions, loops, or other nested functions. Hooks are functions, but it's helpful to think of them as unconditional declarations about your component's needs. You “use” React features at the top of your component similar to how you “import” modules at the top of your file.</li>
                </ul>
                <h4><u>Summary:</u></h4>
                <ul>
                  <li>Use a state variable when a component needs to “remember” some information between renders</li>
                  <li>State variables are declared by calling the useState Hook.</li>
                  <li>Hooks are special functions that start with use. They let you “hook into” React features like state.</li>
                  <li>Hooks might remind you of imports: they need to be called unconditionally. Calling Hooks, including useState, is only valid at the top level of a component or another Hook.</li>
                  <li>The useState Hook returns a pair of values: the current state and the function to update it.</li>
                  <li>You can have more than one state variable. Internally, React matches them up by their order.</li>
                  <li>State is private to the component. If you render it in two places, each copy gets its own state.</li>
                </ul>
                <hr />
            </section> 
        </div>
    )
}
