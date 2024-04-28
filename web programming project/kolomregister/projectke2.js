function input() {
    const passwordinput = document.querySelector(".input").value; //kolom inputnya
    const el_result = document.querySelector(".hasil.input"); 
    const digit = 8;
    
    if (passwordinput.length <= digit) {
        el_result.innerHTML = `password minimal ${digit} digit`;
        
    
    } else if (passwordinput.length <= digit && /\d/.test(passwordinput)){
        el_result.innerHTML = `password anda harus berupa teks dan angka`

    } else {
        el_result.innerHTML = `password = ${passwordinput}`;
        console.log(`password: ${passwordinput}`);
    }
}
