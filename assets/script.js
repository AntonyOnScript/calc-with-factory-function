function createCalc() {
    return{
        display: document.querySelector('.display'),
        toStart(){
            document.addEventListener('click',  function (e) {
                let el = e.target
                if(el.classList.contains('number')){
                    this.display.value += el.innerText
                }
            }.bind(this))
        }
    }
}
const calc = createCalc()
calc.toStart()