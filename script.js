const categorySelect=document.getElementById("category")
const nextButton=document.getElementById("next")
// const nextButton=document.querySelector('#next')
const previousButton=document.querySelector('#previous')
const randomButton=document.querySelector('#random')
const quoteDiv=document.querySelector('.quote')

console.log(categorySelect);


const quotes = {
    Science: [
        "Science is the key to our future.",
        "The good thing about science is that it’s true whether or not you believe in it.",
        "Equipped with his five senses, man explores the universe around him and calls the adventure Science.",
        "We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.",
        "For small creatures such as we the vastness is bearable only through love.",
        "Time is too slow for those who wait, too swift for those who fear, too long for those who grieve, too short for those who rejoice, but for those who love, time is eternity."
    ],
    Finance: [
        "An investment in knowledge pays the best interest.",
        "The stock market is filled with individuals who know the price of everything, but the value of nothing.",
        "The four most dangerous words in investing are: 'This time it's different.'",
        "Wealth consists not in having great possessions, but in having few wants.",
        "Only the educated are free."
    ],
    Famous: [
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "The way to get started is to quit talking and begin doing.",
        "Your time is limited, don't waste it living someone else's life.",
        "Avoid popularity; it has many snares, and no real benefit.",
        "Patience and Diligence, like faith, remove mountains."
    ]
};

let currentCategory=categorySelect.value;
let currentIndex=0;

function displayQuote(category,index){
    const quoteList=quotes[category]
    if(quoteList && quoteList.length>0){
        quoteDiv.textContent=quoteList[index]
    }
}

categorySelect.addEventListener('change',function(){
    currentCategory=categorySelect.value
    currentIndex=0
    displayQuote(currentCategory,currentIndex)
})

nextButton.addEventListener('click',function(){ 
    const quoteList=quotes[currentCategory]
    if(quoteList && currentIndex<quoteList.length-1){
        currentIndex++;
    }
    else{
        currentIndex=0;
    }
   
    
    displayQuote(currentCategory,currentIndex)
})

previousButton.addEventListener('click',function(){
    const quoteList=quotes[currentCategory]
    if(quoteList && currentIndex>0){
        currentIndex--;
    }
    else{
        currentIndex=quoteList.length-1;
    }
    displayQuote(currentCategory,currentIndex)
})


randomButton.addEventListener('click',function(){
    const quoteList=quotes[currentCategory]

    
    
    if(quoteList && quoteList.length>0){
        currentIndex=Math.floor(Math.random()*quoteList.length)
       
        
        displayQuote(currentCategory,currentIndex)
    }
    
   
})
displayQuote(currentCategory,currentIndex)

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;  // Reference to the body element
    const themeSwitch = document.getElementById('theme-switch');  // The checkbox

    // Function to toggle themes based on checkbox state
    themeSwitch.addEventListener('change', function () {
        if (this.checked) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
        }
    });
});
