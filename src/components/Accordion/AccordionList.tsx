import { useState, type FC } from "react";
import type { TAccordionItem } from "../../types/Accordion";
import { AccordionItem } from "./AccordionItem";

type Props = {
  items: TAccordionItem[];
};

export const AccordionList: FC<Props> = ({ items }) => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <ul className="list">
      {items.map((item) => (
        <AccordionItem
          item={item}
          key={item.id}
          currentId={openId}
          handler={
            item.id === openId
              ? () => setOpenId(null)
              : () => setOpenId(item.id)
          }
        />
      ))}
    </ul>
  );
};
