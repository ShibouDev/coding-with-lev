import style from "../../styles/layout/Header.module.scss";
import Image from "next/image";
import { blocksIMG } from "./data";
const BlockPost = () => {
  return (
    <div className={style.wrapper_block_post_all}>
      {blocksIMG.map((block, index) => (
        <div key={index} className={style.wrapper_block_post_all_blockPost}>
          <Image src={block.img} width={350} height={300} alt="block" />
          <div
            className={
              style.wrapper_block_post_all_blockPost_blockPostIMG_blockBlueText
            }
          >
            <span
              className={
                style.wrapper_block_post_all_blockPost_blockPostIMG_blockBlueText_blockText
              }
            >
              {block.text}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlockPost;
