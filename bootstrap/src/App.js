import "./App.css";
import "./style.scss";
import recipeImage from "./assets/images/image-omelette.jpeg";
import iconImg from "./assets/images/bootstrap.png";

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
    <div className="main-bg bg-eggshell d-flex align-items-center justify-content-center py-4 py-md-5 py-lg-5 py-xl-5">
      <div className="h-100 bg-white p-4 p-md-5 p-lg-5 p-xl-5 rounded-24 w-50 w-md-75 w-lg-66 w-xl-50">
        <img
          src={recipeImage}
          className="w-100 img-fluid rounded-16 mb-4"
          alt="recipe"
        />
        <h3 className="text-xl font-YoungSerif mb-4 text-dark-charcoal">
          Simple Omelette Recipe
        </h3>

        <p className="text-base mb-4">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <div className="bg-rose-white p-4 mb-4 rounded-md">
          <h3 className="text-lg text-rose mb-2 font-YoungSerif">
            Preparation time
          </h3>
          <ul className="bullet-rose text-base text-dark-charcoal">
            {preparationTime.map((item, index) => (
              <li key={index}>
                <b>{item.label}</b>: {item.value}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-bottom mb-3">
          <h3 className="text-lg mb-2 text-nutmeg font-YoungSerif">
            Ingredients
          </h3>
          <ul className="bullet-nutmeg text-base text-dark-charcoal mb-4">
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="border-bottom mb-3">
          <h3 className="text-lg mb-2 text-nutmeg font-YoungSerif">
            Instructions
          </h3>
          <ul className="numbers-nutmeg text-base text-dark-charcoal mb-4">
            {instructions.map((item, index) => (
              <li key={index}>
                <b>{item.label}</b>: {item.value}
              </li>
            ))}
          </ul>
        </div>

        <h3 className="text-lg mb-2 text-nutmeg font-YoungSerif ">Nutrition</h3>
        <p className="text-base mb-4">
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <table className="w-100 text-base">
          <tbody>
            {nutritionValues.map((item, index) => (
              <tr key={index} className="border-bottom border-light">
                <td className="pr-4 py-2">{item.label}</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex align-items-center justify-content-center mt-3">
          <h4 className="me-2 mb-0">Read more: </h4>
          <a href="https://tailwindcss.com/">
            <img src={iconImg} className="size-40 d-inline me-2" alt="recipe" />
            <span>https://tailwindcss.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
