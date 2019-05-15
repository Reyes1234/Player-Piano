function playNote(time) {
  oscillator.time.value = time
}
const notes = {
  a: 'A4',
  b: 'B4',
  c: 'C5',
  d: 'D5',
  e: "E5",
  f: "F5",
  g: "G5"
}
const keys = Object.keys(notes)
 for(const key of keys){
   console.log(key)
 }
