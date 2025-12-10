import React from "react";
import cx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ChevronRightRounded from "@material-ui/icons/ChevronRightRounded";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useWideCardMediaStyles } from "@mui-treasury/styles/cardMedia/wide";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import { useBouncyShadowStyles } from "@mui-treasury/styles/shadow/bouncy";
import styles1 from "../style-lg"
import img from "../assets/PAS.jpg"


export const NewsCardDemo = React.memo(function NewsCard() {
  const styles = styles1();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();

  function click (){ 
    window.location.href = `/PAS`;
   };
   
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        classes={mediaStyles}
        image={img}
      />
      
      <CardContent className={styles.content}>
        
        <TextInfoContent
          classes={textCardContentStyles}
          //overline={"March 20, 2019"}
          heading={"Payment Approval System (PAS)"}
          body={
            "Customized Work-flow solution for tracking Projects and Expenses."
          }
        />
        <Button color={"primary"} fullWidth className={styles.cta} onClick={click}>
          Find Out More <ChevronRightRounded />
        </Button>
      </CardContent>
      
    </Card>
  );
});

export default NewsCardDemo;
