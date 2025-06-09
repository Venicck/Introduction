primarybody = document.getElementById('body-primary');
secondarybody = document.getElementById('body-secondary');
topname = document.getElementById('topbar-name');

function ShowPrimary() {
    secondarybody.style.display = 'none';
    primarybody.style.display = 'block';
    topname.textContent = "ベニック の ホームページ";
}

function ShowSecondary() {
    primarybody.style.display = 'none';
    secondarybody.style.display = 'block';
    topname.textContent = "ぽりとす の ホームページ";
}

function GoTo(link) {
    window.open(link, '_blank');
}