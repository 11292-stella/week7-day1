const petName = document.getElementById("autoSizingInput")
const ownerName = document.getElementById("autoSizingInput2")
const species = document.getElementById("speciesSelect")
const breed = document.getElementById("breedSelect")
const form = document.getElementById("pet-form")

class Petuser {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault()

  const pet = new Petuser(
    petName.value,
    ownerName.value,
    species.value,
    breed.value
  )

  console.log(pet)
})

//primo esercizio

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
  }

  compareAge(altroUser) {
    if (this.age > altroUser.age) {
      return `${this.firstName} è più vecchio di ${altroUser.firstName}`
    } else {
      return `${this.firstName} e ${altroUser.firstName}hanno la stessa età`
    }
  }
}

const user1 = new User("Alice", "Rossi", 30, "Milano")
const user2 = new User("Bob", "Bianchi", 25, "Roma")

console.log(user1.compareAge(user2))
console.log(user2.compareAge(user1))
