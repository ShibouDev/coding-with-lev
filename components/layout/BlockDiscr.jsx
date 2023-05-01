import styles from "../../styles/layout/Header.module.scss";
import Image from "next/image";
import { aboutUsDisAuthor } from "./data";
const BlockDiscr = () => {
    const DiscrtText = () => {
        return(
            <span className={styles.wrapper_blockDiscrStyle_blockTextUs_blockDisText_styleText}>
                Bright Lights is a multi-Grammy nominated singer, songwriter, DJ
                and record producer. She has written for numerous
                <br/>
                <br/>
                pop stars including Britney Spears, Justin Bieber, Usher and
                Beyoncé. Her catalog has amassed over 1 billion streams
                worldwide. More than 100 million of those streams can be
                attributed to her artist career and include such hits as Porter
                Robinson's  "Language," 3LAU's "How You Love Me" and her own
                single "Runaway." She was also a featured vocalist on Zedd's #1
                Clarity album. Her latest music video, "Put It Down," reached 1 million
                streams in the first week, releasing independently. Bright Lights 
                currently in the studio working on a self-produced album slated for
                release in 2020.
            </span>
        )
    } 
    return(
        <div className={styles.wrapper_blockDiscrStyle}>
            <div className={styles.wrapper_blockDiscrStyle_blockTextUs}>
                <Image src={"./img/BussMus.svg"}
                    className={styles.wrapper_blockDiscrStyle_blockTextUs_imgBuss}
                    width={64}
                    height={31}
                />
                <h1 className={styles.wrapper_blockDiscrStyle_blockTextUs_BrLi}>Bright Lights</h1>
                <div className={styles.wrapper_blockDiscrStyle_blockTextUs_blockDisText}>
                    <DiscrtText/>
                    <div>
                        {aboutUsDisAuthor.map((author,index) => (
                            <div key={index} className={styles.wrapper_blockDiscrStyle_blockTextUs_blockForpersonDis}>
                            <Image src={"./img/blockDis.svg"}
                                className={styles.wrapper_blockDiscrStyle_blockTextUs_blockForpersonDis_blockImgDis}
                                width={30}
                                height={30}/>
                                <h1 className={styles.wrapper_blockDiscrStyle_blockTextUs_blockForpersonDis_blocktextAuthor}>{author}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.wrapper_blockDiscrStyle_blockIMGtwoPhoto}>
                <Image
                    className={styles.wrapper_blockDiscrStyle_blockIMGtwoPhoto_about1}
                    src={"/img/about1.png"}
                    width={350}
                    height={400}
                    alt="about1"/>
                <Image 
                    className={styles.wrapper_blockDiscrStyle_blockIMGtwoPhoto_about2}
                    src={"/img/photo_about2.png"}
                    width={350}
                    height={400}
                    alt="about2"/>
            </div>
        </div>
    )
}

export default BlockDiscr;