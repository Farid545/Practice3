export class RandomString {
  constructor() {
    const length = Math.floor(Math.random() * 10) + 5;
    this.value = this.generateRandomString(length);
    this.id = Math.random().toString(36).substr(2, 9);
  }

  generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  get Value() {
    return this.value;
  }
}

export class RandomStringList {
  constructor() {
    this.randomStrings = [];
  }

  add() {
    const randomString = new RandomString();
    this.randomStrings.push(randomString);
  }

  delete(id) {
    const index = this.randomStrings.findIndex((str) => str.id === id);
    if (index !== -1) {
      this.randomStrings.splice(index, 1);
    }
  }

  getAll() {
    return this.randomStrings;
  }
}
