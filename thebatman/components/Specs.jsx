
import specs from "../assets/specs.jpg"

function Specs() {
  

    return (


    <div id="specs" className="flex bg-black justify-between text-white items-end mb-20">



        <div className="p-20">
            <h3 className="text-3xl pb-10 font-headings font-bold">Details</h3>
            <div className="pb-10">
            
            <h4 className="font-headings text-xl font-semibold">Release date</h4>
            <p className="font-p">March 4, 2022 (Canada)</p>
            <h4 className="font-headings text-xl font-semibold">Country of origin</h4>
            <p className="font-p">United States</p>
            <h4 className="font-headings text-xl font-semibold">Languages</h4>
            <p className="font-p">English Spanish Latin Italian</p>
            <h4 className="font-headings text-xl font-semibold">Also known as</h4>
            <p className="font-p">Le Batman</p>
            </div>
            <div className="pb-10">
            <h3  className="font-headings text-3xl font-bold pb-3 ">Box office</h3>
            <h4 className="font-headings text-xl font-semibold">Budget</h4>
            <p className="font-p">$185,000,000 (estimated)</p>
            <h4 className="font-headings text-xl font-semibold">Gross US & Canada</h4>
            <p className="font-p">$369,345,583</p>
            <h4 className="font-headings text-xl font-semibold">Opening weekend US & Canada</h4>
            <p className="font-p">$134,008,624Mar 6, 2022</p>
            <h4 className="font-headings text-xl font-semibold">Gross worldwide</h4>
            <p className="font-p">$772,272,279</p>
            </div>
            <div>
                <h3 className="font-headings text-3xl font-bold pb-3">Technical specs</h3>
                <h4 className="font-headings text-xl font-semibold">Runtime</h4>
                <p className="font-p">2 hours 56 minutes</p>
                <h4 className="font-headings text-xl font-semibold">Color</h4>
                <p className="font-p">Color</p>
                <h4 className="font-headings text-xl font-semibold">Sound mix</h4>
                <p className="font-p">Sonics-DDPIMAX 6-TrackDolby DigitalDolby AtmosDolby Surround 7.112-Track Digital SoundAuro 11.1</p>
                <h4 className="font-headings text-xl font-semibold">Aspect ratio</h4>
                <p className="font-p">2.39 : 1</p>
            </div>
        </div>

        <div>
            <img src={specs} alt="picture of the riddler" className="sm:hidden md:block lg:block" />
        </div>
    </div>




    
      
    )
  }
  
  export default Specs