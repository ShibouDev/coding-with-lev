import { musTrack } from "./layout/data/index";
import {useState,useEffect,useRef} from "react";
import { useSelector } from "react-redux";

const PlayerMus = () => {

    const currentTrack = useSelector((state) => state.player.index)
    const[songs, setSongs] = useState(musTrack);
    const[count,setCount] = useState(0);
    const[nextTrack, setNextTrack] = useState(songs);
    const[isPlaying, setIsPlaying] = useState(false);
    const audioElem = useRef()

    console.log(currentTrack)
    
    const next = () => {
        setIsPlaying(false)
        console.log()
        if ((count + 1) < songs.length) {
            console.log("not more")
            // setCount(count + 1)
            setNextTrack(songs[currentTrack + 1])
            // console.log("+ 1")
        }

        else {
            console.log("0")
            // setCount(0);
            setNextTrack(songs[currentTrack])
        }
        audioElem.current.currentTime = 0;
    }

    const PlayPause = () => 
    {
        if(!isPlaying) {
            audioElem.current.play();
        }
        else{
            audioElem.current.pause();
        }
        setIsPlaying(prev => !prev)
        console.log(isPlaying)
    }

    useEffect(() => {
        // console.log(nextTrack)
    },[count])

    return(
        <div>
            <audio controls src={nextTrack[currentTrack]} ref={audioElem}/>
            <button onClick={next}>Next</button>
            <button onClick={PlayPause}>Play</button>

        </div>
    )
}

export default PlayerMus;