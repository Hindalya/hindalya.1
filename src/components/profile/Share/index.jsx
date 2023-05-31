import {PermMedia, Label, Room, EmojiEmotions} from "@mui/icons-material";
import axios from "axios";
import { useRef, useState } from "react";
import styles from "./share.module.css"
import Image from "next/image";

function Share() {
  const desc = useRef();
  const [file,setFile] = useState(null); 
  const user = {};

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.img = filename;
      console.log(newPost);
      try {
        await axios.post("/upload",data);
      } catch (error) {}
    }
    
    try {
      if(newPost.desc || newPost.img){
        await axios.post("/posts",newPost);
      window.location.reload();
    }
    } catch (error) {}
  };

  return (
    <div className={styles.share}>
      <div className={styles.shareWrapper}>
        <div className={styles.shareTop}>
            <Image
            height={50}
            width={50} 
            className={styles.shareProfileImg} 
            src={`/assets/person/1.jpeg`}
                alt=''
            />
            <input 
                placeholder = {"What's in your mind Ram ?"}
                className={styles.shareInput}
                ref={desc}
            />
        </div>
        <hr className={styles.shareHr}/>

        <form onSubmit={submitHandler} className={styles.sharebutton}>
            <label htmlFor="file" className={styles.shareOptions}>
            <PermMedia htmlColor="tomato" className={styles.shareIcon}/>
                <span className={styles.ShareOptionText}>Photo or Video</span>
                <input 
                style={{display:"none"}}
                type={"file"}
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) =>{setFile(e.target.files[0])}}
                />
            </label>
            <div className={styles.shareOptions}>
            <Label htmlColor="blue" className={styles.shareIcon}/>
                <span className={styles.ShareOptionText}>Tag</span>
            </div>
            <div className={styles.shareOptions}>
            <Room htmlColor="green" className={styles.shareIcon}/>
                <span className="ShareOptionText">Location</span>
            </div>
            <div className={styles.shareOptions}>
            <EmojiEmotions htmlColor="goldenrod" className={styles.shareIcon}/>
                <span className={styles.ShareOptionText}>Feelings</span>
            </div>
            <button type="submit" className={styles.shareButton}>Share</button>
        </form>
      </div>
    </div>
  );
}

export default Share
