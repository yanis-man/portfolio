async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
        await waitForMs(delay);
      eleRef.innerHTML += (letters[i]);
      i++
    }
    return;
  }
async function eraseSetence(sentence, eleRef, delay = 100)
{
    await waitForMs(delay*sentence.length)
    console.log("called")
    const letters = sentence.split("")
    let i = 0;
    while(i < letters.length)
    {
        await waitForMs(delay)
        letters = letters.pop()
        eleRef.innerHTML = letters
        i++
    }
}
  
async function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  typeSentence("MANSOURI YANIS", document.getElementById("name"))
// animate the name element when the user want to see my name
document.getElementById("name-click").addEventListener("click", async (e) => 
{ 
    const el = document.getElementById("name").style
    for(let i in [1,2,3,4])
    {
        el.color = "#222222"
        await waitForMs(Math.random()*100 % 60 * 2.5)
        el.color = "#d7d7d7"
        await waitForMs(Math.random()*100 % 60 *2.5)
    }
    el.textShadow = "rgba(215,215,215,1) 0px 0px 27px;"
    
})

//compute my age
yearTillBirth = new Date().getFullYear() - 2003
MonthTillBirth =  new Date().getMonth() - 3 +1
daysTilBirth = Math.floor((new Date().getTime() - new Date("03/02/2003").getTime())  / (1000 * 60 * 60 * 24) % 31)

full_sentence = `${yearTillBirth} yo ${MonthTillBirth} months ${daysTilBirth} days`
document.getElementById("age").innerHTML = full_sentence