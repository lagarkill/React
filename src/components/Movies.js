class Movie {
    constructor(title, year, duration) {
        this.title = title;
        this.year = year;
        this.duration = duration;
    }

    play() {
        console.log('Start the movie')
    }
    pause() {
        console.log('Your movie is paused')
    }
    resume() {
        console.log('Continue..')
    }
    addCast(cast) {
        this.cast = [];
        if (cast.length > 1) {
            cast.forEach(element => {
                this.cast.push(`${element.name} , ${element.age}`);
            });
        } else {
            this.cast = `${cast.name} , ${cast.age}`;
        }
    }
}

const social = {
    share(friendName) {
        console.log(`${friendName} share ${this.title}`)
    },
    like(friendName) {
        console.log(`${friendName} like ${this.title}`)
    }
}
Object.setPrototypeOf(Movie.prototype, social);

export default Movie

