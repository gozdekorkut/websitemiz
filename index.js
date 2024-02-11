let uyuyan = document.getElementById('uyuyan')

uyuyan.addEventListener('click', rahatsızEtmeyin)

function rahatsızEtmeyin() {

    alert('Kirpi uyuyor, lütfen rahatsız etme!')
}

let tetikte = document.getElementById('tetikte')

tetikte.addEventListener('click', kurabiye)

function kurabiye() {

    alert('Yoksa o bir kurabiye mi?!')
}

let yürüyüş = document.getElementById('yürüyüş')

yürüyüş.addEventListener('click', kirpiyeYardım)

function kirpiyeYardım() {

    alert('Kirpinin karnı acıkmaya başladı, ona kurabiyesini bulması için yardım eder misin?')
}

let yemek = document.getElementById('kurabiye')

yemek.addEventListener('click', oley)

function oley() {

    alert('Oleyy! Kurabiyeyi buldun, kirpi karnını doyurduğuna göre uykusuna geri dalabilir...')
}