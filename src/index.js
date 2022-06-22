// - Use this template as a starting point (it won't work properly on Codesandbox, you have to download it to your device) => https://codesandbox.io/s/day-8-dog-owners-app-template-t4um2
// - You'll find a variable called data in the console.log. That's your list of dogs
// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item should be clickable. When you click on an item, the selected dog should display on the main card
// - The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
// - There should be only one card at the time on the screen
// - The card should have a button that toggles for the selected dog between good dog/ bad dog

console.log(data);


// WRITE YOUR CODE BELOW!

let dogList = document.querySelector('.dogs-list')
let dogSection = document.querySelector('.main__dog-section')



function addDogListItem(dog){

    
let listLi = document.createElement('li')
listLi.className = 'dogs-list__button dogs-list__button--add'
listLi.textContent = dog.name
listLi.addEventListener('click' , function(){
    dogList = showDogCard(dog)
})
dogList.append(listLi)

{/* 
        <h2>Mr. Bonkers</h2>
        <img
          src="https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
          alt=""
        />
        <div class="main__dog-section__desc">
          <h3>Bio</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
            minima voluptates libero cumque rerum consequatur optio aliquid sint
            eum maxime illo laborum omnis quo ab rem cupiditate nulla
            perspiciatis ipsum!
          </p>
        </div class="main__dog-section__btn">
        <p><em>Is naughty?</em> yes!</p>
        <button>Good dog!</button>
   */}

}
for (let dog of data){
    addDogListItem(dog)
}


function showDogCard(dog){
    let dogNameh2 = document.createElement('h2')
dogNameh2.textContent = dog.name

let dogImageIMG = document.createElement('img')
dogImageIMG.src = dog.image

let dogBioContainerDIV = document.createElement('div')
dogBioContainerDIV.className = 'main__dog-section__desc'

let bioTitleh3 = document.createElement('h3')
bioTitleh3.textContent = 'Bio'

let dogBioparagraph = document.createElement('p')
dogBioparagraph.textContent = dog.bio

dogSection.append(dogNameh2,dogImageIMG,dogBioContainerDIV,)
dogBioContainerDIV.append(bioTitleh3,dogBioparagraph)
}






