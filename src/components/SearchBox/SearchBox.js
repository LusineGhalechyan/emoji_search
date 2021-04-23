import styles from "./SearchBox.module.scss";
import TextField from "@material-ui/core/TextField";

const SearchBox = (props) => {
  const { onChange } = props;

  return (
    <form className={styles.searchBoxContainer} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="Search Your Emoji"
        onChange={onChange}
        className={styles.searchBoxTextField}
      />
    </form>
  );
};

export default SearchBox;
