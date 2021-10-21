// // write your code here

// See all ramen images in the `div` with the id of `ramen-menu`

const ramenMenu = document.getElementById("ramen-menu")

// When the page loads, request the data from the server to get all the ramen objects

const URL = fetch(`http://localhost:3000/ramens`)
.then(resp => resp.json())
.then(ramens => {
    ramens.forEach(addRamenToMenu)
})

// display the image for each of the ramen using an `img` tag inside the `#ramen-menu` div

function addRamenToMenu (ramen) {
    const newImage = document.createElement("img")
    newImage.addEventListener("click", ramenClick)
    newImage.src = ramen.image
    ramenMenu.append(newImage);
}

// Click on an image from the `#ramen-menu` div and see all the info about that
//   ramen displayed inside the `#ramen-detail` div and where it says
//   `insert comment here` and `insert rating here`.

function ramenClick(ramen) {
    const ramenDetails = document.getElementById("ramen-detail")
    const ramenImage = ramenDetails.querySelector("img")
    ramenImage.src = ramen.image
    const ramenName = ramenDetails.querySelector("h2")
    ramenName.textContent = ramen.name
    const ramenRestaurant = ramenDetails.querySelector("h3")
    ramenRestaurant.textContent = ramen.restaurant 
    const ramenRating = document.getElementById("rating-display")
    ramenRating.textContent = ramen.rating
    const ramenComment = document.getElementById("comment-display")
    ramenRating.textContent = ramen.comment
}

// Create a new ramen after submitting the `new-ramen` form

// The new ramen should be added to the`#ramen-menu` div

// The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no
// longer on the page.


