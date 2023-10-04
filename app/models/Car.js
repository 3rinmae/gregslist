import { generateId } from "../utils/GenerateId.js"

export class Car {
  /**
   * @param {{ year: number; make: string; model: string; mileage: number; runs: boolean; imgUrl: string; isNew: boolean; price: number; color: string; description: string; listedAt?: Date }} data
   */
  constructor(data) {
    this.id = generateId()
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.mileage = data.mileage
    this.runs = data.runs
    this.imgUrl = data.imgUrl
    this.isNew = data.isNew
    this.price = data.price
    this.color = data.color
    this.description = data.description
    this.listedAt = data.listedAt ? new Date(data.listedAt).toLocaleString() : new Date().toLocaleString()
  }

  get CarCard() {
    return `
    <div class="col-10 mb-3">
      <div class="d-flex shadow car-border" style="border-color: ${this.color};">
        <img class="car-img"
          src="${this.imgUrl}"
          alt="${this.make} ${this.model}">
        <div class="p-3 w-100">
          <h2>${this.ComputeIsNewIcon}  ${this.year} ${this.make} ${this.model}</h2>
          <p>${this.listedAt}</p>
          <h3>${this.mileage} miles</h3>
          <h3>$${this.price}</h3>
          <h3>${this.runs ? 'It runs' : "It doesn't run"}</h3>
          <p>${this.description}</p>
          <div class="text-end">
            <button onclick="app.CarsController.removeCar('${this.id}')" class="btn btn-danger">Delete Car</button>
          </div>
        </div>
      </div>
    </div>
    `
  }

  get ComputeIsNewIcon() {
    if (this.isNew) {
      return '<i class="mdi mdi-shimmer"></i>'
    }

    return ''
  }

}

