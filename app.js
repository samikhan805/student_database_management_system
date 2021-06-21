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
var stuBtn = document.querySelector('.stu-btn')
var searchBtn = document.querySelector('.sear-btn')
var search = document.querySelector('.search')

var GPA, avg, grade, minNum
var count = 0

function doWork() {
  if (Number(math.value) < 33 || Number(physics.value) < 33 || Number(chemistry.value) < 33 || Number(biology.value) < 33 || Number(english.value) < 33) {
    GPA = 2.00
    avg = 0
    grade = 'F'
  }
  else {
    avg = (Number(math.value) + Number(physics.value) + Number(chemistry.value) + Number(biology.value) + Number(english.value)) / 5
  }
  
  // Minimum Number define
  minNum = Math.min(Number(math.value), Number(physics.value), Number(chemistry.value), Number(biology.value), Number(english.value))
  
  // Grade and GPA according to minimum number
  if (minNum >= 80 && minNum <= 100) {
    GPA = 5.00
    grade = 'A+'
  }
  else if (minNum >= 70 && minNum <= 79) {
    GPA = 4.50
    grade = 'A'
  }
  else if (minNum >= 60 && minNum <= 69) {
    GPA = 4.00
    grade = 'A-'
  }
  else if (minNum >= 50 && minNum <= 59) {
    GPA = 3.50
    grade = 'B'
  }
  else if (minNum >= 40 && minNum <= 49) {
    GPA = 3.00
    grade = 'C'
  }
  else if (minNum >= 33 && minNum <= 39) {
    GPA = 2.50
    grade = 'D'
  }
  
  // Vibrator alert
  window.navigator.vibrate(80,80)

  // From input section, storing data
  stuDetails.push({name: nAme.value, id: Number(id.value), math: Number(math.value), physics: Number(physics.value), chemistry: Number(chemistry.value), biology: Number(biology.value), english: Number(english.value), GPA: GPA, average: avg, grade: grade})
  
  // Submit button animation
  btn.innerHTML = 'Submitted'
  btn.style.background = 'green'
  if (btn.innerHTML == 'Submitted') {
    setTimeout(function() {
      btn.innerHTML = 'Submit'
      btn.style.background = '#00ccff'
    }, 1000);
  }
  
  // After clicking button, input values gone
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

stuBtn.addEventListener('click', () => {
  alert('OPPS! Function for this button has not been set yet')
})

// Function of searching button
var isFound = false
searchBtn.addEventListener('click', () => {
  for (var i=0; i < stuDetails.length; i++) {
    if (search.value == stuDetails[i].id) {
      alert('ID: ' + stuDetails[i].id + '\n' + 'Name: ' + stuDetails[i].name + '\n' + 'GPA: ' + stuDetails[i].GPA + '\n' + 'Grade: ' + stuDetails[i].grade + '\n' + '\n' + 'Mathematics: ' + stuDetails[i].math + '\n' + 'Physics: ' + stuDetails[i].physics + '\n' + 'Chemistry: ' + stuDetails[i].chemistry + '\n' + 'Biology: ' + stuDetails[i].biology + '\n' + 'English: ' + stuDetails[i].english + '\n' + 'Average: ' + stuDetails[i].average)
      isFound = true
      break
    }
  }
  if (!isFound) {
    alert('Data not found')
  }
})
