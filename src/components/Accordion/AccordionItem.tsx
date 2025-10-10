import { type FC } from "react";
import "../Accordion/Accordion.scss";
import Plus from "../../assets/images/plus.svg?react";
import Minus from "../../assets/images/minus.svg?react";
import type { AccordionProps } from "../../types/AccordionProps";

type Props = {
  item: AccordionProps;
  currentItem: AccordionProps;
  onCurrentItemClick: (item: AccordionProps) => void;
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
    <li className="accordion__item">
      <div className="accordion__item--header" onClick={handleCurrentItemClick}>
        <h3 className="accordion__item--title">{item.title}</h3>
        {currentItem === item ? (
          <Minus width={30} height={30} />
        ) : (
          <Plus width={30} height={30} />
        )}
      </div>
      {isOpen && <p className="accordion__item--content">{item.text}</p>}
    </li>
  );
};
