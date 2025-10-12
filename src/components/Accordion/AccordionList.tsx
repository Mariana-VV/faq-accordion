import type { Dispatch, FC, SetStateAction } from "react";
import type { AccordionProps } from "../../types/AccordionProps";
import { AccordionItem } from "./AccordionItem";

type Props = {
  items: AccordionProps[];
  currentItem: AccordionProps;
  onCurrentItemClick: Dispatch<SetStateAction<AccordionProps>>;
};

export const AccordionList: FC<Props> = ({
  items,
  currentItem,
  onCurrentItemClick,
}) => {
  return (
    <ul className="accordion__list">
      {items.map((item) => (
        <AccordionItem
          item={item}
          currentItem={currentItem}
          onCurrentItemClick={onCurrentItemClick}
          key={item.text}
        />
      ))}
    </ul>
  );
};
