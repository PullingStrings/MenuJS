const courses = [
  "Starter",
  "Main",
  "Desserts"
]

function getCourseName(number) {
  return courses[number]
}

function getAllCourseNames() {
  return courses
}

export { getAllCourseNames, getCourseName }
