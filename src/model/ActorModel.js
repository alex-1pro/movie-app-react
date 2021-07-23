class ActorModel {
    constructor(firstName, lastName, birthday, img, imdbLink) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.img = img;
        this.imdbLink = imdbLink;
    }
    Age(birthday){
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}
export default ActorModel;