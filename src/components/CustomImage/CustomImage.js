import "./styles.scss"

const CustomImage = ({imageSrc, pt}) => {

  return(
    <div className="custom-image" style={{paddingTop:pt}}>
      <img src={imageSrc} alt="" />
    </div>
  )
}

export default CustomImage