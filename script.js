site_project = 'https://api.github.com/repos/Venicck/Introduction';
primarybody = document.getElementById('body-primary');
secondarybody = document.getElementById('body-secondary');
topname = document.getElementById('topbar-name');
lastupdated = document.getElementById('last-updated');

function ShowPrimary() {
    let favicon = document.querySelector("link[rel~='icon']");
    secondarybody.style.display = 'none';
    primarybody.style.display = 'block';
    document.title = 'ベニックのホームページ';
    favicon.href = './img/veni.png';
}

function ShowSecondary() {
    let favicon = document.querySelector("link[rel~='icon']");
    primarybody.style.display = 'none';
    secondarybody.style.display = 'block';
    document.title = 'ぽりとすのホームページ'; // サイトタイトルを変更
    favicon.href = './img/poly.png'
}

function GoTo(link) {
    window.open(link, '_blank');
}

window.onload = function() {
    let pram_urlstr = window.location.href;
    let pram_url = new URL(pram_urlstr);
    let params = pram_url.searchParams.get('t');
    if (params == null) {
        ShowPrimary();
    } else if (params == 'v') {
        ShowPrimary();
    } else if (params == 'p') {
        ShowSecondary();
    }

    fetch(site_project).then(
        data => data.json()
    ).then (
        json => {
            lastupdated.textContent = 'Last Updated: ' + json.updated_at.split('T')[0];
        }
    );

}