import styles from "./Heading.module.scss";

const Heading = () => {
  return (
    <div className={styles.headerContainer}>
      <a
        href="https://github.com/LusineGhalechyan/emoji_search"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="stripForkMeOnGithub"
          src="assets/stripForkMeOnGithub.png"
          className={styles.stripForkMeOnGithub}
        />
      </a>

      <img alt="dog" src="assets/dog.png" className={styles.headerEmoji} />
      <p className={styles.headerParagraph}>Emoji Search</p>
      <img alt="cat" src="assets/cat.png" className={styles.headerEmoji} />
    </div>
  );
};

export default Heading;
