const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90
};

export default function Ex0(){
    return (
      <>
        <h3>{user.name}</h3>
        <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
        width: user.imageSize,
        height: user.imageSize,
        borderRadius: '50%'
        }}
        />
      </>
    )
} 