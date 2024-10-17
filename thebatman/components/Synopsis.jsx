
import synopsis from "../assets/synopsis.jpg"

function Synopsis() {
  

    return (

      <div id="synopsis" className="synopsis flex flex-col items-center md:flex p-10 ">

        <img src={synopsis} alt="batman picture" className="sm:w-20 md:w-40"/>
        

        <div className="flex flex-col items-center text-black w-80 ">
          <h2 className="pb-10 font-headings text-3xl font-bold" >Synopsis</h2>
          <p className="text-center  font-p">Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues. As the scale of the perpetrator's plans become clear, he must bring justice to the abuse of power and corruption that plagues the metropolis.</p>
        </div>

          

        

      

     


      </div>
      
    )
  }
  
  export default Synopsis