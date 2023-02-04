import "./Featured.scss" 
import background from "../component_images/wallpaper_background.jpg"
import matrix_img from "../component_images/Matrix.png"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


export default function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type = "movie" ? "Movies":"Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>

            </div>
        )}
        <img src={background} alt=""></img>
        <div className="info">
            <img src={matrix_img} alt=""></img>
            <span className="desc">
                Some text for now. 
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrowIcon></PlayArrowIcon>
                    <span>Play</span>
                </button>
                <button className="moreInfo">
                    <InfoOutlinedIcon></InfoOutlinedIcon>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}
