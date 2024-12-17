import { RandomStringList } from "./model.js";
import { ViewRandomStringList } from "./view.js";

export class Controller {
  constructor() {
    this.randomStringList = new RandomStringList();
    this.viewRandomStringList = new ViewRandomStringList(this.randomStringList);

    this.viewRandomStringList.addClickHandler('add_string', () => this.addString());
    this.viewRandomStringList.addClickHandler('delete_string', (id) => this.deleteString(id));
    this.viewRandomStringList.addClickHandler('show_all', () => this.showAllStrings());
  }

  addString() {
    this.randomStringList.add();
    this.viewRandomStringList.updatePage();
  }

  deleteString(id) {
    this.randomStringList.delete(id);
    this.viewRandomStringList.updatePage();
  }

  showAllStrings() {
    this.viewRandomStringList.showAll();
  }
}
