
import Bannerimg2 from "../assets/batmanlogo.png"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Banner() {
    const handleClick = () => {
        window.open("https://www.youtube.com/watch?v=mqqft2x_Aa4", "_blank");
    }


    return (

      <div className="banner flex justify-center items-center flex-col p-10">
        
        <img src={Bannerimg2} alt="batman word logo" className="sm:w-70 h-40 mt-20 md:h-60" />
        <button class="transition ease-in-out delay-150 bg-transparent text-white hover:-translate-y-1 hover:scale-90 duration-300 rounded-4xl border border-white w-30 p-3 mt-5 font-headings font-bold text-xl" onClick={handleClick}>
         Watch Trailer
        </button>

        <div className="flex flex-col items-center justify-center">
            <h2 className="text-white sm:pt-10 xl:mt-20 font-p text-xl">Scroll Down For More</h2>
            <KeyboardArrowDownIcon className="text-white animate-bounce"></KeyboardArrowDownIcon>
        </div>

        

        
      </div>
      
    )
  }
  
  export default Banner