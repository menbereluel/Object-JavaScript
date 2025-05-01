//1 create a User object with name and stepWalked (list of steps per day )
//Define method totalSteps();
//Initialize total to 0
//For each stepCount in stepWalked
//Add  stepCount to total
//Return total
//Define method averageSteps();
//Get total steps by calling totalSteps()
//Get number of days(length of stepWalked)
//return total steps divided by number of days
//Print totalSteps()
//Print averageSteps()

const User = {
    name:"marion",
    stepWalked:[3000,4000,7000,4500,6500],
    totalSteps: function(){
        let total =0;
        for (let i =0;i<this.stepWalked.length;i++){
            total += this.stepWalked[i];
        }
        return total;
    },
agerageSteps:function(){
    let total = this.totalSteps();
    let days = this.stepWalked.length;
    return total/days;
}

};
console.log('Total Steps:',User.totalSteps());
console.log("Average Steps:",User.agerageSteps());
//2
// Define a Recipe constructor with: name,Ingredients(list),cookTime(in minutes)
//Inside Recipe: Define method displayRecipe()
//Print the name 
//For Each ingredient in ingredients:
//Print ingredient
//Define method isQuickMeal():
//If cookTime is 30 or less, return true 
//Else, return false
//Create a new Recipe object 
//call displayRecipe()
//call isQuickMeal()
function Recipe(name,ingredients,cookTime){
    this.name = name;
    this.ingredients = ingredients;
    this.cookTime = cookTime;
    this.displayRecipe = function(){
        console.log("Recipe: " + this.name);
        console.log("Ingradients:");
this.ingredients.forEach(ingredient=>console.log(`${ingredient}`))

    };
    this.isQuickMeal = function(){
        return this.cookTime <= 30;
    };

}
const myRecipe = new Recipe ("Pasta",["Pasta","Tomato Sauce","Cheese"],25);
myRecipe.displayRecipe();
console.log(myRecipe.isQuickMeal());
//3
// create a Playlist object with:
const Car = {
    model:"Toyota Corolla",
    mileage:50000,
    serviceHistory:["2021-02-25","2023-04-10"],
    addService:function(date){
        this.serviceHistory.push(date);
    },
    lastServiceDate: function(){
        if (this.serviceHistory.length === 0){
            return "No service records.";
        }
        return this.serviceHistory[this.serviceHistory.length-1];
    }
};
Car.addService("2024-05-23");
console.log("Last Service Date: ",Car.lastServiceDate());
//4

const Playlist ={
    songs:["alone","hello","sorry"],
    addSong: function(title){
        this.songs.push(title);
    },
    removeSong: function(title){
        const index = this.songs.indexOf(title);
        if(index !== -1){
            this.songs.splice(index,1);
        }
    },
    listSongs: function(){
        console.log("Playlist:");
        for(let i= 0; i < this.songs.length;i++){
            console.log(" "+ this.songs[i] );
        }
    }
};
Playlist.addSong("someone like you");
Playlist.removeSong("hello");
Playlist.listSongs();
//5
// Define a constructor with:title,lessons(list of lessons),completedLessons(empty list)
//Inside Course:
//Define method markComplete(lesson)
//If lesson is in lessons and not already in completedLessons:
//Add lessons to  completedLessons
//Define method getProgress():
//Return "number of completed"as a string
//Create a new Course object 
// //Use markComplete() to complete some lessons
//use getProgress(to see how many lessons are completed )

function Course(title,lessons){
    this.title=title;
    this.lessons=lessons;
    this.completedLessons =[];
    this.markComplete = function(lesson){
        if(this.lessons.includes(lesson)&& !
        this.completedLessons.includes(lesson)){
            this.completedLessons.push(lesson);
        }
    };
    this.getProgress = function(){
        return this.completedLessons.length + " out of "+ 
        this.lessons.length +" lessons completed";
    };
}
const myCourse = new Course("JavaScript",["Variables","Functions","Loops","Objects","Arrays"]);
myCourse.markComplete("Variables");
myCourse.markComplete("Functions");
myCourse.markComplete("Loops");
console.log(myCourse.getProgress());

