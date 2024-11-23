

function showMainContent_two() {
    document.getElementById('splash').style.opacity = '0';
    document.querySelector(".slider").style.opacity = '1';
    document.querySelector(".continue").style.opacity = '1';
    document.querySelector(".buttons__button").style.opacity = '1';
    document.querySelector(".buttons").style.opacity = '1';
    document.querySelector(".scrollbar").style.opacity = '1';
// setTimeout(showMainContent_two,10000 );
    setTimeout(() => {
        document.getElementById('splash').style.display = 'none';
        document.querySelector(".slider").style.display = 'flex';
        document.querySelector(".buttons").style.display = 'flex';
        document.querySelector(".continue").style.display = 'flex';
        document.querySelector(".buttons__button").style.display = 'flex';
        
        document.querySelector(".scrollbar").style.display = 'flex';
        document.getElementById('main').style.display = 'block';

    }, 6500);
}

// 
module.exports= {showMainContent_two}

