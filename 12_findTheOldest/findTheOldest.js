function getAge(person) {
    if (Object.hasOwn(person, "yearOfDeath")) {
        return person.yearOfDeath - person.yearOfBirth;
    }
    else {
        const currentYear = new Date().getFullYear();
        return currentYear - person.yearOfBirth;
    }
}

const findTheOldest = function (people) {
    return people.reduce((oldest, current) => {
        if (getAge(current) > getAge(oldest)) return current;
        else return oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
