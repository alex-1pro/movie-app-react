class ActorModel {
    constructor(firstName, lastName, birthday, img, imdbLink) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.img = img;
        this.imdbLink = imdbLink;
    }
    age(){
        var ageDifMs = Date.now() - this.birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}
export default ActorModel;