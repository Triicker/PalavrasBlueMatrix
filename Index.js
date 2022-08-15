/* Using document.getElementsByClassName because it returns a nodelist of multiple items instead of the first item it finds. Individual letters have to be crossed out
instead of only one item.*/

let wordBanana = document.getElementsByClassName("word-banana")

let wordGato = document.getElementsByClassName("word-gato")

let wordTempo = document.getElementsByClassName("word-tempo")

let wordPraia = document.getElementsByClassName("word-praia")

let wordDia = document.getElementsByClassName("word-dia")

let wordDog = document.getElementsByClassName("word-dog")

let wordCeu = document.getElementsByClassName("word-ceu")

let wordPaz = document.getElementsByClassName("word-paz")

/* Function which is called when the corresponding word (in the list) is clicked.
For loop so that every item in the array (every letter with the relevant class) 
is targeted. */

function handleBanana() {
    let i
    for (i = 0; i < wordBanana.length; i++) {
        wordBanana[i].classList.add("line-through") // Adding "line-through" class to item
    }
}

function handleGato() {
    let i
    for (i = 0; i < wordGato.length; i++) {
        wordGato[i].classList.add("line-through")
    }
}

function handleTempo() {
    let i
    for (i = 0; i < wordTempo.length; i++) {
        wordTempo[i].classList.add("line-through")
    }
}

function handlePraia() {
    let i
    for (i = 0; i < wordPraia.length; i++) {
        wordPraia[i].classList.add("line-through")
    }
}

function handleDia() {
    let i
    for (i = 0; i < wordDia.length; i++) {
        wordDia[i].classList.add("line-through")
    }
}

function handleDog() {
    let i
    for (i = 0; i < wordDog.length; i++) {
        wordDog[i].classList.add("line-through")
    }
}

function handleCeu() {
    let i
    for (i = 0; i < wordCeu.length; i++) {
        wordCeu[i].classList.add("line-through")
    }
}

function handlePaz() {
    let i
    for (i = 0; i < wordPaz.length; i++) {
        wordPaz[i].classList.add("line-through")
    }
}
