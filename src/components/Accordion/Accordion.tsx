import "./Accordion.scss";

import Star from "../../assets/images/star.svg?react";
import { AccordionItem } from "../AccordionItem/AccordionItem";
import { useState, type FC } from "react";
import type { Accordion } from "../../types/Accordion";

const accordion = [
  {
    title: "What is Frontend Mentor, and how will it help me?",
    text: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.",
  },
  {
    title: "Is Frontend Mentor free?",
    text: "The majority of our challenges are free, yes. We do have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it's easy to tell the difference.",
  },
  {
    title: "Can I use Frontend Mentor projects in my portfolio?",
    text: "Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!",
  },
  {
    title: "How can I get help if I'm stuck on a challenge?",
    text: "The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated 'help' channel! If you haven't joined yet, you can get an invite to our Discord server here.",
  },
];

export const Accordions = () => {
  const [currentItem, setCurrentItem] = useState<Accordion>({
    title: "",
    text: "",
  });

  return (
    <section className="accordion">
      <header className="accordion__header">
        <Star />
        <h1 className="accordion__title">FAQs</h1>
      </header>
      <AccordionList
        items={accordion}
        currentItem={currentItem}
        onCurrentItemClick={setCurrentItem}
      />
    </section>
  );
};

type Props = {
  items: Accordion[];
  currentItem: Accordion;
  onCurrentItemClick: (item: Accordion) => void;
};

export const AccordionList: FC<Props> = ({
  items,
  currentItem,
  onCurrentItemClick,
}) => {
  return (
    <ul className="list">
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
