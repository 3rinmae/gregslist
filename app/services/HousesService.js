import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { saveState } from "../utils/Store.js";

function _saveHouses() {
  saveState('houses', AppState.houses)
}

class HousesService {
  createHouse(houseData) {
    const newHouse = new House(houseData)
    // console.log('new house', newHouse)
    AppState.houses.push(newHouse)
    _saveHouses()
    AppState.emit('houses')
  }





}

export const housesService = new HousesService