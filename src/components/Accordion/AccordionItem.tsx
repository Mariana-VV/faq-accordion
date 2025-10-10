import { type Dispatch, type FC, type SetStateAction } from "react";
import "../Accordion/Accordion.scss";
import Plus from "../../assets/images/plus.svg?react";
import Minus from "../../assets/images/minus.svg?react";
import type { AccordionProps } from "../../types/AccordionProps";

type Props = {
  item: AccordionProps;
  currentItem: AccordionProps;
  onCurrentItemClick: Dispatch<SetStateAction<AccordionProps>>;
};

export const AccordionItem: FC<Props> = ({
  item,
  currentItem,
  onCurrentItemClick,
}) => {
  const isOpen = item === currentItem;

  const handleCurrentItemClick = () => {
    onCurrentItemClick(
      isOpen
        ? {
            title: "",
            text: "",
          }
        : item
    );
  };

  return (
    <li className="accordion__list-item">
      <div
        className="accordion__list-item-header"
        onClick={handleCurrentItemClick}
      >
        <h3 className="accordion__list-item-title">{item.title}</h3>
        {currentItem === item ? (
          <Minus width={30} height={30} />
        ) : (
          <Plus width={30} height={30} />
        )}
      </div>
      {isOpen && <p className="accordion__list-item-content">{item.text}</p>}
    </li>
  );
};
