

const sliderElement = document.querySelector('.slider')
const ContiniueButton = document.querySelector('.continue')
const radioElements = Array.from(document.querySelectorAll('.scrollbar__radio'));

function sliders(){
    radioElements.forEach((element, index) => element.addEventListener('change', () =>
        {
        const sliderWidth = Math.ceil(sliderElement.getBoundingClientRect().width);
    sliderElement.scrollTo(sliderWidth*index, 0);

    }))
ContiniueButton.addEventListener('click',()=>{
    const checkedRadio = radioElements.find(radio=> radio.checked);
    const nextRadioButton= checkedRadio.parentElement.nextElementSibling
    if(nextRadioButton===null){
        window.location='./index.html'
    }
    else{
        nextRadioButton.click()
    }
})};
module.exports= {sliders}