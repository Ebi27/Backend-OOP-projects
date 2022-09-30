/*
BUILD A LIBRARY PROJECT 
As a head librarian at your local Books-‘N-Stuff, which is in dire need of your help. They’re still using index cards to organize their content! Yikes.

But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.

Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

~BOOK~
- Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).

- Getters: all properties have a getter

- Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

~MOVIE~
- Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)

- Getters: all properties have a getter

- Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

~CD~
- Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)

- Getters: all properties have a getter

- Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating() 


GOAL: To practice using classes and Inheritance 
*/

//parent Class
class Media {
  constructor(title) {
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = false;
  }
  get title() {
    return this._title;
  }
  get ratings() {
    return this._ratings;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  set isCheckedOut(check) {
    this._isCheckedOut = false;
  }
  toggleCheckOutStatus() {
    if (this.isCheckedOut === true) {
      return true;
    } else {
      return false;
    }
  }
  getAverageRating() {
    let ratingsSum = this.ratings.reduce(
      (currentSum, rating) => currentSum + rating,
      0
    );
    const rateLength = this.ratings.length;
    console.log(Math.round(ratingsSum / rateLength));
  }
  addRating(rate) {
    this.ratings.push(rate);
  }
}

//SubClass Book

class Book extends Media {
  super(author, pages) {
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

const historyOfEverything = new Book(
  "A Short History of Nearly Everything",
  "Bill Bryson",
  544
);

historyOfEverything.toggleCheckOutStatus(this.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.getAverageRating();
console.log(historyOfEverything);

//SubClass movie
class Movie extends Media {
  super(director, runTime) {
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}
const greatMovie = new Movie("Speed", "Jan de Bont", 116);

greatMovie.toggleCheckOutStatus(this.isCheckedOut);
greatMovie.addRating(1);
greatMovie.addRating(1);
greatMovie.addRating(5);
greatMovie.getAverageRating();
console.log(greatMovie);

//subclass CD
class CD extends Media {
  super(artist, song) {
    this._artist = artist;
    this._song = song;
  }
  get artist() {
    return this._artist;
  }
  get song() {
    return this._song;
  }
  shuffle() {
    let songShuttle = Math.round(Math.random(this.song).length);
    return songShuttle;
  }
}

const showCd = new CD("Wives", "Ebi Kpemi", 120);
showCd.toggleCheckOutStatus(this.isCheckedOut);
showCd.addRating(4);
showCd.addRating(2);
showCd.addRating(5);
showCd.getAverageRating();
console.log(showCd);

//Catalog class that holds all the Media items in our library
