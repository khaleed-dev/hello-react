export default function TextCard({text, color}){
    return (
        <div className='container card'>
            <p key={1} className={`${color}-p`}>{text}</p>
        </div>
    )
}