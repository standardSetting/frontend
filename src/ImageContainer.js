function ImageContainer(props){
    const imgSource = props.imgSource
    return (
      <div className='flex justify-center mt4'>
        <img src={imgSource} width='auto' height='auto'/>
      </div>   
    )
  }

  export default ImageContainer;