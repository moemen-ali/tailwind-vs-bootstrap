import "./App.css";
import "./style.scss";
import recipeImage from "./assets/images/image-omelette.jpeg";
import iconImg from "./assets/images/tailwind.png";

function App() {
  const preparationTime = [
    { label: "Total", value: "Approximately 10 minutes" },
    { label: "Preparation", value: "5 minutes" },
    { label: "Cooking", value: "5 minutes" },
  ];

  const ingredients = [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil",
    "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  ];

  const instructions = [
    {
      label: "Beat the eggs",
      value:
        "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
    },
    {
      label: "Heat the pan",
      value:
        "Place a non-stick frying pan over medium heat and add butter or oil.",
    },
    {
      label: "Cook the omelette",
      value:
        "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    },
    {
      label: "Add fillings (optional)",
      value:
        "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    },
    {
      label: "Fold and serve",
      value:
        "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    },
    {
      label: "Enjoy",
      value: "Serve hot, with additional salt and pepper if needed.",
    },
  ];

  const nutritionValues = [
    { label: "Calories", value: "277kcal" },
    { label: "Carbs", value: "0g" },
    { label: "Protein", value: "20g" },
    { label: "Fat", value: "22g" },
  ];

  return (
    <div className="main-bg flex items-center justify-center py-8 md:py-16 lg:py-20 xl:py-32">
      <div className="h-full bg-white p-8 md:p-16 lg:p-20 xl:p-32 rounded-24 w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <img
          src={recipeImage}
          className="w-full object-contain rounded-16 mb-16"
          alt="recipe"
        />
        <h3 className="text-3xl font-YoungSerif mt-4 mb-16 main-title">
          Simple Omelette Recipe
        </h3>

        <p className="text-base font-Outfit font-medium mb-16">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <div className="bg-rose-white rounded-md p-16 mb-16">
          <h3 className="text-lg text-rose mb-2">Preparation time</h3>
          <ul className="list-disc list-inside text-base text-dark-charcoal bullet-rose">
            {preparationTime.map((item, index) => (
              <li key={index}>
                <b>{item.label}</b>: {item.value}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-b mb-16">
          <h3 className="text-xl mb-2 font-YoungSerif text-nutmeg">
            Ingredients
          </h3>
          <ul className="list-disc bullet-nutmeg list-inside text-base text-dark-charcoal mb-16">
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="border-b mb-16">
          <h3 className="text-xl mb-2 font-YoungSerif text-nutmeg">
            Instructions
          </h3>
          <ul className="list-decimal numbers-nutmeg list-inside text-base text-dark-charcoal mb-16">
            {instructions.map((item, index) => (
              <li key={index} className="mb-8 last:mb-0">
                <b className="text-wenge-brown">{item.label}</b>: {item.value}
              </li>
            ))}
          </ul>
        </div>

        <h3 className="text-xl mb-2 font-YoungSerif text-nutmeg">Nutrition</h3>
        <p className="text-base text-dark-charcoal mb-4">
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <table className="w-full text-base">
          <tbody>
            {nutritionValues.map((item, index) => (
              <tr key={index} className="border-b last:border-none">
                <td className="pr-4 py-8">{item.label}</td>
                <td className="py-8 text-nutmeg font-semibold">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-center mt-18">
          <h3 className="me-8">Read more: </h3>
          <a href="https://tailwindcss.com/">
            <img src={iconImg} className="size-40 inline" alt="recipe" />
            <span className="text-blue-700 underline">https://tailwindcss.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
