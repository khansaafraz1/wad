let marks = [35, 67, 90, 45, 50, 76, 82];
let passedStudents = marks.filter(function(mark) {
  return mark > 50;
});
console.log("Marks greater than 50 are:", passedStudents);
