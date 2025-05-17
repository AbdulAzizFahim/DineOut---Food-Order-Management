import hamburger from "/src/assets/hamburger.svg";
import chicken from "/src/assets/chicken.svg";
import pizza from "/src/assets/pizza.svg";
import submarine from "/src/assets/submarine.svg";
import mushroom from "/src/assets/mushroom.svg"
import FoodItem from "../common/FoodItem";

const foodItems = [
  {
    key: 1,
    source: hamburger,
    foodName: "Hamburger",
    foodPrice: 300,
  },
  {
    key: 2,
    source: chicken,
    foodName: "Chicken Nuggets",
    foodPrice: 150,
  },
  {
    key: 3,
    source: submarine,
    foodName: "Submarine Sandwich",
    foodPrice: 220,
  },
  {
    key: 4,
    source: pizza,
    foodName: "Pizza slices",
    foodPrice: 500,
  },
    {
    key: 5,
    source: mushroom,
    foodName: "Mushroom",
    foodPrice: 1299,
  },
];

export default function FoodList({ order, setOrder }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Choose Items</label>
      <div className="items-container">
        {foodItems.map((item) => {
          return (
            <FoodItem
              key={item.key}
              foodData={item}
              order={order}
              setOrder={setOrder}
            />
          );
        })}
      </div>
    </div>
  );
}
