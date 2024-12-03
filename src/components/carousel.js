import Card from "./Card";
import "./carousel.css"
const Carousel = () => {
  return( <div
    id="carouselExampleControlsNoTouching"
    className="carousel slide"
    data-bs-touch="false" 
    data-bs-wrap="false" 
  >
    <div className="carousel-inner col-2 ">
      <div className="carousel-item active">
        <Card name="card 1" />
      </div>
      <div className="carousel-item">
        <Card name="card 2" />
      </div>
      <div className="carousel-item">
        <Card name="card 3" />
      </div>
      <div className="carousel-item">
        <Card name="card 4" />
      </div>
      <div className="carousel-item">
        <Card name="card 5" />
      </div>
      <div className="carousel-item">
        <Card name="card 6" />
      </div>
    </div>

    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControlsNoTouching"
      data-bs-slide="prev"
      style={{backgroundColor:"rgba(0,0,0,0)",borderRadius:"50%"}}
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
      

    </button>

    
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControlsNoTouching"
      data-bs-slide="next"
      style={{backgroundColor:"rgba(0,0,0,0)",borderRadius:"50%"}}

    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>)
};

export default Carousel;
