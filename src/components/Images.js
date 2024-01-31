import one from "../assets/images/img1.avif"
import two from "../assets/images/img2.jpg"
import three from "../assets/images/img3.jpg"

function Images(){
    return (
    
      <div className="parent">
      <div className="box">
        <img
          src={one}
          alt="img 1" style={{ height :"220px", width : "220px" }} />
        <p>Dolce and Gabbana perfumes in India will make you realize what you have been missing out on.</p>
      </div>
      <div className="box">
        <img src={two} alt="img 2" height="220px" width="220px" />
        <p>Dolce and Gabbana perfumes in India are the keys with which you can unlock the door</p>
      </div>
      <div className="box">
        <img src={three} alt="img 3" height="220px" width="220px" />
        <p>The Dolce and Gabbana men's Pour Homme perfume, an eclectic mix of the essence musk, ETC.</p>
      </div>
    </div>
    
    )
  }

  export default Images