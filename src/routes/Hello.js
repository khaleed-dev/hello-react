import { useState } from 'react';
import User from '../components/Hello/Ex-0'
import List from '../components/Hello/Ex-1'
import Button from '../components/Hello/Ex-2'
import CounterBtn from '../components/Hello/Ex-3-Hooks(useState)'
import SharedBtn from '../components/Hello/Ex-4-SharedBtn'

export default function Hello() {
    const [sharedcount, setSharedCount] = useState(0);
    function handleClick() {
      setSharedCount(sharedcount + 1);
    }
  
    return (
      <div className='container'>
        <h1>Hello From React! 👋 </h1>
        <p>This website is me learning how to use React using <a href="https://beta.reactjs.org/learn">React Beta Documentation</a></p>
        <User />
        <List />
        <Button />
        <p>These Buttons have <b>seperate</b> count values</p>
        <CounterBtn />
        <CounterBtn />
        <p>While these Buttons have <b>common</b> count values</p>
        <SharedBtn count={sharedcount} onClick={handleClick}/>
        <SharedBtn count={sharedcount} onClick={handleClick}/>
  
      </div>
    );
  }