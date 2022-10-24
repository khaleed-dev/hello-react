
function ExampleHeader({number, header, content}){
    return <div><h1>Example {number}: {header}</h1><p>{content}</p></div>
}

function Button({onClick, children}){
    return <button onClick={onClick}>{children}</button>
}

function Toolbar({onPlayMovie, onUploadImage}){
    return(
        <div>
            <Button onClick={onPlayMovie}>
                Play Movie
            </Button>
            <Button onClick={onUploadImage}>
                Upload Image
            </Button>
            
        </div>
    )
}


export default function ReactEvents(){
    return (
        <div className="container">
        <ExampleHeader number={1} header={'Adding Interactivity'}
        content={"Some things on the screen update in response to user input. For example, clicking an image gallery switches the active image. In React, data that changes over time is called state. You can add state to any component, and update it as needed. In this chapter, you'll learn how to write components that handle interactions, update their state, and display different output over time."}/>
        
        <Toolbar onPlayMovie={() => {alert('Playing Movie')}}
                onUploadImage={() => {alert('Uploading Image')}}/>
        
        </div>

    )
}
