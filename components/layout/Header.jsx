import styles from "../../styles/layout/Header.module.scss";
import Image from "next/image";
import BlockPost from "./BlockPost";
import BlockDiscr from "./BlockDiscr";
import BlockLastTrack from "./BlockLastTrack";
import ArticleMTV from "./ArticleMTV";

const Header = () => {
  const Nav = ["About", "News", "Music", "Media", "Tours", "Contacts"];

  return (
    <div className={styles.wrapper}>
      <Image
        src={"/img/bg.png"}
        alt="back"
        layout="fill"
        className={styles.wrapper_container_backMain}
      />
      <div className={styles.wrapper_container}>
        <ul className={styles.wrapper_container_nav}>
          <div className={styles.wrapper_container_nav_logoWrap}>
            <Image
              src={"/img/logo.png"}
              width={60}
              height={60}
              alt="logo"
              className={styles.wrapper_container_nav_logoWrap_logo}
            />
            <Image
              src={"/img/nameLogo.png"}
              width={143}
              height={42}
              alt="nameLogo"
              className={styles.wrapper_container_nav_logoWrap_logoName}
            />
          </div>
          <div className={styles.wrapper_container_nav_liEl}>
            {Nav.map((nav, index) => (
              <li key={index}>{nav}</li>
            ))}
          </div>
        </ul>
        <div className={styles.wrapper_container_textContainer}>
          <h2 className={styles.wrapper_container_textContainer_NewSingle}>New Signle</h2>
          <h2 className={styles.wrapper_container_textContainer_WFL}>War For Love</h2>
        </div>
        {/* <audio controls="controls" className={styles.wrapper_container_audioPlayer}>
          <source src="track.ogg" type="audio/ogg" />
          <source src="track.mp3" type="audio/mpeg" />
        </audio> */}
        <BlockPost />
        <BlockDiscr />
        <ArticleMTV/>
        <BlockLastTrack/>
      </div>
    </div>
  );
};
export default Header;
