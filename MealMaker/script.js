const menu = {
    _courses: {
        appetizers: [],
        get getAppetizers(){
            return this.appetizers;
        },
        set addAppetizer(newAppetizer){
            this.appetizers.push(newAppetizer);
        },
    
        mains: [],
        get getMains(){
            return this.mains;
        },
        set addMain(newMain){
            this.mains.push(newMain);
        },
    
        desserts: [],
        get getDesserts(){
            return this.desserts;
        },
        set addDessert(newDessert){
            this.desserts.push(newDessert);
        },
    },
  
    get getCourses() {
        return {
            appetizers: this._courses.getAppetizers,
            mains: this._courses.getMains,
            desserts: this._courses.getDesserts
        };
    },
  
    // addDishToCourse (courseName, dishName, dishPrice) {
    //     this._courses[courseName].push({name: dishName, price: dishPrice});
    // },
  
    addDishToCourse (courseName, dishName, dishPrice) {
        switch(courseName) {
            case 'appetizers': this._courses.addAppetizer = {name: dishName, price: dishPrice};
            break;
            case 'mains': this._courses.addMain = {name: dishName, price: dishPrice};
            break;
            case 'desserts': this._courses.addDessert = {name: dishName, price: dishPrice};
            break;
            default: console.log(`${courseName} is not a valid course name. Valid options: "appetizers", "mains", or "desserts".`);
            break;
        }
    },
  
    getRandomDishFromCourse (courseName) {
        let dishes;
        switch(courseName){
            case 'appetizers': dishes = this._courses.getAppetizers;
            break;
            case 'mains': dishes = this._courses.getMains;
            break;
            case 'desserts': dishes = this._courses.getDesserts;
            break;
            default: console.log(`${courseName} is not a valid course name. Valid options: "appetizers", "mains", or "desserts".`);
            break;
        }
        const index = Math.floor(Math.random() * dishes.length);
    
        return dishes[index];
    },
  
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
    
        return(`Suggested meal: ${appetizer.name}, ${main.name}, and ${dessert.name}. Total price: ${appetizer.price + main.price + dessert.price}€`);
        }
}

// Add appetizers
menu.addDishToCourse('appetizers', 'roasted caulliflower', 4.50);
menu.addDishToCourse('appetizers', 'mushroom croquetas', 3.75);
menu.addDishToCourse('appetizers', 'vegan calamare', 5.90);

// Add main courses
menu.addDishToCourse('mains', 'lentil & bean tagliatELLA', 10.50);
menu.addDishToCourse('mains', 'Mongol tofu 2die4', 11.50);
menu.addDishToCourse('mains', 'curririfique', 12.90);

// Add deserts
menu.addDishToCourse('desserts', 'wild berry sorbet', 6.50);
menu.addDishToCourse('desserts', 'tiramizoo', 5.50);
menu.addDishToCourse('desserts', 'vainilla cake', 4.90);

// Generate a meal
console.log(menu.generateRandomMeal())