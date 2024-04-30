let jariJari = Number(prompt(`masukkan jari jari`))
let luasLingkaran 
    if(jariJari % 7 === 0){
        luasLingkaran = 2 * jariJari * (22/7)
    }else{

        luasLingkaran = 2 * jariJari * 3.14
    }
    console.log(luasLingkaran)

       alert(`Dengan jari jari sepanjang ${jariJari}cm, maka keliling lingkaran adalah ${luasLingkaran}cm `)