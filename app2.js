// querySelector
// addEventListener
var stuDetails = []
var nAme = document.querySelector('.name-in')
var id = document.querySelector('.id')
var math = document.querySelector('.math')
var physics = document.querySelector('.phy')
var chemistry = document.querySelector('.chem')
var biology = document.querySelector('.bio')
var english = document.querySelector('.eng')
var btn = document.querySelector('.btn')
var GPA, avg, grade

function doWork() {
  if (Number(math.value) < 33 || Number(physics.value) < 33 || Number(chemistry.value) < 33 || Number(biology.value) < 33 || Number(english.value) < 33) {
    avg = 0
    grade = 'F'
  }
  else if (Number(math.value) >= 80 && Number(math.value) <= 100 && Number(physics.value) >= 80 && Number(physics.value) <= 100 && Number(chemistry.value) >= 80 && Number(chemistry.value) <= 100 && Number(biology.value) >= 80 && Number(biology.value) <= 100 && Number(english.value) >= 80 && Number(english.value) <= 100) {
    
    avg = (Number(math.value) + Number(physics.value) + Number(chemistry.value) + Number(biology.value) + Number(english.value)) / 5
  }
  else if (Number(math.value) >= 70 && Number(math.value) <= 79 || Number(physics.value) >= 70 && Number(physics.value) <= 79 || Number(chemistry.value) >= 70 && Number(chemistry.value) <= 79 || Number(biology.value) >= 70 && Number(biology.value) <= 79 || Number(english.value) >= 70 && Number(english.value) <= 79) {
    
    avg = (Number(math.value) + Number(physics.value) + Number(chemistry.value) + Number(biology.value) + Number(english.value)) / 5
  }
  else if (Number(math.value) >= 60 && Number(math.value) <= 69 || Number(physics.value) >= 60 && Number(physics.value) <= 69 || Number(chemistry.value) >= 60 && Number(chemistry.value) <= 69 || Number(biology.value) >= 60 && Number(biology.value) <= 69 || Number(english.value) >= 60 && Number(english.value) <= 69) {
    
    avg = (Number(math.value) + Number(physics.value) + Number(chemistry.value) + Number(biology.value) + Number(english.value)) / 5
  }
  else if (Number(math.value) >= 50 && Number(math.value) <= 59 || Number(physics.value) >= 50 && Number(physics.value) <= 59 || Number(chemistry.value) >= 50 && Number(chemistry.value) <= 59 || Number(biology.value) >= 50 && Number(biology.value) <= 59 || Number(english.value) >= 50 && Number(english.value) <= 59) {
    
    avg = (Number(math.value) + Number(physics.value) + Number(chemistry.value) + Number(biology.value) + Number(english.value)) / 5
  }
  else if (Number(math.value) >= 40 && Number(math.value) <= 49 || Number(physics.value) >= 40 && Number(physics.value) <= 49 || Number(chemistry.value) >= 40 && Number(chemistry.value) <= 49 || Number(biology.value) >= 40 && Number(biology.value) <= 49 || Number(english.value) >= 40 && Number(english.value) <= 49) {
    
    avg = (Number(math.value) + Number(physics.value) + Number(chemistry.value) + Number(biology.value) + Number(english.value)) / 5
  }
  else if (Number(math.value) >= 33 && Number(math.value) <= 39 || Number(physics.value) >= 33 && Number(physics.value) <= 39 || Number(chemistry.value) >= 33 && Number(chemistry.value) <= 39 || Number(biology.value) >= 33 && Number(biology.value) <= 39 || Number(english.value) >= 33 && Number(english.value) <= 39) {
    
    avg = (Number(math.value) + Number(physics.value) + Number(chemistry.value) + Number(biology.value) + Number(english.value)) / 5
  }
  // Grade and GPA section
  if (avg >= 80 && avg <= 100) {
    GPA = 5.00 
    grade = 'A+'
  }
  else if (avg >= 70 && avg <= 79) {
    GPA = 4.50
    grade = 'A'
  }
  else if (avg >= 60 && avg <= 69) {
    GPA = 4.00
    grade = 'A-'
  }
  else if (avg >= 50 && avg <= 59) {
    GPA = 3.50
    grade = 'B'
  }
  else if (avg >= 40 && avg <= 49) {
    GPA = 3.00
    grade = 'C'
  }
  else if (avg >= 33 && avg <= 39) {
    GPA = 2.50
    grade = 'D'
  }
  else if (avg == 0) {
    GPA = 2.00
    grade = 'Fail'
  }
  
  stuDetails.push({name: nAme.value, id: Number(id.value), math: Number(math.value), physics: Number(physics.value), chemistry: Number(chemistry.value), biology: Number(biology.value), english: Number(english.value), GPA: GPA, average: avg, grade: grade})
  
  btn.innerHTML = 'Submitted'
  btn.style.background = 'green'
  if (btn.innerHTML == 'Submitted') {
    setTimeout(function() {
      btn.innerHTML = 'Submit'
      btn.style.background = '#00ccff'
    }, 1000);
  }
  
  nAme.value = ''
  id.value = ''
  math.value = ''
  physics.value = ''
  chemistry.value = ''
  biology.value = ''
  english.value = ''
  
  console.log(stuDetails);
}

function main() {
  if (nAme.value == '' && id.value == '' && math.value == '' && physics.value == '' && chemistry.value == '' && biology.value == '' && english.value == '') {
    alert('Please fulfill all fields')
  }
  else if (nAme.value == '') {
    alert('Please define the student with name')
  }
  else if (id.value == '') {
    alert('Please input student\'s ID')
  }
  else if (math.value == '') {
    alert('Please input Mathematics mark')
  }
  else if (physics.value == '') {
    alert('Please input Physics mark')
  }
  else if (chemistry.value == '') {
    alert('Please input Chemistry mark')
  }
  else if (biology.value == '') {
    alert('Please input Biology mark')
  }
  else if (english.value == '') {
    alert('Please input English mark')
  }
  else {
    doWork()
  }
}

btn.addEventListener('click', () => {
  main()
})
