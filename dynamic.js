function test() {
  const content1 = document.getElementById("content-1")
  const content2 = document.getElementById("content-2")

  let element = self.event.currentTarget
  let target = element.id

  let targetContent = document.getElementById(`content-${target.charAt(target.length - 1)}`)
  console.log(targetContent)
  
  if (targetContent.classList.contains("hide")) {
    targetContent.classList.remove("hide")
  } else {
    targetContent.classList.add("hide")
  }
}