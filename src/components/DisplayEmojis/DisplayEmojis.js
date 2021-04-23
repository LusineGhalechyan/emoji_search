import { useState } from "react";
import styles from "./DisplayEmojis.module.scss";
import { useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SearchBox from "../SearchBox/SearchBox";

const DisplayEmojis = () => {
  const [search, setSearch] = useState("");
  const emojiState = useSelector((state) => state.emojis);
  const [copied, setCopied] = useState({ copied: !null });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <SearchBox onChange={handleChange} />
      {emojiState
        .filter((emoji) => {
          // console.log("emoji_START", emoji);
          if (search === "") return emoji;
          if (emoji.description.toLowerCase().includes(search.toLowerCase()))
            return emoji;
        })
        .map((emoji) => (
          <CopyToClipboard
            key={emoji.id}
            text={emoji.emoji}
            onCopy={() => {
              setCopied({ ...copied, copied: true });
            }}
          >
            <div className={styles.displayEmojisContainer} key={emoji.id}>
              <div className={styles.emojiContainer}>
                <span className={styles.displayEmojis}>{emoji.emoji}</span>
                <span>{emoji.description}</span>
                <p className={styles.displayEmojisInnerText}>
                  Click to copy emoji
                </p>
              </div>
            </div>
          </CopyToClipboard>
        ))}
    </>
  );
};

export default DisplayEmojis;
