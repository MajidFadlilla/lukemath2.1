// let jariJari = prompt(`masukkan jari jari`)
// let phi = Math.PI

// let luasLingkaran = phi * jariJari

let jariJari = Number(prompt(`masukkan jari jari`))
let phi1 = (22/7)
let phi2 = 3.14
let luasLingkaran 
    if(jariJari % 7 === 0){
        luasLingkaran = jariJari * jariJari * (22/7)
    }else{

        luasLingkaran = jariJari * jariJari * 3.14
    }
    console.log(luasLingkaran)

       alert(`Dengan jari jari sepanjang ${jariJari}cm, luas lingkaran adalah ${luasLingkaran}cm `)