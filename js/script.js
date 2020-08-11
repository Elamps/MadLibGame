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
let start = document.querySelector('#start')
let fullLibPirate = document.querySelector('#fullLibPirate')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        target.classList.add('active')    
    })
})

start.addEventListener('click', writeLib, false)

function startsWithVowel(word){
    let vowels = ("aeiouAEIOU"); 
    return vowels.indexOf(word[0]) !== -1;
}


function writeLib() {
    console.log("write")
    let finishedLib= ""
    finishedLib = "Ye can always pretend to be a bloodthirsty " + noun1.value + ", threatening everyone by waving yer " + adj1.value  + " sword in the air, but until ye learn to " + verb1.value  + " like a pirate, ye'll never be " + adv1.value  + " accepted as an authentic " + noun2.value  + ". So here's what ye do: Cleverly work into yer daily conversations " + adj2.value  + " pirate phrases such as \"Ahoy there, " + pnoun1.value  + ",\"\"Avast, ye " + pnoun2.value  + ",\" and \"Shiver me " + pnoun3.value  + ".\" Remember to drop all yer gs when ye say such words as sailin', spittin', and fightin'. This will give ye " + (startsWithVowel(pob1.value) ? "an " : "a ") + "" + pob1.value  + " start to being recognized as a swashbucklin' " + noun3.value  + ". Once ye have the lingo down pat, it helps to wear a three-cornered " + noun4.value  + " on yer head, stash " + (startsWithVowel(noun5.value) ? "an " : "a ") + ""  + noun5.value  +" in yer pants, and keep " + (startsWithVowel(noun6.value) ? "an " : "a ") + ""  + noun6.value  + " perched atop yer " + pob2.value  +". Aye, now ye be a real pirate!"
    fullLibPirate.textContent = finishedLib;
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
    console.log("apple ".concat(startsWithVowel(noun1) ? "starts with a vowel" : "does not start with a vowel"));

}



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