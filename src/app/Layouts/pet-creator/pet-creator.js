document.getElementById("pet-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let type = document.getElementById("type").value;
  
    let newPet = new Pet(name, type);
    userProfile.storePet(newPet);
    console.log("Created new pet:", newPet);
  });