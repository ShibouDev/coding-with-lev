import style from "../../styles/layout/Header.module.scss";
import { trackMusic } from "./data";
import {useDispatch} from "react-redux";
import { currentTrack } from "@/store/slices/playerSlice";
import {musTrack} from "./data";

const BlockLastTrackMusic = () => {
    const dispatch = useDispatch();
  
    return (
        <div className={style.wrapper_blockLastTrack_blockTrackMus_blockInTrackMus_MusicForPlayer}>
            {
                musTrack.map((track, index) => (
                    <ul key={index}>
                        <li className={style.wrapper_blockLastTrack_blockTrackMus_blockInTrackMus_MusicForPlayer_trackMus} >
                            <p>  {"0" + (index + 1)} </p>
                            <h3 onClick={()=> dispatch(currentTrack(index))}>{track}</h3> 
                        </li>
                    </ul>
                ))
            }
        </div>
    )
}

export default BlockLastTrackMusic;