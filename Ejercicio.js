const Formulario = document.querySelector("#Formulario")
const Enviar = document.querySelector(".BtnEnviar")
const Resultado = document.getElementById("Resultado")

let DatosFormulario = {
    Name : "",
    Email:"",
    number:"",
    Cumpleaños:"",
    Postre:"",


}
Formulario.addEventListener("input",(e)=>{
    DatosFormulario[e.target.name]=e.target.value

})

Enviar.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log(DatosFormulario)
    const Nombre = Formulario.Name.value
    const Email = Formulario.Email.value
    const Cumpleaños = Formulario.Cumpleaños.value
    const Postre = Formulario.Postre.checked


    if(Postre){
        const Postr = true
        console.log(`${Nombre} quiere Postre`)
    } else{
        const Postr = false
        console.log(`${Nombre} No quiere Postre`)
    }
    const number = Formulario.number.selectedIndex
    const selectedOption = Formulario.number.options[number]
    const SelectoOptionText = selectedOption.text
    console.log(Nombre,Email,Cumpleaños,SelectoOptionText)
    

 return  Resultado.innerHTML = `
<h2>Datos</h2>
<p>Nombre = ${Nombre}</p>
<p>Nombre = ${Email}</p>
<p>Nombre = ${number}</p>
<p>Cumpleaños = ${Cumpleaños}</p>
<p>Quiere Postre? = ${Postre}
`
    
})
