import { MenuItem } from "../menu-item/menu-item.component";
import { Pizza } from "../../types";

interface MenuListProps {
  items: Pizza[];
}

export const MenuList = ({ items }: MenuListProps) => {
  return (
    <div className="flex flex-wrap gap-10">
      {items.map(({ image, weight = null, ...pizza }) => (
        <MenuItem image={image} weight={weight} {...pizza} key={pizza.id} />
      ))}
    </div>
  );
};
