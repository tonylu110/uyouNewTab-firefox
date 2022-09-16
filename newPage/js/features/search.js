import { elemenetGetId, elemenetGetClass, elemIdSty, elemClassSty } from "../main/function.js";

export function searchUse() {
    //This is searchBar function
    elemenetGetId('keywords').onclick = () => { //get searchEngin img
        getSearchEngine();
    }
    function getSearchEngine() { //get searchEngin img
        var s = elemenetGetId('searchEngine').src;
        var engine = s.substring(s.lastIndexOf("/") + 1)
    }

    elemenetGetId('setCus').onclick = () => {
        var cusSea = elemenetGetId('cusSeaIn').value;
        browser.storage.local.set({ 'cusSea': cusSea });
        searchChangeUse();
    }

    //change search engine
    elemenetGetId('searchEngine').onclick = () => {
        var hide = elemIdSty('moreSearch').opacity;
        if (hide == '0') {
            setTimeout(() => {
                elemIdSty('moreSearch').opacity = '1.0';
            },100)
            elemenetGetId('moreSearch').style.transform = 'translateY(100px)';
            elemIdSty('moreSearch').zIndex = ''
            elemenetGetId('click').onclick = () => {
                elemIdSty('moreSearch').opacity = '0.0';
                elemenetGetId('moreSearch').style.transform = '';
                elemIdSty('moreSearch').zIndex = ''
            }
        } else {
            elemIdSty('moreSearch').opacity = '0.0';
            elemenetGetId('moreSearch').style.transform = '';
            elemIdSty('moreSearch').zIndex = '3'
        }
    }

    //click img to engine img
    elemenetGetId('google').onclick = () => {
        browser.storage.local.set({ 'search': 'google' });
        elemIdSty('moreSearch').opacity = '0.0';
        elemenetGetId('moreSearch').style.transform = '';
        elemIdSty('moreSearch').zIndex = '3'
        elemenetGetId('searchEngine').src = 'imgs/google.png';// change search engine image to google
    }
    elemenetGetId('bing').onclick = () => {
        browser.storage.local.set({ 'search': 'bing' });
        elemIdSty('moreSearch').opacity = '0.0';
        elemenetGetId('moreSearch').style.transform = '';
        elemIdSty('moreSearch').zIndex = '3'
        elemenetGetId('searchEngine').src = 'imgs/bing-logo.png';// change search engine image to bing
    }
    elemenetGetId('baidu').onclick = () => {
        browser.storage.local.set({ 'search': 'baidu' });
        elemIdSty('moreSearch').opacity = '0.0';
        elemenetGetId('moreSearch').style.transform = '';
        elemIdSty('moreSearch').zIndex = '3'
        elemenetGetId('searchEngine').src = 'imgs/baidu.png';//change search engine image to baidu
    }
    elemenetGetId('ddg').onclick = () => {
        browser.storage.local.set({ 'search': 'ddg' });
        elemIdSty('moreSearch').opacity = '0.0';
        elemenetGetId('moreSearch').style.transform = '';
        elemIdSty('moreSearch').zIndex = '3'
        elemenetGetId('searchEngine').src = 'imgs/ddg.svg';
    }
    elemenetGetId('yandex').onclick = () => {
        browser.storage.local.set({ 'search': 'yandex' });
        elemIdSty('moreSearch').opacity = '0.0';
        elemenetGetId('moreSearch').style.transform = '';
        elemIdSty('moreSearch').zIndex = '3'
        elemenetGetId('searchEngine').src = 'imgs/yandex.png';
    }
    elemenetGetId('sougou').onclick = () => {
        browser.storage.local.set({ 'search': 'sougou' });
        elemIdSty('moreSearch').opacity = '0.0';
        elemenetGetId('moreSearch').style.transform = '';
        elemIdSty('moreSearch').zIndex = '3'
        elemenetGetId('searchEngine').src = 'imgs/sougou.png';
    }
    elemenetGetId('cus').onclick = () => {
        browser.storage.local.set({ 'search': 'cus' });
        elemIdSty('moreSearch').opacity = '0.0';
        elemenetGetId('moreSearch').style.transform = '';
        elemIdSty('moreSearch').zIndex = '3'
        elemenetGetId('searchEngine').src = 'imgs/search.png';
    }
}

export function searchOnload() {
    browser.storage.local.get(['search'], (budget) => {
        if (budget.search == 'google') {
            elemenetGetId('searchEngine').hidden = false;
            elemenetGetId('searchEngine').src = 'imgs/google.png';// change search engine image to google
        } else if (budget.search == 'bing') {
            elemenetGetId('searchEngine').hidden = false;
            elemenetGetId('searchEngine').src = 'imgs/bing-logo.png';// change search engine image to bing
        } else if (budget.search == 'ddg') {
            elemenetGetId('searchEngine').hidden = false;
            elemenetGetId('searchEngine').src = 'imgs/ddg.svg';
        } else if (budget.search == 'yandex') {
            elemenetGetId('searchEngine').hidden = false;
            elemenetGetId('searchEngine').src = 'imgs/yandex.png';
        } else if (budget.search == 'sougou') {
            elemenetGetId('searchEngine').hidden = false;
            elemenetGetId('searchEngine').src = 'imgs/sougou.png';
        } else if (budget.search == 'cus') {
            elemenetGetId('searchEngine').hidden = false;
            elemenetGetId('searchEngine').src = 'imgs/search.png';
        } else {
            elemenetGetId('searchEngine').hidden = false;
            elemenetGetId('searchEngine').src = 'imgs/baidu.png';//change search engine image to baidu
        }
    })
}

export function moreSearch() {
    function changeAn(an, button) {
        if (elemenetGetId(an).className == 'otherFeatures') {
            elemenetGetId(an).className = 'otherFeaturesBefore';
            if (an == 'cusAn') {
                elemenetGetId(an).innerText = '禁用';
            } else {
                elemenetGetId(an).innerText = '隐藏';
            }
            elemenetGetId(button).style.display = 'none';
        } else {
            if (an == 'cusAn') {
                elemenetGetId(an).innerText = '启用';
            } else {
                elemenetGetId(an).innerText = '显示';
            }
            elemenetGetId(an).className = 'otherFeatures';

            elemenetGetId(button).style.display = '';
        }
    }
    elemenetGetId('cusAn').onclick = () => {
        changeAn('cusAn', 'cus');
        if (elemenetGetId('cusAn').className == 'otherFeaturesBefore') {
            browser.storage.local.set({ 'cus': 'hide' });
            elemenetGetId('seaIn').style.display = 'none';
            elemenetGetClass('seaBtn')[0].style.borderRadius = '';
            elemenetGetClass('seaBtn')[0].style.background = ''
        } else {
            browser.storage.local.set({ 'cus': 'show' });
            elemenetGetId('seaIn').style.display = '';
            elemenetGetClass('seaBtn')[0].style.borderRadius = '10px 10px 0px 0px';
            browser.storage.local.get(['dlMode'], (budget) => {
                let dlMode = budget.dlMode;
                if (typeof (dlMode) == 'undefined') {
                    dlMode = '';
                }
                if (dlMode == '') {
                    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                        elemenetGetClass('seaBtn')[0].style.background = '#44444470'
                    } else {
                        elemenetGetClass('seaBtn')[0].style.background = '#ffffff70'
                    }
                } else if (dlMode == 'dark') {
                    elemenetGetClass('seaBtn')[0].style.background = '#44444470'
                } else if (dlMode == 'light') {
                    elemenetGetClass('seaBtn')[0].style.background = '#ffffff70'
                }
            })

        }
    }
    elemenetGetId('googleAn').onclick = () => {
        changeAn('googleAn', 'google');
        if (elemenetGetId('googleAn').className == 'otherFeaturesBefore') {
            browser.storage.local.set({ 'google': 'hide' });
        } else {
            browser.storage.local.set({ 'google': 'show' });
        }
    }
    elemenetGetId('bingAn').onclick = () => {
        changeAn('bingAn', 'bing');
        if (elemenetGetId('bingAn').className == 'otherFeaturesBefore') {
            browser.storage.local.set({ 'bing': 'hide' });
        } else {
            browser.storage.local.set({ 'bing': 'show' });
        }
    }
    elemenetGetId('baiduAn').onclick = () => {
        changeAn('baiduAn', 'baidu');
        if (elemenetGetId('baiduAn').className == 'otherFeaturesBefore') {
            browser.storage.local.set({ 'baidu': 'hide' });
        } else {
            browser.storage.local.set({ 'baidu': 'show' });
        }
    }
    elemenetGetId('ddgAn').onclick = () => {
        changeAn('ddgAn', 'ddg');
        if (elemenetGetId('ddgAn').className == 'otherFeaturesBefore') {
            browser.storage.local.set({ 'ddg': 'hide' });
        } else {
            browser.storage.local.set({ 'ddg': 'show' });
        }
    }
    elemenetGetId('yandexAn').onclick = () => {
        changeAn('yandexAn', 'yandex');
        if (elemenetGetId('yandexAn').className == 'otherFeaturesBefore') {
            browser.storage.local.set({ 'yandex': 'hide' });
        } else {
            browser.storage.local.set({ 'yandex': 'show' });
        }
    }
    elemenetGetId('sougouAn').onclick = () => {
        changeAn('sougouAn', 'sougou');
        if (elemenetGetId('sougouAn').className == 'otherFeaturesBefore') {
            browser.storage.local.set({ 'sougou': 'hide' });
        } else {
            browser.storage.local.set({ 'sougou': 'show' });
        }
    }
    browser.storage.local.get(['google', 'bing', 'baidu', 'ddg', 'yandex', 'sougou', 'cus', 'cusSea'], (budget) => {
        let google = budget.google;
        let bing = budget.bing;
        let baidu = budget.baidu;
        let ddg = budget.ddg;
        let yandex = budget.yandex;
        let sougou = budget.sougou;
        let cus = budget.cus;
        function showLoadSearch(an, button) {
            elemenetGetId(an).className = 'otherFeatures';
            if (an == 'cusAn') {
                elemenetGetId(an).innerText = '启用';
            } else {
                elemenetGetId(an).innerText = '显示';
            }
            elemenetGetId(button).style.display = '';
        }
        function hideLoadSearch(an, button) {
            elemenetGetId(an).className = 'otherFeaturesBefore';
            if (an == 'cusAn') {
                elemenetGetId(an).innerText = '禁用';
            } else {
                elemenetGetId(an).innerText = '隐藏';
            }
            elemenetGetId(button).style.display = 'none';
        }
        if (typeof (google) == 'undefined') {
            google = 'show';
        }
        if (typeof (bing) == 'undefined') {
            bing = 'show';
        }
        if (typeof (baidu) == 'undefined') {
            baidu = 'show';
        }
        if (typeof (ddg) == 'undefined') {
            ddg = 'hide';
        }
        if (typeof (yandex) == 'undefined') {
            yandex = 'hide';
        }
        if (typeof (sougou) == 'undefined') {
            sougou = 'hide';
        }
        if (typeof (cus) == 'undefined') {
            cus = 'hide';
        }
        if (google == 'show') {
            showLoadSearch('googleAn', 'google')
        } else if (google == 'hide') {
            hideLoadSearch('googleAn', 'google')
        }
        if (bing == 'show') {
            showLoadSearch('bingAn', 'bing')
        } else if (bing == 'hide') {
            hideLoadSearch('bingAn', 'bing')
        }
        if (baidu == 'show') {
            showLoadSearch('baiduAn', 'baidu')
        } else if (baidu == 'hide') {
            hideLoadSearch('baiduAn', 'baidu')
        }
        if (ddg == 'show') {
            showLoadSearch('ddgAn', 'ddg')
        } else if (ddg == 'hide') {
            hideLoadSearch('ddgAn', 'ddg')
        }
        if (yandex == 'show') {
            showLoadSearch('yandexAn', 'yandex')
        } else if (yandex == 'hide') {
            hideLoadSearch('yandexAn', 'yandex')
        }
        if (sougou == 'show') {
            showLoadSearch('sougouAn', 'sougou')
        } else if (sougou == 'hide') {
            hideLoadSearch('sougouAn', 'sougou')
        }
        if (cus == 'show') {
            showLoadSearch('cusAn', 'cus')
            elemenetGetId('seaIn').style.display = '';
            elemenetGetClass('seaBtn')[0].style.borderRadius = '10px 10px 0px 0px';
            browser.storage.local.get(['dlMode'], (budget) => {
                let dlMode = budget.dlMode;
                if (typeof (dlMode) == 'undefined') {
                    dlMode = '';
                }
                if (dlMode == '') {
                    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                        elemenetGetClass('seaBtn')[0].style.background = '#44444470'
                    } else {
                        elemenetGetClass('seaBtn')[0].style.background = '#ffffff70'
                    }
                } else if (dlMode == 'dark') {
                    elemenetGetClass('seaBtn')[0].style.background = '#44444470'
                } else if (dlMode == 'light') {
                    elemenetGetClass('seaBtn')[0].style.background = '#ffffff70'
                }
            })
        } else if (cus == 'hide') {
            hideLoadSearch('cusAn', 'cus')
        }
    })
}

export function searchChangeUse() {
    var screenWidth = window.innerWidth;
    if (screenWidth > 813) {
        elemenetGetId('keywords').addEventListener("keyup", () => {
            if (elemenetGetId('keywords').value) {
                elemIdSty('searchBtn').width = '45px'
                elemIdSty('searchBtn').color = ''
                elemClassSty('keywordsRight', 0).display = ''
            } else {
                elemIdSty('searchBtn').width = ''
                elemIdSty('searchBtn').color = 'transparent'
                elemClassSty('keywordsRight', 0).display = 'none'
            }
        })
    }
    browser.storage.local.get(['cusSea'], (budget) => {
        let cusSea = budget.cusSea;
        function search(cusSea) {
            elemenetGetId('keywords').onkeydown = () => {
                var s = elemenetGetId('searchEngine').src;
                var engine = s.substring(s.lastIndexOf("/") + 1)
                function sea(cus) {
                    var keywords = elemenetGetId('keywords').value; //get keywords
                    if (engine == 'google.png') {
                        window.open('https://www.google.com/search?q=' + keywords, '_self'); //if engine is google google to google search
                    } else if (engine == 'baidu.png') {
                        window.open('https://www.baidu.com/s?wd=' + keywords, '_self'); //if engine is baidu to baidu search
                    } else if (engine == 'bing-logo.png') {
                        window.open('https://cn.bing.com/search?q=' + keywords, '_self'); //if engine is bing to bing search
                    } else if (engine == 'ddg.svg') {
                        window.open('https://duckduckgo.com/?q=' + keywords, '_self');
                    } else if (engine == 'yandex.png') {
                        window.open('https://yandex.com/search/?text=' + keywords, '_self');
                    } else if (engine == 'sougou.png') {
                        window.open('https://www.sogou.com/web?query=' + keywords, '_self');
                    }
                    if (cus != undefined && engine == 'search.png') {
                        window.open(cus + keywords, '_self');
                    }
                    if (!cus && engine == 'search.png') {
                        elemenetGetId('keywords').value = '未设置自定义的搜索引擎'
                        setTimeout(() => {
                            elemenetGetId('keywords').value = ''
                        }, 1000)
                    }
                }
                if (event.keyCode == 13) {
                    sea(cusSea);
                }
                elemenetGetId('searchBtn').onclick = () => {
                    sea(cusSea);
                }
            }
        }
        if (typeof (cusSea) == 'undefined') {
            cusSea = '';
        }
        if (cusSea != '') {
            search(cusSea);
            elemenetGetId('cusSeaIn').value = cusSea
        } else {
            search();
        }
    })
}

export function showOrHideSearch() {
    var hideSearchBar = elemenetGetId('hideSearchBar')
    hideSearchBar.onclick = () => {
        if (hideSearchBar.innerText == '显示') {
            hideSearchBar.innerText = '隐藏'
            hideSearchBar.className = 'otherFeaturesBefore'
            hideOrShow('hide')
        } else {
            hideSearchBar.innerText = '显示'
            hideSearchBar.className = 'otherFeatures'
            hideOrShow('show')
        }
    }
    function hideOrShow(hs) {
        if (hs == 'show') {
            elemIdSty('searchbar').display = ''
            browser.storage.local.set({ 'seaBarHS': hs });
        } else {
            elemIdSty('searchbar').display = 'none'
            browser.storage.local.set({ 'seaBarHS': hs });
        }
    }
    browser.storage.local.get(['seaBarHS'], (budget) => {
        var seaBarHS = budget.seaBarHS;
        if (typeof (seaBarHS) == 'undefined') {
            seaBarHS = 'show';
        }
        if (seaBarHS == 'hide') {
            hideSearchBar.innerText = '隐藏'
            hideSearchBar.className = 'otherFeaturesBefore'
            elemIdSty('searchbar').display = 'none'
        }
    })
}