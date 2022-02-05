function createCalc() {
    return{
        display: document.querySelector('.display'),
        toStart(){
            document.addEventListener('click',  function (e) {
                let el = e.target
                if(el.classList.contains('number')){
                    this.display.value += el.innerText
                }
                if(el.classList.contains('eq')){
                    this.display.value = this.toCalc()
                }
                if(el.classList.contains('clear')){
                    this.display.value = ''
                }
                if(el.classList.contains('del')){
                    this.display.value = this.display.value.slice(0,-1)
                }
            }.bind(this))
        },
        toCalc(){
            try{
                let count = eval(this.display.value)
                if(typeof count==="number"){
                    return count 
                }
                throw('error')
            }catch(e){
                alert(e)
            }
        }
    }
}
const calc = createCalc()
calc.toStart()