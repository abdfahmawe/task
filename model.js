export class Modle {
  constructor() {
    this.list = [];
    this.data = null;
  }
  async getUser() {
    let response = await fetch("https://randomuser.me/api/");
    this.data = await response.json();
    this.data = this.data.results[0];
    return this.data;
  }
  addtofavorite(item) {
    if (!this.list.some((ele) => item.id === ele.id)) {
      this.list.push(item);
      document.querySelector(".information-2").innerHTML = "";
    }
    console.log(this.list);
  }
}
