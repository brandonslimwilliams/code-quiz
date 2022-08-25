var storage = JSON.parse(localStorage.getItem('highScore'))

if( storage === null) {
    document.querySelector('.scores').textContent = 'No Score'
} else {

    document.querySelector('.scores').textContent = ''
    for (var i = 0; i < storage.length; i ++) {
        var scores = document.createElement('h4')
        scores.textContent = 'Name: ' + storage[i].name + " ----------------- Score: " + storage[i].yourScore
        document.querySelector('.scores').append(scores)
    }
}