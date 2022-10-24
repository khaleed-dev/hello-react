import { people, recipes } from './data'
import { getImageUrl } from './utils.jsx'
import { Fragment } from 'react'

export function ScientistList(){
    const everyoneElse  = people.filter(scientist => scientist.profession !== 'chemist').map(scientist => {
        return (<li key={scientist.id}>
            <img
                src={getImageUrl(scientist.imageId)}
                alt={scientist.name}
            />
            <p>
                <b>{scientist.name}:</b>
                {' ' + scientist.profession + ' '}
                known for {scientist.accomplishment}
            </p>
        </li>)
    })
    const chemists = people.filter(scientist => scientist.profession === 'chemist').map(scientist => {
        return (<li key={scientist.id}>
            <img
                src={getImageUrl(scientist.imageId)}
                alt={scientist.name}
            />
            <p>
                <b>{scientist.name}:</b>
                {' ' + scientist.profession + ' '}
                known for {scientist.accomplishment}
            </p>
        </li>)})
    return (
        <section>
            <h2>Ex3: Filter Scientists (using filter & map with Keys)</h2>
            <h4>Chemists: </h4>
            <ul>{chemists}</ul>
            <h4>Everyone Else:</h4>
            <ul>{everyoneElse}</ul>
        </section>
    )
}

export function RecipesList(){
    return (
        <section>
            <h1>Example 3-2: filtering Recipes</h1>
            {recipes.map(recipe => 
                <div key={recipe.id}>
                    <h3>{recipe.name}</h3>
                    <ul>
                        {recipe.ingredients.map(ingredient => 
                            <li key={ingredient}>{ingredient}</li>
                        )}
                    </ul>
                </div>   
            )}
        </section>
    )
}

// simplifing the nested maps from the previous example into this:
function Recipe({id, name, ingredients}){
    const liIngredients = ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)
    return (
        <div>
            <h3>{name}</h3>
            <ul>
                {liIngredients}
            </ul>
        </div>
    )
}
export function RecipesListSimplified(){
    return (
        <section>
            <h1>Example 3-3: filtering Recipes (programmed differently)</h1>
            {recipes.map(recipe => 
                <Recipe {...recipe} key={recipe.id}/>
                // <Recipe 
                // id={'greek-salad'}
                // name={'Greek Salad'}
                // ingredients={['tomatoes', 'cucumber', 'onion', 'olives', 'feta']}/>
                // <Recipe 
                // id={'hawaiian-pizza'}
                // name={'Hawaiian Pizza'}
                // ingredients={['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']}/>
                // <Recipe 
                // id={'hummus'}
                // name={'Hummus'}
                // ingredients={['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']}/>
            )}
        </section>
    )
}

const poem = {
    lines: [
      'I write, erase, rewrite',
      'Erase again, and then',
      'A poppy blooms.'
    ]
  };

export function Poem() {
    return (
        <article>
        {poem.lines.map((line, index) =>
        <Fragment key={index}>
            {index > 0 && <hr />}
            <p >{line}</p>
        </Fragment>
        )}
        </article>
    );
}