import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Videos() {
    return (
      <div className="pb-20">
        <h3 className="pb-10 font-headings text-3xl font-bold text-center" >Videos</h3>
          <div id="videos" className="flex flex-wrap">
          
            <iframe
              className="w-1/2 aspect-video p-2"
              src="https://www.youtube.com/embed/b-GW7_e2aJA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
            <iframe
              className="w-1/2 aspect-video p-2"
              src="https://www.youtube.com/embed/NrJRE678TiU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
            <iframe
              className="w-1/2 aspect-video p-2"
              src="https://www.youtube.com/embed/NLOp_6uPccQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
            <iframe
              className="w-1/2 aspect-video p-2"
              src="https://www.youtube.com/embed/u34gHaRiBIU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
            <iframe
              className="w-1/2 aspect-video p-2"
              src="https://www.youtube.com/embed/__aTCuCURPo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
            <iframe
              className="w-1/2 aspect-video p-2"
              src="https://www.youtube.com/embed/r3Rw1h6xlmg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
          <a href="https://www.imdb.com/title/tt1877830/videogallery/" className="text-2xl font-headings flex justify-end hover:text-lightgray transition duration-300 font-bold items-center">More Videos <ArrowForwardIosIcon /></a>
      </div>
    );
  }
  
  export default Videos;
  