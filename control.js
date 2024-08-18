import { Modle } from "./model.js";
import { View } from "./view.js";

export class Control {
  constructor() {
    this.modle = new Modle();
    this.view = new View();

    document.querySelector(".favourte").addEventListener("click", () => {
      this.addtofavorite();
    });

    document.querySelector(".submit").addEventListener("click", () => {
      this.showdata();
    });

    document.querySelector(".myfavourteList").addEventListener("click", () => {
      this.showFavourteList();
    });
  }

  async showdata() {
    let data = await this.modle.getUser();
    this.view.printdata(data);
  }
  addtofavorite() {
    this.modle.addtofavorite(this.modle.data);
  }
  showFavourteList() {
    let data = this.modle.list;
    this.view.showFavourteList(data);
  }
}
