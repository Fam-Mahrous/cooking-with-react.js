import '../css/app.css';

import { RecipeList } from './RecipeList';

function App() {
  return <RecipeList recipes={sampleRecipes}/>;
}

const sampleRecipes=[
  {
    id:1,
    name:"plain chicken",
    servings:3,
    cookTime:"1.45",
    instructions:"1.put salt on chicken\n2. put chicken on oven\n3. Eat chicken",
    ingredients:[
      {
        id:1,
        name:"Chicken",
        amount:"2 pounds"
      },
      {
        id:2,
        name:"Salt",
        amount:"1 Tbs"
      }
    ]

  },
  {
    id:2,
    name:"Plain Pork",
    servings:5,
    cookTime:"0.45",
    instructions:"1.put paprika on Pork\n2. put Pork on oven\n3. Eat Pork",
    ingredients:[
      {
        id:1,
        name:"Pork",
        amount:"3 pounds"
      },
      {
        id:2,
        name:"Paprika",
        amount:"2 Tbs"
      }
    ]

  }
]

export default App;
