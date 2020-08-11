const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
let noun1 = document.querySelector('#noun1')
let adj1 = document.querySelector('#adj1')
let verb1 = document.querySelector('#verb1')
let adv1 = document.querySelector('#adv1')
let noun2 = document.querySelector('#noun2')
let adj2 = document.querySelector('#adj2')
let pnoun1 = document.querySelector('#pnoun1')
let pnoun2 = document.querySelector('#pnoun2')
let pnoun3 = document.querySelector('#pnoun3')
let pob1 = document.querySelector('#pob1')
let noun3 = document.querySelector('#noun3')
let noun4 = document.querySelector('#noun4')
let noun5 = document.querySelector('#noun5')
let noun6 = document.querySelector('#noun6')
let pob2 = document.querySelector('#pob2')
let startPirate = document.querySelector('#startPirate')
let fullLibPirate = document.querySelector('#fullLibPirate')

let ffcy = document.querySelector("ffcy")
let fav1 = document.querySelector("fav1")
let faj1 = document.querySelector("faj1")
let fani = document.querySelector("fani")
let fvg1 = document.querySelector("fvg1")
let fvb1 = document.querySelector("fvb1")
let fvg2 = document.querySelector("fvg2")
let fav2 = document.querySelector("fav2")
let faj2 = document.querySelector("faj2")
let fapl = document.querySelector("fapl")
let fatl = document.querySelector("fatl")
let fpob = document.querySelector("fpob")
let fvb2 = document.querySelector("fvb2")
let startFish = document.querySelector('#startFish')
let fullLibFish = document.querySelector('#fullLibFish')


let aj1 = document.querySelector("#aj1") 
let vb1 = document.querySelector("#vb1")
let vb2 = document.querySelector("#vb2") 
let vb3 = document.querySelector("#vb3") 
let pn1 = document.querySelector("#pn1") 
let vb4 = document.querySelector("#vb4") 
let vb5 = document.querySelector("#vb5") 
let pvb1 = document.querySelector("#pvb1")
let pn2 = document.querySelector("#pn2") 
let aj2 = document.querySelector("#aj2") 
let vb6 = document.querySelector("#vb6") 
let pn3 = document.querySelector("#pn3") 
let n1 = document.querySelector("#n1") 
let vb7 = document.querySelector("#vb7") 
let pvb2 = document.querySelector("#pvb2")
let n2 = document.querySelector("#n2") 
let n3 = document.querySelector("#n3") 
let n4 = document.querySelector("#n4") 
let pvb3 = document.querySelector("#pvb3")
let aj3 = document.querySelector("#aj3") 
let pvb4 = document.querySelector("#pvb4")
let pvb5 = document.querySelector("#pvb5")
let n5 = document.querySelector('#n5') 
let pvb6 = document.querySelector("#pvb6")
let startPig = document.querySelector('#startPig')
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
startPig.addEventListener('click', writeLibPig, false)

function startsWithVowel(word){
    let vowels = ("aeiouAEIOU"); 
    return vowels.indexOf(word[0]) !== -1;
}


function writeLibPirate() {
    console.log("write")
    let finishedLibPirate= ""
    finishedLibPirate = "Ye can always pretend to be a bloodthirsty " + noun1.value + ", threatening everyone by waving yer " + adj1.value  + " sword in the air, but until ye learn to " + verb1.value  + " like a pirate, ye'll never be " + adv1.value  + " accepted as an authentic " + noun2.value  + ". So here's what ye do: Cleverly work into yer daily conversations " + adj2.value  + " pirate phrases such as \"Ahoy there, " + pnoun1.value  + ",\"\"Avast, ye " + pnoun2.value  + ",\" and \"Shiver me " + pnoun3.value  + ".\" Remember to drop all yer gs when ye say such words as sailin', spittin', and fightin'. This will give ye " + (startsWithVowel(pob1.value) ? "an " : "a ") + "" + pob1.value  + " start to being recognized as a swashbucklin' " + noun3.value  + ". Once ye have the lingo down pat, it helps to wear a three-cornered " + noun4.value  + " on yer head, stash " + (startsWithVowel(noun5.value) ? "an " : "a ") + ""  + noun5.value + " in yer pants, and keep " + (startsWithVowel(noun6.value) ? "an " : "a ") + ""  + noun6.value  + " perched atop yer " + pob2.value + ". Aye, now ye be a real pirate!"
    fullLibPirate.textContent = finishedLibPirate;
    document.getElementById("noun1").type = "hidden";
    document.getElementById("adj1").type = "hidden";
    document.getElementById("verb1").type = "hidden";
    document.getElementById("adv1").type = "hidden";
    document.getElementById("noun2").type = "hidden";
    document.getElementById("adj2").type = "hidden";
    document.getElementById("pnoun1").type = "hidden";
    document.getElementById("pnoun2").type = "hidden";
    document.getElementById("pnoun3").type = "hidden";
    document.getElementById("pob1").type = "hidden";
    document.getElementById("noun3").type = "hidden";
    document.getElementById("noun4").type = "hidden";
    document.getElementById("noun5").type = "hidden";
    document.getElementById("noun6").type = "hidden";
    document.getElementById("pob2").type = "hidden";
}


function writeLibFish() {
    console.log("writeFish")
    let finishedLibFish= ""
    finishedLibFish =  "If you are traveling in " + ffcy + "and find yourself having to cross a piranha-filled river, here's how to do it " + fav1 + ": \n* Piranhas are more " + faj1 + " during the day, so cross the river at night.\n* Avoid areas with netted " + fani + " traps--piranhas may be " + fvg1 + " there looking to " + fvb1 + " them!\n* When " + fvg2 + " the river, swim " + fav2 + ". You don't want to wake them up and make them " + faj2 + "!\n* Whatever you do, if you have an open wound, try to find another way to get back to the " + fapl + ". Piranhas are attracted to fresh " + fatl + " and will most likely take a bite out of your " + fpob + " if you " + fvb2 + " in the water!" 
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


// "title": "How To Cross a Piranha-Infested River",
//     "value": [
//         "If you are traveling in ",
//         " and find yourself having to cross a piranha-filled river, here's how to do it ",
//         ": \n* Piranhas are more ",
//         " during the day, so cross the river at night.\n* Avoid areas with netted ",
//         " traps--piranhas may be ",
//         " there looking to ",
//         " them!\n* When ",
//         " the river, swim ",
//         ". You don't want to wake them up and make them ",
//         "!\n* Whatever you do, if you have an open wound, try to find another way to get back to the ",
//         ". Piranhas are attracted to fresh ",
//         " and will most likely take a bite out of your ",
//         " if you ",
//         " in the water!",
//         0
//     ],
//     "blanks": [
//         "foreign country",
//         "adverb",
//         "adjective",
//         "animal",
//         "verb ending in 'ing'",
//         "verb",
//         "verb ending in 'ing'",
//         "adverb",
//         "adjective",
//         "a place",
//         "type of liquid",
//         "part of the body",
//         "verb"

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


//     document.write("Ye can always pretend to be a bloodthirsty " + noun1.value + ", threatening everyone by waving yer " + adj1.value  + " sword in the air, but until ye learn to " + verb1.value  + " like a pirate, ye'll never be " + adv1.value  + " accepted as an authentic " + noun2.value  + ". So here's what ye do: Cleverly work into yer daily conversations " + adj2.value  + " pirate phrases such as \"Ahoy there, " + pnoun1.value  + ",\"\"Avast, ye " + pnoun2.value  + ",\" and \"Shiver me " + pnoun3.value  + ".\" Remember to drop all yer gs when ye say such words as sailin', spittin', and fightin'. This will give ye a/an " + pob1.value  + " start to being recognized as a swashbucklin' " + noun3.value  + ". Once ye have the lingo down pat, it helps to wear a three-cornered " + noun4.value  + " on yer head, stash a/an " + noun5.value  +" in yer pants, and keep a/an " + noun6.value  + " perched atop yer " + pob2.value  +". Aye, now ye be a real pirate!",);
// }

// "title": "Talk Like a Pirate",
    // "blanks": [
    //     "noun",
    //     "adjective",
    //     "verb",
    //     "adverb",
    //     "noun",
    //     "adjective",
    //     "plural noun",
    //     "plural noun",
    //     "plural noun",
    //     "part of the body",
    //     "noun",
    //     "noun",
    //     "noun",
    //     "noun",
    //     "part of the body"




    // "value": 
    //     "Ye can always pretend to be a bloodthirsty ",
    //     ", threatening everyone by waving yer ",
    //     " sword in the air, but until ye learn to ",
    //     " like a pirate, ye'll never be ",
    //     " accepted as an authentic ",
    //     ". So here's what ye do: Cleverly work into yer daily conversations ",
    //     " pirate phrases such as \"Ahoy there, ",
    //     ",\"\"Avast, ye ",
    //     ",\" and \"Shiver me ",
    //     ".\" Remember to drop all yer gs when ye say such words as sailin', spittin', and fightin'. This will give ye a/an ",
    //     " start to being recognized as a swashbucklin' ",
    //     ". Once ye have the lingo down pat, it helps to wear a three-cornered ",
    //     " on yer head, stash a/an ",
    //     " in yer pants, and keep a/an ",
    //     " perched atop yer ",
    //     ". Aye, now ye be a real pirate!",
        
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