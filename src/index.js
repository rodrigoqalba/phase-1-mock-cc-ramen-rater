// write your code here
const ramenMenuElement = document.getElementById('ramen-menu')

const newRamenForm = document.getElementById('new-ramen')

newRamenForm.addEventListener('submit', e => {
    e.preventDefault()

    //make an object
    //use renderRamenToMenu with the new object
    const newRamen = {}
    newRamen.name = e.target.name.value
    newRamen.restaurant = e.target.restaurant.value
    newRamen.image = e.target.image.value
    newRamen.rating = e.target.rating.value
    newRamen.comment = e.target["new-comment"].value
    renderRamenToMenu(newRamen)

})

const ramenClick = (theRamen) => {
    console.log(theRamen)
    //grab the ramen detail div
    const detailElement = document.getElementById('ramen-detail')
    //add theRamen's attributes to the div
    // an img that needs the image
    const img = detailElement.querySelector('img')
    img.src = theRamen.image

    // an h2 that needs the name 
    const h2 = detailElement.querySelector('h2')
    h2.textContent = theRamen.name

    // an h3 that needs the restaurant 
    const h3 = detailElement.querySelector('h3')
    h3.textContent = theRamen.restaurant

    document.getElementById('ratin-display').textContent = ramen.rating
    document.getElementById('comment-display').innerText = ramen.comment
}

function renderRamenToMenu (ramenObject) {
    // make an img element 
    const newImg = document.createElement('img')
        
    newImg.addEventListener('click', () => {
        ramenClick(oneRamen)
    })
    
    //assign the src attribute to each img element 
    newImg.src = oneRamen.image
    // append to the ramenMenuElement
    ramenMenuElement.append(newImg)
}

const URL = fetch('http://localhost:3000/ramens')
.then(response => response.json())
.then(ramens => {
    /*
        Then display the image for each of the ramen using an 'img' tag
        inside the '#ramen-menu' div.
    */
    ramens.forEach(oneRamen => {

    })
})
