export class ViewRandomString {
  constructor(randomString) {
    this.randomString = randomString;
  }

  toHtml() {
    const color = this.randomString.Value.length > 10 ? 'green' : 'orange'; // длинные строки — зелёные
    return `<p style='color: ${color}' id=${this.randomString.id}>${this.randomString.Value}</p>`;
  }
}

export class ViewRandomStringList {
  constructor(randomStringList) {
    this.randomStringList = randomStringList;
  }

  addClickHandler(htmlId, clickHandlerFunction) {
    document.getElementById(htmlId).addEventListener('click', () => clickHandlerFunction());
  }

  toHtml() {
    let result = "";
    for (let randomString of this.randomStringList.getAll()) {
      const viewRandomString = new ViewRandomString(randomString);
      result += viewRandomString.toHtml();
    }
    return result;
  }

  updatePage() {
    document.getElementById('random_strings').innerHTML = this.toHtml();
  }
}
