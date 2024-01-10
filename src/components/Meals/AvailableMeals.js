import MealItems from "./Mealitems/MealItems";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    "id": "m1",
    "name": "Palak Paneer",
    "description": "Creamy spinach and cottage cheese curry, a classic",
    "price": 180
  },
  {
    "id": "m2",
    "name": "Chana Masala",
    "description": "Spicy chickpea curry, bursting with flavor",
    "price": 150
  },
  {
    "id": "m3",
    "name": "Dal Makhani",
    "description": "Rich and comforting black lentil curry",
    "price": 160
  },
  {
    "id": "m4",
    "name": "Aloo Gobi",
    "description": "Simple yet delicious potatoes and cauliflower curry",
    "price": 120
  },
  {
    "id": "m5",
    "name": "Malai Kofta",
    "description": "Decadent vegetable fritters in creamy tomato gravy",
    "price": 200
  },
  {
    "id": "m6",
    "name": "Rajma Masala",
    "description": "Healthy and protein-rich kidney bean curry",
    "price": 170
  },
  {
    "id": "m7",
    "name": "Matar Paneer",
    "description": "Light and flavorful green peas and cottage cheese curry",
    "price": 160
  },
  {
    "id": "m8",
    "name": "Kadai Paneer",
    "description": "Cottage cheese in a spicy onion and tomato gravy",
    "price":  180
  },
  {
    "id": "m9",
    "name": "Vegetable Biryani",
    "description": "Fragrant rice layered with vegetables and spices",
    "price": 190
  },
  {
    "id": "m10",
    "name": "Dahi Vada",
    "description": "Cooling and refreshing lentil fritters in yogurt",
    "price": 90
  },
  {
    "id": "m11",
    "name": "Dosa",
    "description": "Crispy lentil and rice crepe, served with chutneys and sambar",
    "price": 80
  },
  {
    "id": "m12",
    "name": "Idli",
    "description": "Light and fluffy steamed rice cakes, perfect for breakfast",
    "price": 50
  },
  {
    "id": "m13",
    "name": "Sambar",
    "description": "Tangy and flavorful lentil and vegetable stew",
    "price": 90
  },
  {
    "id": "m14",
    "name": "Vada",
    "description": "Crispy and savory lentil fritters, ideal for snacking",
    "price": 40
  },
  {
    "id": "m15",
    "name": "Masala Dosa",
    "description": "Dosa filled with spiced potato mixture",
    "price": 100
  },
  {
    "id": "m16",
    "name": "Uttapam",
    "description": "Savory rice and lentil pancake, topped with vegetables",
    "price": 90
  },
  {
    "id": "m17",
    "name": "Pongal",
    "description": "Lentil and rice porridge, with ghee and cashews",
    "price": 70
  },
  {
    "id": "m18",
    "name": "Rava Idli",
    "description": "Semolina-based steamed rice cakes, with a slightly crunchy texture",
    "price": 60
  },
  {
    "id": "m19",
    "name": "Upma",
    "description": "Savory semolina porridge, with vegetables and spices",
    "price": 80
  },
  {
    "id": "m20",
    "name": "Coconut Chutney",
    "description": "Mint and coconut chutney, a refreshing accompaniment.",
    "price": 40
  },
  {
    "id": "m21",
    "name": "Pav Bhaji",
    "description": "Spicy vegetable curry served with soft bread rolls.",
    "price": 150
  },
  {
    "id": "m22",
    "name": "Misal Pav",
    "description": "Sprouted lentil curry with bread rolls, hearty breakfast option.",
    "price": 120
  },
  {
    "id": "m23",
    "name": " Bhindi Masala",
    "description": " Okra curry, cooked with onions and spices.",
    "price": 130
  },
  {
    "id": "m24",
    "name": "Undhiyu",
    "description": "Mixed vegetable casserole, cooked in a clay pot.",
    "price": 180
  },
  {
    "id": "m25",
    "name": "Dabeli",
    "description": "Spicy potato and lentil street food wrap.",
    "price": 50
  },
  {
    "id": "m26",
    "name": "Samosa",
    "description": "Crispy fried pastry filled with spiced potatoes and peas",
    "price": 40
  },
  {
    "id": "m27",
    "name": "Pakora",
    "description": "Deep-fried fritters made with vegetables like onion, potatoes, or cauliflower",
    "price": 30
  },
  {
    "id": "m28",
    "name": "Dahi Bhalla",
    "description": "Soft lentil dumplings bathed in creamy yogurt, topped with spices and chutneys",
    "price": 50
  },
  {
    "id": "m29",
    "name": "Aloo Tikki",
    "description": "Spicy potato patties, pan-fried or deep-fried",
    "price": 40
  },
  {
    "id": "m30",
    "name": "Misal Pav",
    "description": "Sprouted lentil curry served with bread rolls, a hearty and flavorful snack",
    "price": 60
  },
  {
    "id": "m31",
    "name": "Vada Pav",
    "description": "Crispy lentil fritters sandwiched in a soft bread roll, with chutneys and spices",
    "price": 40
  },
  {
    "id": "m32",
    "name": "Poha",
    "description": "Flattened rice flakes sauteed with vegetables and spices, a light and healthy snack",
    "price": 30
  },
  {
    "id": "m33",
    "name": "Spring Rolls",
    "description": "Crispy rolls filled with vegetables and spices, served with chutneys",
    "price": 50
  },
  {
    "id": "m34",
    "name": "Dhokla",
    "description": "Steamed chickpea cake, soft and spongy, perfect for dipping in chutneys",
    "price": 40
  },
  {
    "id": "m35", 
    "name": "Bhel Puri",
    "description": "Puffed rice salad with vegetables, spices, and chutneys, a tangy and refreshing snack",
    "price": 30
  },
  {
    "id": "m36", 
    "name": "Samosa Chaat",
    "description": "Crushed samosa topped with chickpeas, yogurt, chutneys, and spices, a street food favorite",
    "price": 50
  },
  {
    "id": "m37", 
    "name": "Dahi Papdi",
    "description": "Crispy wafers layered with yogurt, potatoes, and chutneys, a sweet and savory snack",
    "price": 40
  },
  {
    "id": "m38",
     "name": "Paneer Tikka",
    "description": "Marinated cottage cheese cubes grilled or pan-fried, served with chutneys",
    "price": 60
  },
  {
    "id": "m39", 
    "name": "Fruit Chaat",
    "description": "Fresh fruits mixed with yogurt, spices, and nuts, a healthy and refreshing snack",
    "price": 50
  } ,
  {
    "id": "m40",
    "name": "Roti",
    "description": "Whole wheat flatbread, a staple in Indian cuisine",
    "price": 10
  },
  {
    "id": "m41",
    "name": "Naan",
    "description": "Fluffy leavened flatbread, often cooked in a tandoor oven",
    "price": 20
  },
  {
    "id": "m42",
    "name": "Paratha",
    "description": "Layered flatbread, often stuffed with vegetables or paneer",
    "price": 25
  },
  {
    "id": "m43",
    "name": "Missi Roti",
    "description": "Flatbread made with lentil flour, a protein-rich option",
    "price": 15
  },
  {
    "id": "m44",
    "name": "Kulcha",
    "description": "Stuffed flatbread, with fillings like onion, potato, or paneer",
    "price": 30
  },
  {
    "id": "m45",
    "name": "Plain Rice",
    "description": "Steamed white rice, a simple and versatile accompaniment",
    "price": 50
  },
  {
    "id": "m46",
    "name": "Jeera Rice",
    "description": "Fragrant rice cooked with cumin seeds",
    "price": 60
  },
  {
    "id": "m47",
    "name": "Vegetable Biryani",
    "description": "Aromatic rice layered with vegetables and spices",
    "price": 150
  },
  {
    "id": "m48",
    "name": "Pulao",
    "description": "Flavored rice with vegetables, herbs, and spices",
    "price": 100
  },
  {
    "id": "m49",
    "name": "Lemon Rice",
    "description": "Tangy rice flavored with lemon juice, a South Indian specialty",
    "price": 70
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItems
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};
export default AvailableMeals;