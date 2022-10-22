// This Gallery component contains some very similar markup for two profiles. Extract a Profile component out of it to reduce the duplication. You’ll need to choose what props to pass to it.

import { getImageUrl } from './utils.jsx';

function Profile({scientist, imgUrl}){
    return (
      <section>
        <h3>{scientist.name}</h3>
        <img
          className="avatar"
          src={imgUrl}
          alt={scientist.name}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {scientist.profession}
          </li>
          <li>
            <b>Awards: {scientist.awards.length} </b> 
            <ol>
                {scientist.awards.map(award => (
                    <li key={award}>{award}</li>
                ))}
            </ol>
          </li>
          <li>
            <b>Discovered: </b>
            {scientist.discovered}
          </li>
        </ul>
      </section>
    )
}

export default function Gallery() {
    return (
        <>
          <h2>Ex1: Notable Scientists (Passing Props to a component)</h2>
          <Profile scientist={{name: 'Maria Skłodowska-Curie',profession: 'physicist and chemist',discovered: 'polonium (element)', awards: ['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal']}} imgUrl={getImageUrl('szV5sdG')}/>

          <Profile scientist={{name: 'Katsuko Saruhashi',profession: 'geochemist',discovered: 'a method for measuring carbon dioxide in seawater', awards: ['Miyake Prize for geochemistry', 'Tanaka Prize']}} imgUrl={getImageUrl('YfeOqp2')}/>
        </>
    )
}