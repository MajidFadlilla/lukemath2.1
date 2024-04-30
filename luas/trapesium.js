let panjang = Number(prompt(`masukkan panjang a (cm)`))
let lebar = Number(prompt("masukkan lebar b (cm)"))
let tinggi = prompt("masukan tinggi")
let jumlahPanjangLebar = panjang + lebar
const luasTrapesium = 1/2 * jumlahPanjangLebar * tinggi
alert( `Dengan panjang a ${panjang}cm, panjang b ${lebar}cm, serta tinggi ${tinggi}cm, 
maka luas trapesium tersebut adalah ${luasTrapesium}cm`)