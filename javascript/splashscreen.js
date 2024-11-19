function showMainContent() {
    document.getElementById('splash').style.opacity = '0';
    document.getElementById('logosection').style.opacity = '1';
    setTimeout(() => {
        document.getElementById('splash').style.display = 'none';
        document.getElementById('logosection').style.display = 'grid';
        document.getElementById('main').style.display = 'block';
    }, 500);
}

setTimeout(showMainContent, 3000);
module.exports= {showMainContent}