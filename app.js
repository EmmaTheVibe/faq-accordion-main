const questions = document.querySelectorAll('.question')
const src1 = './assets/images/icon-plus.svg'
const src2 = './assets/images/icon-minus.svg'
questions.forEach((question) => {
    question.addEventListener('click', function(){
        const parent = this.parentElement
        const img = this.lastElementChild
        parent.classList.toggle('active')
        if(parent.classList.contains('active')){
            img.src = src2
        } else {
            img.src = src1
        }
        const answers = document.querySelectorAll('.answer');
        answers.forEach((answer) => {
            if(answer !== parent && answer.classList.contains('active')){
                answer.classList.remove('active')
            }
        })
    })
})