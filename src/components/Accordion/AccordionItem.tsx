import { useRef, type FC } from "react";
import Plus from "../../assets/images/plus.svg?react";
import Minus from "../../assets/images/minus.svg?react";
import type { TAccordionItem } from "../../types/Accordion";

type Props = {
  item: TAccordionItem;
  currentId: number | null;
  handler: (id: number) => void;
};

export const AccordionItem: FC<Props> = ({ item, currentId, handler }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <li className="accordion__item">
      <button
        type="button"
        className={`accordion__item-header ${
          currentId === item.id ? "accordion__item-header--open" : ""
        }`}
        onClick={() => handler(item.id)}
      >
        <h3 className="accordion__item-header-title">{item.title}</h3>
        {currentId === item.id ? (
          <Minus width={30} height={30} />
        ) : (
          <Plus width={30} height={30} />
        )}
      </button>

      <div
        className={`accordion__collapse ${
          currentId === item.id ? "accordion__collapse--open" : ""
        }`}
        style={
          currentId === item.id
            ? { height: ref.current?.scrollHeight || 0 }
            : { height: 0 }
        }
      >
        <div className="accordion__body" ref={ref}>
          <p className={`accordion__body-content`}>{item.text}</p>
        </div>
      </div>
    </li>
  );
};
