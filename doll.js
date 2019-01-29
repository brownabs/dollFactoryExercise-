
//array of dolls 
const dollBin = [
    { name: "Jessica", eyeColor: "Green", hasHair: false },
    { name: "Meg", eyeColor: "Brown", hasHair: false },
    { name: "Steve", eyeColor: "Blue", hasHair: false }
]
  

// first function create a dollFactory that accepts an array as an argument
// -pass each item into the second function.

  const dollFactory = dolls => {
    dolls.forEach(doll => {
      hairMachine(doll)
  
      const dollHTML = createDollComponent(doll)
      printDoll(dollHTML)
    })
  }

  
// second function hairMachine that accepts an item as an argument and adds 
// hair to the item.
// - if the item has green or brown eyes add the property hairColor with 
// the value "Brown"
// - if blue eyes "blonde"
// also change the hasHair value appropriately
  
  const hairMachine = doll => {
    if (doll.eyeColor === "Green" || doll.eyeColor === "Brown") {
      doll.hasHair = true
      doll.hairColor = "Brown"
    } else {
      doll.hasHair = true
      doll.hairColor = "Blonde"
    }
  }
  
  // 1. Define a `createDollComponent` function that takes one argument, the completed doll object (with hair), 
//   and returns a HTML representation of that doll 

  const createDollComponent = completedDoll => {
      return `
      <div class="dollCard">
          <h2>${completedDoll.name}</h2>
          <p class=${completedDoll.eyeColor}>${completedDoll.eyeColor} eyes</p>
          <p>${completedDoll.hairColor} hair</p>
      </div>
      `
  }
      
  // 2. Define a `printDoll` function that takes the HTML representation of the doll and prints it to the DOM 
  
  const printDoll = dollHTML => {
      document.querySelector("#dollListing").innerHTML += dollHTML
  }
  
  
  dollFactory(dollBin)