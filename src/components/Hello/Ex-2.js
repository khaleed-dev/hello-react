export default function MyButton(){
    function handleClick(){
        alert('You Clicked Me!')
    }
    return (
        <button onClick={handleClick}>
            Click
        </button>
    )
}