window.document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("btnMaiuscula").addEventListener("click",
        function(){
            let input = document.querySelector("#inputUser").value
            document.querySelector("#resultado").innerHTML = "Resultado: " + input.toUpperCase()
        })

    document.getElementById("btnMinuscula").addEventListener("click",
        function(){
            let input = document.querySelector("#inputUser").value
            document.querySelector("#resultado").innerHTML = "Resultado: " + input.toLowerCase()
        })

    document.getElementById("btnPrimeMaiuscula").addEventListener("click",
    function() {
        let input = document.querySelector("#inputUser").value;

        let frase = input.toLowerCase().trim();
        
        if (frase.length === 0) {
            return;
        }

        const trechos = frase.split(/([.!?])/);
        
        let frasefinal = "";
        let isFraseStart = true;

        for (let item of trechos) {
            let trecho = item.trim();

            if (trecho.length === 0) {
                continue;
            }

            if (trecho === "." || trecho === "!" || trecho === "?") {
                frasefinal += trecho + " "; 
                isFraseStart = true;
            } 

            else if (isFraseStart && trecho.length > 0) {
                let primeira = trecho.charAt(0).toUpperCase();
                let resto = trecho.slice(1);

                frasefinal += primeira + resto;
                isFraseStart = false;
            } 

            else {
                frasefinal += trecho;
            }
        }

        document.querySelector("#resultado").innerHTML = "Resultado: " + frasefinal.trim();
    


        // const primeira = input[0].toUpperCase()
        // const resto = input.slice(1)
        // document.querySelector("#resultado").innerHTML = "Resultado: " + primeira + resto.toLowerCase()
    })

    document.getElementById("btnLimpar").addEventListener("click",
    function(){
       document.querySelector("#inputUser").value = "" 
       document.querySelector("#resultado").innerHTML = "Resultado: " 
    })

    document.getElementById("btnNova").addEventListener("click",
    function(){
        let input = document.querySelector("#inputUser").value

        let tamanho = input.length
        let fraseInvertida = ""

        for(let i = tamanho-1; i>=0; i--){
            fraseInvertida += input[i]
        }

        document.querySelector("#resultado").innerHTML = "Resultado: " + fraseInvertida
    })
        
})

