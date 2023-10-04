import { AboutController } from "./controllers/AboutController.js";
import { CarsController } from "./controllers/CarsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { HousesController } from "./controllers/HousesController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { CarsView } from "./views/CarsView.js";


export const router = [
  {
    path: '',
    controller: HomeController,
    view: /*html*/`
    <h1 class="p-3">Welcome to Gregslist!</h1>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  },
  {
    path: '#/cars',
    controller: CarsController,
    view: CarsView
    // view: null
  },
  // TODO create a new route object for houses, start the view out as null
  {
    path: '#/houses',
    controller: HousesController,
    // view: HousesView
    view: null
  }
]