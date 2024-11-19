function showMainContent() {
    document.getElementById('splash').style.opacity = '0';

    document.getElementById("logosection").style.opacity = '1';
    setTimeout(() => {
        document.getElementById('splash').style.display = 'none';
       
        document.getElementById('main').style.display = 'block';
        document.getElementById("logosection").style.display = 'grid';
    }, 500);

    setTimeout(showMainContent, 5000);
}module.exports= {showMainContent}