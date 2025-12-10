
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    root: {
      width: 300,
      margin: "auto",
      boxShadow: "none",
      borderRadius: 30
    },
    content: {
      padding: 24
    },
    cta: {
      marginTop: 24,
      textTransform: "initial"
    }
  }));

  export default useStyles;