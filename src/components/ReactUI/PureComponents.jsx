function Text(){
    return (
        <section className="container">
            <h1>Keeping Components Pure</h1>
            <p>Some JavaScript functions are pure. Pure functions only perform a calculation and nothing more. By strictly only writing your components as pure functions, you can avoid an entire class of baffling bugs and unpredictable behavior as your codebase grows. To get these benefits, though, there are a few rules you must follow.</p>
            <ul>
                <li>It minds its own business. It does not change any objects or variables that existed before it was called.</li>
                <li>Same inputs, same output. Given the same inputs, a pure function should always return the same result.</li>
            </ul>
            <b><a href="https://beta.reactjs.org/learn/keeping-components-pure" target="_blank" rel="noreferrer">Read more</a></b>
        </section>
        
    )
}
export default function PureComponent(){
    return (
        <Text />
    )
}