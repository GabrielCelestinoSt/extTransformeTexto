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
        
})

