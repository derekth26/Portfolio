import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

function Photos() {
  return (
    <div id="photos" className="pt-2 pb-5 md:p-20 lg:p-70 xl:p-80 mb-20">
        <h3 className="text-center text-3xl pb-5 font-headings font-semibold">Photos</h3>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
          </div>
            <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img5} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img6} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img7} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img8} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img9} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <a href="https://www.imdb.com/title/tt1877830/mediaviewer/rm2783255553/?ref_=tt_mi_sm" className="text-2xl font-headings flex justify-end hover:text-lightgray transition duration-300 font-bold items-center">More Photos <ArrowForwardIosIcon /></a>
    </div>
  );
}

export default Photos;
