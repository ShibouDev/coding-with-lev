import style from "../../styles/layout/Header.module.scss";
import Image from "next/image";
import BlockLastTrackMusic from "./BlockLastTrackMusic";
import PlayerMus from "../PlayerMus";
import { subPlatform } from "./data";

const BlockLastTrack = () => {
  return (
    <div className={style.wrapper_blockLastTrack}>
      <div className={style.wrapper_blockLastTrack_blockCircle}>
        <figure className={style.wrapper_blockLastTrack_blockCircle_fCircle}>
          <figure className={style.wrapper_blockLastTrack_blockCircle_fCircle_sCircle}>
              <Image src={"/img/CrBlockTrack.png"}
                // className={style.wrapper_blockLastTrack_blockCircle_fCircle_sCircle_imgInCircle}
                width={435}
                height={435}
                alt="CrTrack"/>
          </figure>
        </figure>
      </div>
      <div className={style.wrapper_blockLastTrack_blockTrackMus}>
        <div className={style.wrapper_blockLastTrack_blockTrackMus_blockInTrackMus}>
          <div className={style.wrapper_blockLastTrack_blockTrackMus_blockInTrackMus_blockTitleTrack}>
            <Image src={"./img/BussMus.svg"}
              width={64}
              height={31}/>
            <h1 className={style.wrapper_blockLastTrack_blockTrackMus_blockInTrackMus_blockTitleTrack_titleLastTrack}>Last tracks</h1>
          </div>
          <div className={style.wrapper_blockLastTrack_blockTrackMus_blockInTrackMus_blockMusPlaer}>
            <PlayerMus/>
          </div>
          <BlockLastTrackMusic/>
          <div className={style.wrapper_blockLastTrack_blockTrackMus_blockInTrackMus_footerMus}>
            <h1 className={style.wrapper_blockLastTrack_blockTrackMus_blockInTrackMus_footerMus_title}>Follow me:</h1>
            {subPlatform.map((pl,index) => (
              <ul key={index} className={style.wrapper_blockLastTrack_blockTrackMus_blockInTrackMus_footerMus_blockIcon} >
                <Image 
                  className={style.wrapper_blockLastTrack_blockTrackMus_blockInTrackMus_footerMus_blockIcon_img}
                  src={pl.img}
                  width={30}
                  height={30}/>
                <p className={style.wrapper_blockLastTrack_blockTrackMus_blockInTrackMus_footerMus_blockIcon_text}> {pl.text}</p>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockLastTrack;
