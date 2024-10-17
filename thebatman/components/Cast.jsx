import { useRef } from "react";
import rp from "../assets/rp.jpg";
import zk from "../assets/zk.jpg";
import jw from "../assets/jw.jpg";
import pd from "../assets/pd.jpg";
import as from "../assets/as.jpg";
import jl from "../assets/jl.jpg";
import jt from "../assets/jt.jpg";
import cf from "../assets/cf.jpg";
import sc from "../assets/sc.jpg";
import bk from "../assets/bk.jpg";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Cast() {
  const castData = [
    { img: rp, name: "Robert Pattinson", role: "Bruce Wayne/Batman" },
    { img: zk, name: "Zoey Kravitz", role: "Selina Kyle/Catwoman" },
    { img: jw, name: "Jeffery Wright", role: "Lt. James Gordon" },
    { img: pd, name: "Paul Dano", role: "The Riddler" },
    { img: as, name: "Andy Serkis", role: "Alfred" },
    { img: cf, name: "Colin Farrell", role: "Oz" },
    { img: jl, name: "Jayme Lawson", role: "Bella Reál" },
    { img: jt, name: "John Turturro", role: "Carmine Falcone" },
    { img: sc, name: "Peter Sarsgaard", role: "District Attorney Gil Colson" },
    { img: bk, name: "Barry Keoghan", role: "Unseen Arkham Prisoner" }
  ];

  const scrollRef = useRef(null);

  const smoothScroll = (distance) => {
    const element = scrollRef.current;
    const startPosition = element.scrollLeft;
    const targetPosition = startPosition + distance;
    const duration = 300; 

    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const easeInOutQuad = (t) =>
        t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // easing function

      const ease = easeInOutQuad(Math.min(progress / duration, 1));
      element.scrollLeft = startPosition + (targetPosition - startPosition) * ease;

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const scrollLeft = () => {
    smoothScroll(-300); // Scroll by -300 pixels
  };

  const scrollRight = () => {
    smoothScroll(300); // Scroll by 300 pixels
  };

  return (
    <div id="cast" className="relative pb-10">
      <h3 className="text-center text-3xl p-10 font-semibold">Main Cast</h3>

      {/* Scroll Buttons visible only on small screens */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full z-10 block md:hidden"
      >
        <ArrowBackIosIcon />
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full z-10 block md:hidden"
      >
        <ArrowForwardIosIcon />
      </button>

      {/* Cast Container: flex for small screens, grid for larger screens */}
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden gap-5 p-5 md:justify-center md:flex-wrap md:grid md:grid-cols-3 lg:grid-cols-5 scrollbar-hide"
      >
        {castData.map((cast, index) => (
          <div key={index} className="flex-shrink-0 flex flex-col items-center">
            <img src={cast.img} alt={`picture of ${cast.name}`} className="rounded-full w-40 h-40" />
            <h3 className="font-headings mt-3">{cast.name}</h3>
            <p className="text-gray font-p">{cast.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cast;
