export class RandomString {
  constructor() {
    const length = Math.floor(Math.random() * 10) + 5; // длина строки от 5 до 15 символов
    this.value = this.generateRandomString(length);
    this.id = Math.random().toString(36).substr(2, 9); // уникальный ID
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

  deleteFirst() {
    if (this.randomStrings.length > 0) {
      this.randomStrings.splice(0, 1); // удаляем первый элемент
    }
  }

  getAll() {
    return this.randomStrings;
  }
}
