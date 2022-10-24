import TextCard from '../components/ReactUI/TextCard'
import PropsExample from '../components/ReactUI/PropsExample'
import CondionalExample from '../components/ReactUI/CondionalExample'
import {ScientistList, RecipesList, RecipesListSimplified, Poem } from '../components/ReactUI/RenderingListsExample'
import PureComponent from '../components/ReactUI/PureComponents'

export default function ReactUI(){
    return (
        <>
            <TextCard color={'green'} text={[`
                React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images. React lets you combine them into reusable, nestable components. From web sites to phone apps, everything on the screen can be broken down into components. In this chapter, you'll learn to create, customize, and conditionally display React components.`, <a key={1} href='https://beta.reactjs.org/learn/describing-the-ui'target={'_blank'}rel="noreferrer"> ReadMore...</a>]}/>
            
            <TextCard color={'blue'} text={[
                <i key={2}><b>Components: </b></i>,`React applications are built from isolated pieces of UI called components. A React component is a JavaScript function that you can sprinkle with markup. Components can be as small as a button, or as large as an entire page. `
            ]}/>
            <TextCard color={'green'} text={[
                <i key={3}><b>Props: </b></i>,`React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, functions, and even JSX! `
            ]}/>
            <TextCard color={'blue'} text={[
                <i key={4}><b>Conditional rendering: </b></i>,`Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators. `
            ]}/>
            <TextCard color={'green'} text={[
                <i key={5}><b>Rendering lists: </b></i>,`You will often want to display multiple similar components from a collection of data. You can use JavaScript's filter() and map() with React to filter and transform your array of data into an array of components. For each array item, you will need to specify a key. Usually, you will want to use an ID from the database as a key. Keys let React keep track of each item's place in the list even if the list changes. `
            ]}/>
            <hr></hr>
            <div className="container">
                <h1>Some Examples:</h1>
                <PropsExample />
                <hr></hr>
                <CondionalExample />
                <hr></hr>
                <ScientistList />
                <RecipesList />
                <RecipesListSimplified />
                <Poem />
            </div>
            <hr></hr>
            <PureComponent />

        </>
        
    )
}
