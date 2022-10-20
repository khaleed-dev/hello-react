export default function SharedBtn({count, onClick}){
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    )
}