import mr from "../assets/matt.jpg"
import gf from "../assets/gf.jpg"

function Director() {
  

    return (

        <div id="crew" className="text-center pt-20">
            <h3 className="text-3xl font-semibold">Director + Cinematographer</h3>
            
                  <div className="flex justify-center gap-5 p-10">
            <div className="flex flex-col items-center">
                    <img src={mr} alt=" picture of Matt Reaves" className=" rounded-full w-40 h-40"/>
                    <h3 className="font-headings">Matt Reaves</h3>
                    <p className="text-gray font-p">Director</p>
            </div>
            <div className="flex flex-col items-center">
                    <img src={gf} alt=" picture of Greig Fraser" className=" rounded-full w-40 h-40"/>
                    <h3 className="font-headings">Greig Fraser</h3>
                    <p className="text-gray font-p">Cinematographer</p>
            </div>
                
                  </div>
        </div>
      
    )
  }
  
  export default Director