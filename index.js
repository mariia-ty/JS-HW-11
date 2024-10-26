const bankAccount = {
  ownerName: "Lucy Grey",
  accountNumber: 1358620,
  balance: 34567,

  deposit(amount) {
    this.balance += amount;
    console.log(this.balance);
  },
  withdraw(amount) {
    this.balance -= amount;
    console.log(this.balance);
  },
};
function readInputValue() {
  return parseFloat(document.getElementById("amount").value);
}
amount = readInputValue();

const weather = {
  temperature: 4,
  humidity: true,
  windSpeed: 34,

  tempCheck() {
    this.temperature = parseFloat(document.getElementById("temp").value);

    if (this.temperature < 0) {
      console.log("температура нижче 0 градусів Цельсія");
      return true;
    } else {
      console.log("температура вище 0 градусів Цельсія");
      return false;
    }
  },
};

const user = {
  name: "Mariia",
  email: "new@gmail.com",
  password: "Mari",

  login() {
    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("pass").value.trim();

    if (this.email !== emailInput || this.password !== passwordInput) {
      console.log("Incorrect Login Info");
    } else {
      console.log("Correct Login Info");
    }
  }
};

const movie = {
    title: " ", 
    director: " ", 
    year: " ", 
    rating: null, 

    ratingCheck() {
        if (this.rating > 8) {
            return true;
        }
        else {
            return false;
        }
    }, 
    
};
