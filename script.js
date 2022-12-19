const holes = $('.hole')// utilier la méthode jquery appropriée pour selectionner les éléments ayant pour classe "hole";
const scoreBoard = $('.score') //utiliser la méthode jquery appropriée pour selectionner l'élément ayant pour classe "score";
const moles = $('.mole')// utilier la méthode jquery appropriée pour selectionner les éléments ayant pour classe "mole";

// moles non utilisé mais ça marche tout de même

let a = 0;

function startGame() {
    if (a !== 1) {
        let h = holes[random(6, 0)]
        h.classList.add('up')
        setTimeout(() => {
            if (h.classList.contains('up')) {
                h.classList.remove('up')
            }
            startGame()
        }, random(300, 600))
    }
}

function random(nb1, nb2) {
    return (Math.trunc(Math.random() * nb1) + nb2)
}

$('button').click(function () {
    a = 0
    scoreBoard.text(0)
    startGame()
    setTimer()

    holes.click(function () {
        if (a !== 1) {
            if ($(this).hasClass('up')) {
                scoreBoard.text(parseFloat(scoreBoard.text()) + 1)
                $(this).removeClass('up')
            }
        }
    })
})



function setTimer() {
    let i = 0

    function timer() {
        let timeout = setTimeout(function () {
            i++
            console.log(i)
            timer()
        }, 1000)
        if (i === 10) {
            clearTimeout(timeout)
            if (holes.hasClass('up')) {
                holes.removeClass('up')
            }
            return a++
        }
    }
    timer()
}

