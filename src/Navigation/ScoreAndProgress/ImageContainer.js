function ImageContainer(props){
    const imgSource = props.imgSource
    return (
      <div className='flex justify-center mt4 mb3 image'>
        <img src={imgSource} width='auto' height='auto'/>
      </div>   
    )
  }

  export default ImageContainer;