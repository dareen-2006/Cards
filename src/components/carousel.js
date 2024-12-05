import Card from "./Card";
import "./carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Carousel = () => {
  return (
    <div
      id="carouselExampleControlsNoTouching"
      className="carousel slide"
      data-bs-touch="true"
      data-bs-wrap="true"
    >
      <div className="carousel-item active">
        <div className="d-flex justify-content-center">
          <Card name="card 1" />
          <Card name="card 2" />
          <Card name="card 3" />
          <Card name="card 4" />
          <Card name="card 5" />
        </div>
      </div>

      <div className="carousel-item">
        <div className="d-flex justify-content-center">
          <Card name="card 6" />
          <Card name="card 7" />
          <Card name="card 8" />
        </div>
      </div>

      <div className="carousel-item">
        <div className="d-flex justify-content-center">
          <Card name="card 9" />
          <Card name="card 10" />
          <Card name="card 11" />
        </div>
      </div>

      <div className="carousel-item">
        <div className="d-flex justify-content-center">
          <Card name="card 12" />
          <Card name="card 13" />
          <Card name="card 14" />
        </div>
      </div>

      <div className="carousel-item">
        <div className="d-flex justify-content-center">
          <Card name="card 15" />
          <Card name="card 16" />
          <Card name="card 17" />
        </div>
      </div>

      <button
        className="carousel-control-prev btn-dark"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="false"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="false"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
