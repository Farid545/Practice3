import { RandomStringList } from "./model.js";
import { ViewRandomStringList } from "./view.js";

export class Controller {
  constructor() {
    this.randomStringList = new RandomStringList();
    this.viewRandomStringList = new ViewRandomStringList(this.randomStringList);

    this.viewRandomStringList.addClickHandler('generate', () => this.addString());
    this.viewRandomStringList.addClickHandler('delete_first', () => this.deleteString());
  }

  addString() {
    this.randomStringList.add();
    this.viewRandomStringList.updatePage();
  }

  deleteString() {
    this.randomStringList.deleteFirst();
    this.viewRandomStringList.updatePage();
  }

  updatePage() {
    this.viewRandomStringList.updatePage();
  }
}
