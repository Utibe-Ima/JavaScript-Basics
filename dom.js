var height = document.querySelector('#height-input')
var weight = document.querySelector('#weight-input')
var result = document.getElementById('bmi-result')
var submit = document.getElementById('submit')

submit.addEventListener('click', function (e) {
    e.preventDefault()
    height = height.value
    weight = weight.value
    var bmi = Number(weight) + Number(height)
    result.textContent = bmi
})

