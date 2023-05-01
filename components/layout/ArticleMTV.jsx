import styles from "../../styles/layout/Header.module.scss";
import Image from "next/image";
import { articleText } from "./data";

const ArticleMTV = () => {
    return (
        <div className={styles.wrapper_blockArticleMTV}>
            <div className={styles.wrapper_blockArticleMTV_blockMainArticle}>
                <Image 
                    className={styles.wrapper_blockArticleMTV_blockMainArticle_imgArticle}
                    src={"/img/Article.png"}
                    width={370}
                    height={483}
                    alt="Article"/>
                <div className={styles.wrapper_blockArticleMTV_blockMainArticle_borderFoText}>
                    <div className={styles.wrapper_blockArticleMTV_blockMainArticle_borderFoText_blockText}>
                        <div className={styles.wrapper_blockArticleMTV_blockMainArticle_borderFoText_blockText_text}>
                            <h1>{articleText}</h1>
                        </div>
                        <h2>PopULove.net</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleMTV;