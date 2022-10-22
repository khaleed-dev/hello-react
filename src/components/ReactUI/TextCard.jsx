export default function TextCard({text, color}){
    return (
        <div className='container card'>
            <p className={`${color}-p`}>{text}</p>
        </div>
    )
}