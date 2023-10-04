import { AppState } from "../AppState.js"
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

  createHouse(event){
    
  }

}