import "./styles.css";
import { v4 as uuidv4 } from "uuid";
import Carroussel from "./Carroussel";
import Digicat from "./Products/Digicat"
import Giftcard from "./Products/Giftcard"
import Magenta from "./Products/Magenta"
import Magna from "./Products/Magna"
import PAS from "./Products/PAS"
import Tryon from "./Products/Tryon"
import Vrudhi from "./Products/Vrudhi"

export default function App() {
  let cards = [
    // {
    //   key: uuidv4(),
    //   content: <Magna />
    // },
    {
      key: uuidv4(),
      content: <Magenta />
    },
    {
      key: uuidv4(),
      content: <Digicat />
    },
    {
      key: uuidv4(),
      content: <Vrudhi />
    },
    {
      key: uuidv4(),
      content: <PAS />
    },
    {
      key: uuidv4(),
      content: <Giftcard />
    },
    {
      key: uuidv4(),
      content: <Tryon />
    }
  ]; 
  /*.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });*/

  return (
    <div className="App">
      <div className="big">
        <Carroussel
          cards={cards}
          height="500px"
          width="80%"
          margin="0 auto"
          offset={3}
          showArrows={false}
        />
      </div>
      <div className="laptop">
        <Carroussel
          cards={cards}
          height="500px"
          width="80%"
          margin="0 auto"
          offset={2}
          showArrows={false}
        />
      </div>
      <div className="small-laptop">
        <Carroussel
          cards={cards}
          height="500px"
          width="95%"
          margin="0 auto"
          offset={2}
          showArrows={false}
        />
      </div>
      <div className="tabs">
        <Carroussel
          cards={cards}
          height="400px"
          width="95%"
          margin="0 auto"
          offset={1}
          showArrows={true}
        />
      </div>
    </div>
  );
}
