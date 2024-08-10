const grades = [12,17,21]

const student = {
  fullname : "jhon  doe", 
  age : 24,
}

for (const key  in student)
  console.log(key)

//enumerable == accesible in loop

for(const val of grades)
  console.log(val)
