import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawHouses() {
  // const houses = AppState.houses
  let template = ''

  AppState.houses.forEach(house => template += house.HouseCard)
  setHTML('houses', template)
}
export class HousesController {
  constructor() {
    // console.log('HousesController loading')
    _drawHouses()

    AppState.on('houses', _drawHouses)
  }

  createHouse(event) {
    try {
      event.preventDefault()
      // console.log('hello')
      const form = event.target
      const houseData = getFormData(form)

      // console.log('creating house', houseData)

      housesService.createHouse(houseData)

      form.reset()

    } catch (error) {
      Pop.error(error.message)
      console.error(error);
    }
  }

}