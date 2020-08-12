const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
let nou1 = document.querySelector('#nou1')
let adj1 = document.querySelector('#adj1')
let ver1 = document.querySelector('#ver1')
let adv1 = document.querySelector('#adv1')
let nou2 = document.querySelector('#nou2')
let adj2 = document.querySelector('#adj2')
let pno1 = document.querySelector('#pno1')
let pno2 = document.querySelector('#pno2')
let pno3 = document.querySelector('#pno3')
let pob1 = document.querySelector('#pob1')
let nou3 = document.querySelector('#nou3')
let nou4 = document.querySelector('#nou4')
let nou5 = document.querySelector('#nou5')
let nou6 = document.querySelector('#nou6')
let pob2 = document.querySelector('#pob2')
let startPirate = document.querySelector('#startPirate')
let resetPirate = document.querySelector('#resetPirate')
let fullLibPirate = document.querySelector('#fullLibPirate')

let ffcy = document.querySelector("#ffcy")
let fav1 = document.querySelector("#fav1")
let faj1 = document.querySelector("#faj1")
let fani = document.querySelector("#fani")
let fvg1 = document.querySelector("#fvg1")
let fvb1 = document.querySelector("#fvb1")
let fvg2 = document.querySelector("#fvg2")
let fav2 = document.querySelector("#fav2")
let faj2 = document.querySelector("#faj2")
let fapl = document.querySelector("#fapl")
let fatl = document.querySelector("#fatl")
let fpob = document.querySelector("#fpob")
let fvb2 = document.querySelector("#fvb2")
let startFish = document.querySelector('#startFish')
let resetFish = document.querySelector('#resetFish')
let fullLibFish = document.querySelector('#fullLibFish')


let gaj1 = document.querySelector("#gaj1")
let gvb1 = document.querySelector("#gvb1")
let gvb2 = document.querySelector("#gvb2")
let gvb3 = document.querySelector("#gvb3")
let gpn1 = document.querySelector("#gpn1")
let gvb4 = document.querySelector("#gvb4")
let gvb5 = document.querySelector("#gvb5")
let pvb1 = document.querySelector("#pvb1")
let gpn2 = document.querySelector("#gpn2")
let gaj2 = document.querySelector("#gaj2")
let gvb6 = document.querySelector("#gvb6")
let gpn3 = document.querySelector("#gpn3")
let gsn1 = document.querySelector("#gsn1")
let gvb7 = document.querySelector("#gvb7")
let pvb2 = document.querySelector("#pvb2")
let gsn2 = document.querySelector("#gsn2")
let gsn3 = document.querySelector("#gsn3")
let gsn4 = document.querySelector("#gsn4")
let pvb3 = document.querySelector("#pvb3")
let gaj3 = document.querySelector("#gaj3")
let pvb4 = document.querySelector("#pvb4")
let pvb5 = document.querySelector("#pvb5")
let gsn5 = document.querySelector("#gsn5")
let pvb6 = document.querySelector("#pvb6")
let startPig = document.querySelector('#startPig')
let resetPig = document.querySelector("#resetPig")
let fullLibPig = document.querySelector('#fullLibPig')



tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')    
    })
})

startPirate.addEventListener('click', writeLibPirate, false)
startFish.addEventListener('click', writeLibFish, false)
resetFish.addEventListener('click', rewriteLibFish, false)
startPig.addEventListener('click', writeLibPig, false)

function startsWithVowel(word){
    let vowels = ("aeiouAEIOU"); 
    return vowels.indexOf(word[0]) !== -1;
}


function writeLibPirate() {
    console.log("write")
    let finishedLibPirate= ""
    finishedLibPirate = "Ye can always pretend to be a bloodthirsty " + nou1.value + ", threatening everyone by waving yer " + adj1.value  + " sword in the air, but until ye learn to " + ver1.value  + " like a pirate, ye'll never be " + adv1.value  + " accepted as an authentic " + nou2.value  + ". So here's what ye do: Cleverly work into yer daily conversations " + adj2.value  + " pirate phrases such as \"Ahoy there, " + pno1.value  + ",\"\"Avast, ye " + pno2.value  + ",\" and \"Shiver me " + pno3.value  + ".\" Remember to drop all yer gs when ye say such words as sailin', spittin', and fightin'. This will give ye " + (startsWithVowel(pob1.value) ? "an " : "a ") + "" + pob1.value  + " start to being recognized as a swashbucklin' " + nou3.value  + ". Once ye have the lingo down pat, it helps to wear a three-cornered " + nou4.value  + " on yer head, stash " + (startsWithVowel(nou5.value) ? "an " : "a ") + ""  + nou5.value + " in yer pants, and keep " + (startsWithVowel(noun6.value) ? "an " : "a ") + ""  + nou6.value  + " perched atop yer " + pob2.value + ". Aye, now ye be a real pirate!"
    fullLibPirate.textContent = finishedLibPirate;
    document.getElementById("nou1").type = "hidden";
    document.getElementById("adj1").type = "hidden";
    document.getElementById("ver1").type = "hidden";
    document.getElementById("adv1").type = "hidden";
    document.getElementById("nou2").type = "hidden";
    document.getElementById("adj2").type = "hidden";
    document.getElementById("pno1").type = "hidden";
    document.getElementById("pno2").type = "hidden";
    document.getElementById("pno3").type = "hidden";
    document.getElementById("pob1").type = "hidden";
    document.getElementById("nou3").type = "hidden";
    document.getElementById("nou4").type = "hidden";
    document.getElementById("nou5").type = "hidden";
    document.getElementById("nou6").type = "hidden";
    document.getElementById("pob2").type = "hidden";
}


function writeLibFish() {
    console.log("writeFish")
    let finishedLibFish= ""
    finishedLibFish =  "If you are traveling in " + ffcy.value + "and find yourself having to cross a piranha-filled river, here's how to do it " + fav1.value + "Piranhas are more " + faj1.value + " during the day, so cross the river at night. Avoid areas with netted " + fani.value + " traps--piranhas may be " + fvg1.value + " there looking to " + fvb1.value + " them! When " + fvg2.value + " the river, swim " + fav2.value + ". You don't want to wake them up and make them " + faj2.value + "! Whatever you do, if you have an open wound, try to find another way to get back to the " + fapl.value + ". Piranhas are attracted to fresh " + fatl.value + " and will most likely take a bite out of your " + fpob.value + " if you " + fvb2.value + " in the water!" 
    fullLibFish.textContent = finishedLibFish;
    document.getElementById("ffcy").type = "hidden";
    document.getElementById("fav1").type = "hidden";
    document.getElementById("faj1").type = "hidden";
    document.getElementById("fani").type = "hidden";
    document.getElementById("fvg1").type = "hidden";
    document.getElementById("fvb1").type = "hidden";
    document.getElementById("fvg2").type = "hidden";
    document.getElementById("fav2").type = "hidden";
    document.getElementById("faj2").type = "hidden";
    document.getElementById("fapl").type = "hidden";
    document.getElementById("fatl").type = "hidden";
    document.getElementById("fpob").type = "hidden";
    document.getElementById("fvb2").type = "hidden";
}

function rewriteLibFish() {
    fullLibFish.textContent = "";
    document.getElementById("ffcy").type = "text";
    document.getElementById("fav1").type = "text";
    document.getElementById("faj1").type = "text";
    document.getElementById("fani").type = "text";
    document.getElementById("fvg1").type = "text";
    document.getElementById("fvb1").type = "text";
    document.getElementById("fvg2").type = "text";
    document.getElementById("fav2").type = "text";
    document.getElementById("faj2").type = "text";
    document.getElementById("fapl").type = "text";
    document.getElementById("fatl").type = "text";
    document.getElementById("fpob").type = "text";
    document.getElementById("fvb2").type = "text";
    ffcy.value = ""
    fav1.value = ""
    faj1.value = ""
    fani.value = ""
    fvg1.value = ""
    fvb1.value = ""
    fvg2.value = ""
    fav2.value = ""
    faj2.value = ""
    fapl.value = ""
    fatl.value = ""
    fpob.value = ""
    fvb2.value = ""
}



function writeLibPig() {
    console.log("write3")
    let finishedLibPig= ""
    finishedLibPig =  "Once up a time, there were three " + gaj1.value + " pigs. One day, their mother said, \"You are all grown up and must " + gvb1.value + " on your own.\" So they left to " + gvb2.value + " their houses. The first little pig wanted only to " + gvb3.value + " all day and quickly built his house out of " + gpn1.value + ". The second little pig wanted to " + gvb4.value + " and " + gvb5.value + " all day so he " + pvb1.value + " his house with " + gpn2.value + ". The third " + gaj2.value + " pig knew the wolf lived nearby and worked hard to " + gvb6.value + "his house out of " + gpn3.value + " One day, the wolf knocked on the first pig's " + gsn1.value +  ". \"Let me in or I'll " + gvb7.value + " your house down!\" The pig didn't, so the wolf " + pvb2.value + " down the " + gsn2.value + ". The wolf knocked on the second pig's " + gsn3.value + ". \"Let me in or I'll blow your " + gsn4.value + " down!\" The pig didn't, so the wolf " + pvb3.value + " down the house. Then the wolf knocked on the third " + gaj3.value + " pig's door. \"Let me in or I'll blow your house down!\" The little pig didn't so the wolf " + pvb4.value + " and " + pvb5.value + ". He could not blow the house down. All the pigs went to live in the " + gsn5.value + " house and they all " + pvb6.value + " happily ever after."
    fullLibPig.textContent = finishedLibPig;
    document.getElementById("gaj1").type = "hidden";
    document.getElementById("gvb1").type = "hidden";
    document.getElementById("gvb2").type = "hidden";
    document.getElementById("gvb3").type = "hidden";
    document.getElementById("gpn1").type = "hidden";
    document.getElementById("gvb4").type = "hidden";
    document.getElementById("gvb5").type = "hidden";
    document.getElementById("pvb1").type = "hidden";
    document.getElementById("gpn2").type = "hidden";
    document.getElementById("gaj2").type = "hidden";
    document.getElementById("gvb6").type = "hidden";
    document.getElementById("gpn3").type = "hidden";
    document.getElementById("gsn1").type = "hidden";
    document.getElementById("gvb7").type = "hidden";
    document.getElementById("pvb2").type = "hidden";
    document.getElementById("gsn2").type = "hidden";
    document.getElementById("gsn3").type = "hidden";
    document.getElementById("gsn4").type = "hidden";
    document.getElementById("pvb3").type = "hidden";
    document.getElementById("gaj3").type = "hidden";
    document.getElementById("pvb4").type = "hidden";
    document.getElementById("pvb5").type = "hidden";
    document.getElementById("gsn5").type = "hidden";
    document.getElementById("pvb6").type = "hidden";
}

// "title": "How To Cross a Piranha-Infested River",


// "title": "Three Little Pigs",
// "blanks": [
//     "adjective",
//     "verb",
//     "verb",
//     "verb",
//     "plural noun",
//     "verb",
//     "verb",
//     "past tense verb",
//     "plural noun",
//     "adjective",
//     "verb",
//     "plural noun",
//     "noun",
//     "verb",
//     "past tense verb",
//     "noun",
//     "noun",
//     "noun",
//     "past tense verb",
//     "adjective",
//     "past tense verb",
//     "past tense verb",
//     "noun",
//     "past tense verb"
// ],
// "value": [
//     "Once up a time, there were three ",
//     " pigs. One day, their mother said, \"You are all grown up and must ",
//     " on your own.\" So they left to ",
//     " their houses. The first little pig wanted only to ",
//     " all day and quickly built his house out of ",
//     ". The second little pig wanted to ",
//     " and ",
//     " all day so he ",
//     " his house with ",
//     ". The third ",
//     " pig knew the wolf lived nearby and worked hard to ",
//     " his house out of ",
//     ". One day, the wolf knocked on the first pig's ",
//     ". \"Let me in or I'll ",
//     " your house down!\" The pig didn't, so the wolf ",
//     " down the ",
//     ". The wolf knocked on the second pig's ",
//     ". \"Let me in or I'll blow your ",
//     " down!\" The pig didn't, so the wolf ",
//     " down the house. Then the wolf knocked on the third ",
//     " pig's door. \"Let me in or I'll blow your house down!\" The little pig didn't so the wolf ",
//     " and ",
//     ". He could not blow the house down. All the pigs went to live in the ",
//     " house and they all ",
//     " happily ever after.",
//     0
// ]
// }




// "title": "Talk Like a Pirate",
        
// let blanks = [];

// const startButton = document.getElementById("startButton");


// startButton.addEventListener('click', ()=> {
//     fetch("http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=30")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data)
//         // let newLib = {}
//         // newLib["blanks"] = data.blanks
//         // blanks.push(newLib)
//         // render()
//     })
//     // console.log(blanks)
//     // .catch((err) => {
//     // console.log(err)
// })