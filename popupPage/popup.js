window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (event.matches) {
        document.getElementsByTagName('html')[0].className = 'dark';
    } else {
        document.getElementsByTagName('html')[0].className = '';
    }
})
window.onload = function () {
    document.getElementById('web').onclick = function () {
        browser.tabs.create({
            url: 'https://newtab.uyou.org.cn/'
        });
    }
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        document.getElementById('body').style.width = '100vw';
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementsByTagName('html')[0].className = 'dark';
    }
}