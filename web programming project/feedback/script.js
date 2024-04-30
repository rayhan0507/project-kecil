function submit() {
    const nama = document.querySelector("#nama").value;
    const password = document.querySelector("#password").value;
    const submit = document.querySelector("#result");
    submit.innerHTML = "login berhasil";
    console.log(`nama: ${nama}`);
    console.log(`password: ${password}`);

}

function feedback() {
    const nama = document.querySelector("#nama").value;
    const feedback = document.querySelector(".textarea.padding").value;
    const result = document.querySelector("#result2");
    result.innerHTML = `terimakasih atas feedbacknya! ${nama}`;
    console.log(" ");
    console.log(`feedback: ${feedback}`)

}