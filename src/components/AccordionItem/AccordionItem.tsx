import { type FC } from "react";
import "./AccordionItem.scss";
import Plus from "../../assets/images/plus.svg?react";
import Minus from "../../assets/images/minus.svg?react";
import type { Accordion } from "../../types/Accordion";

type Props = {
  item: Accordion;
  currentItem: Accordion;
  onCurrentItemClick: (item: Accordion) => void;
};

export const AccordionItem: FC<Props> = ({
  item,
  currentItem,
  onCurrentItemClick,
}) => {
  const isOpen = item === currentItem;

  function handleCurrentItemClick() {
    onCurrentItemClick(
      isOpen
        ? {
            title: "",
            text: "",
          }
        : item
    );
  }

  return (
    <li className="item">
      <div className="item__header" onClick={handleCurrentItemClick}>
        <h3 className="item__title">{item.title}</h3>
        {currentItem === item ? <Minus /> : <Plus />}
      </div>
      {isOpen && <p className="item__content">{item.text}</p>}
    </li>
  );
};
