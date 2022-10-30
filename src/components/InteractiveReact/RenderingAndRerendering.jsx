import { useState } from 'react';


// section 3
function RenderAndCommit(){
    return (
        <section>
            <b>Render and Commit</b>
            <p>Before your components are displayed on screen, they must be rendered by React. Understanding the steps in this process will help you think about how your code executes and explain its behavior.</p>
            <ul>
                <li>Any screen update in a React app happens in three steps:
                    <ol>
                        <li>Trigger</li>
                        <li>Render</li>
                        <li>Commit</li>
                    </ol>
                </li>
                <li>You can use Strict Mode to find mistakes in your components</li>
                <li>React does not touch the DOM if the rendering result is the same as last time</li>
            </ul>
            <hr />
        </section>
    )
}
// section 4
function StateAsSnapshot(){
    return (
        <section>
            <b>State as a Snapshot</b>
            <p>State variables might look like regular JavaScript variables that you can read and write to. However, state behaves more like a snapshot. Setting it does not change the state variable you already have, but instead triggers a re-render.</p>
            <ul>
                <li>Setting state requests a new render.</li>
                <li>React stores state outside of your component, as if on a shelf.</li>
                <li>When you call useState, React gives you a snapshot of the state for that render.</li>
                <li>Variables and event handlers don't “survive” re-renders. Every render has its own event handlers.</li>
                <li>Every render (and functions inside it) will always “see” the snapshot of the state that React gave to that render.</li>
                <li>You can mentally substitute state in event handlers, similarly to how you think about the rendered JSX.</li>
                <li>Event handlers created in the past have the state values from the render in which they were created.</li>
            </ul>
            <hr />
        </section>
    )
}
// section 5
function Counter() {
    const [number, setNumber] = useState(0);
  
    return (
      <>
        <span >{number}{' '}</span>
        <button onClick={() => {
          setNumber(number + 5)
          setNumber((n) => n + 1)
          setNumber((n) => n + 1)
          setNumber((n) => n + 1)
        }}>+8</button>
      </>
    )
}
function QueueingStates(){
    return (
        <section>
            <h3>Queueing a Series of State Updates</h3>
            <p>Setting a state variable will queue another render. But sometimes you might want to perform multiple operations on the value before queueing the next render. To do this, it helps to understand how React batches state updates.</p>
            <p>
                <i>Updating the same state variable multiple times before the next render </i><b>pass a function that calculates the next state based on the previous one in the queue</b>It is a way to tell React to “do something with the state value” instead of just replacing it.s
            </p>
            <center>
                <i>Example 3: Counter {'=>'} </i><Counter />
                <br />
                <img src={require('./images/code1.png')} alt="code snippet one" style={{ width: '250px'}}/>
                <br />
            </center>
            <b>Summury</b>
            <ul>
                <li>Setting state does not change the variable in the existing render, but it requests a new render.</li>
                <li>React processes state updates after event handlers have finished running. This is called batching.</li>
                <li>To update some state multiple times in one event, you can use setNumber(n ={'>'} n + 1) updater function.</li>
                <li>An updater function (e.g. n ={'>'} n + 1) gets added to the queue.</li>
                <li>Any other value (e.g. number 5) adds “replace with 5” to the queue, ignoring what's already queued.</li>
            </ul>
            <hr />
        </section>
    )
}
// section 6
function UpdatingStateObjects(){
    return (
        <section>
            <b>Updating Objects in State</b>
            <p>State can hold any kind of JavaScript value, including objects. But you shouldn't change objects that you hold in the React state directly. Instead, when you want to update an object, you need to create a new one (or make a copy of an existing one), and then set the state to use that copy.</p>
            <i>Summury: </i>
            <ul>
                <li>Treat all state in React as immutable.</li>
                <li>When you store objects in state, mutating them will not trigger renders and will change the state in previous render “snapshots”.</li>
                <li>Instead of mutating an object, create a new version of it, and trigger a re-render by setting state to it.</li>
                <li>You can use the {'{'}...obj, something: 'newValue'{'}'} object spread syntax to create copies of objects.</li>
                <li>Spread syntax is shallow: it only copies one level deep.</li>
                <li>To update a nested object, you need to create copies all the way up from the place you're updating.</li>
                <li>Objects are not really nested</li>
                <li>To reduce repetitive copying code, use Immer.</li>
            </ul>
            <i>Code example Snippets <a href="https://beta.reactjs.org/learn/updating-objects-in-state#updating-a-nested-object" target="_blank" rel='noreferrer'>ReadMore ...</a></i>
            <center>
                - Treat all state in React as immutable. <br />
                <img src={require('./images/code2.png')} alt="ex2" style={{maxWidth: '350px'}}/> <br />
                - Objects are not really nested <br />
                <img src={require('./images/code3.png')} alt="ex2" style={{maxWidth: '350px'}}/> <br />
                <img src={require('./images/code4.png')} alt="ex2" style={{maxWidth: '350px'}}/> <br />
                <img src={require('./images/code5.png')} alt="ex2" style={{maxWidth: '350px'}}/>
                <img src={require('./images/code6.png')} alt="ex2" style={{maxWidth: '350px'}}/>
            </center>
            <hr />
        </section>
    )
}
// section 7
//sec7 example1 add to beg or end of an array using spread operator instead of push and unshift 
function AddToList() {
  let nextId = 0;
    //whether at the begining or at the end
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <b>add to beg or end of an array using **spread operator** (...array) instead of push and unshift:</b><br />
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        setName('');
        setArtists([
            //? if the added object is before the spread operator it will add to the begining
          ...artists,
          { id: nextId++, name: name }
        ]);
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
//sec7 example2 remove from an array with **filter** (slice is okay as well) instead of pop, shift and splice
function RemoveFromList(){
    let initialArtists = [
        { id: 0, name: 'Marta Colvin Andrade' },
        { id: 1, name: 'Lamidi Olonade Fakeye'},
        { id: 2, name: 'Louise Nevelson'},
    ];
    const [artists, setArtists] = useState(
        initialArtists
    );
      
    return (
          <>
            <b>remove from an array with **filter** (slice is okay as well) instead of pop, shift and splice:</b>
            <ul>
              {artists.map(artist => (
                <li key={artist.id}>
                  {artist.name}{' '}
                  <button onClick={() => {
                    setArtists(
                      artists.filter(a =>
                        a.id !== artist.id
                      )
                    );
                  }}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </>
    );
}
//sec7 example 3
function AddBetweenList(){
  let nextId = 3;
  const initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},
  ];
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(
    initialArtists
  );

  function handleClick() {
    const insertAt = 1; // Could be any index
    const nextArtists = [
      // Items before the insertion point:
      ...artists.slice(0, insertAt),
      // New item:
      { id: nextId++, name: name },
      // Items after the insertion point:
      ...artists.slice(insertAt)
    ];
    setArtists(nextArtists);
    setName('');
  }

  return (
    <>
      <b> insert an item at a particular position that’s neither at the beginning nor at the end **using slice()**:</b><br />
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleClick}>
        Insert
      </button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
//challenge1
const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    //! wrong way cuz it changes the original object uncomment to see the difference
    // const myList = [...products]
    // const targetedProduct = myList.find(p => p.id === productId)
    // targetedProduct.count++
    // setProducts(myList)
    //? correct way
    setProducts(products.map(p => {
      if(p.id === productId){
        // return a whole new object is the correct way
        return {
          id: p.id,
          name: p.name,
          count: p.count + 1
        }
        //* or use this syntax (**spread operation**)
        // return {
        //   ...p,
        //   count: p.count+1
        // }
      }else{
        return p
      }
    }))
  }

  return (
      <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
}
function UpdatingStateArrays(){
    return(
        <section>
            <b>Updating Arrays in State</b>
            <p>Arrays are mutable in JavaScript, but you should treat them as immutable when you store them in state. Just like with objects, when you want to update an array stored in state, you need to create a new one (or make a copy of an existing one), and then set state to use the new array.</p>
            <center>
                <img src={require("./images/explain1.png")} alt="immutating array methods" style={{maxWidth: '550px'}} />
            </center> <br />
            <AddToList />
            <hr />
            <RemoveFromList />
            <hr />
            <AddBetweenList />
            <hr />
            <i>Summury: </i>
            <ul>
                <li>You can put arrays into state, but you can't change them.</li>
                <li>Instead of mutating an array, create a new version of it, and update the state to it.</li>
                <li>You can use the [...arr, newItem] array spread syntax to create arrays with new items.</li>
                <li>You can use filter() and map() to create new arrays with filtered or transformed items.</li>
                <li>You can use Immer to keep your code concise.</li>
            </ul>  <hr />
            <i>Challenge 1</i><br />
            <ShoppingCart />
            <ShoppingCart />

        </section>
    )
}
// exporting all
export default function Rendering(){
    return (
        <section className="container">
            <RenderAndCommit />
            <StateAsSnapshot />
            <QueueingStates />
            <UpdatingStateObjects />
            <UpdatingStateArrays />
        </section>
    )
}

