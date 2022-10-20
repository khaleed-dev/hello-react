// useState

/*
    ? Updating the screen 
    * Often, you’ll want your component to “remember” some information and display it. For example, maybe you want to count the number of times a button is clicked. To do this, add state to your component.

    * You will get two things from useState: the current state (count), and the function that lets you update it (setCount). You can give them any names, but the convention is to call them like [something, setSomething].

    * The first time the button is displayed, count will be 0 because you passed 0 to useState(). When you want to change state, call setCount() and pass the new value to it. Clicking this button will increment the counter:

    * Functions starting with use are called Hooks. useState is a built-in Hook provided by React. You can find other built-in Hooks in the React API reference. You can also write your own Hooks by combining the existing ones.

    * Hooks are more restrictive than regular functions. You can only call Hooks at the top level of your components (or other Hooks). If you want to use useState in a condition or a loop, extract a new component and put it there.
*/

import { useState } from 'react';

export default function MyButton(){
    const [count, setCount] = useState(0)

    function handleClick(){
        setCount(count + 1)
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    )
}