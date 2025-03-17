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
