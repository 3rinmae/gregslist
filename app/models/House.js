import { generateId } from "../utils/GenerateId.js";

export class House {
  /**
   * @param {{ year: number; name: string; bedrooms: number; bathrooms: number; sqft: number; price: number; description: string; imgUrl: string; id?: any; }} data
   */
  constructor(data) {
    this.id = generateId()
    this.year = data.year
    this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
    this.listedAt = data.listedAt ? new Date(data.listedAt).toLocaleString() : new Date().toLocaleString()
  }

  get HouseCard() {
    return `
    <div class="col-10 mb-3">
        <div class="d-flex shadow">
          <img class="car-img" src="${this.imgUrl}" alt="${this.name}">
          <div class="p-3 w-100">
            <h2>${this.name} home selling for $${this.price}</h2>
            <p>${this.listedAt}</p>
            <h3>Built in ${this.year}</h3>
            <h3>Sqft: ${this.sqft}</h3>
            <h3>Bedrooms: ${this.bedrooms}</h3>
            <h3>Bathrooms: ${this.bathrooms}</h3>
            <p>${this.description}</p>
            <div class="text-end">
              <button onclick="app.HousesController.removeHouse('${this.id}')" class="btn btn-danger">Delete
                House</button>
            </div>
          </div>
        </div>
      </div>`
  }
}