const quiz = document.getElementById("quiz-form")
const nota_id = document.getElementById("nota")
const resultado = document.getElementById("resultado")
let nota = 0
let respostas = []
let respostas_certas = ["1B","2C","3D","4B","5B","6C","7C","8B","9C","10C"]

quiz.addEventListener(("submit"), (e) => {
    e.preventDefault();
    nota = 0
    
    for(i = 0; i < 40; i++){
        if(quiz[i].checked == true){
            respostas.push(quiz[i].id)
        }
    }

    for(i = 0; i < respostas_certas.length; i++){
        if(respostas[i] == respostas_certas[i]){
            nota++
        }
    }


    localStorage.setItem("nota-quiz",nota)
    lançar_nota()
})

function lançar_nota(){ 
    resultado.style.display = "block"
    nota_id.textContent = localStorage.getItem("nota-quiz")
}