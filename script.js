let timer;
    
    function showGame() {
        document.getElementById('gameContainer').style.display = 'block';
    }
    
    function resetTimer() {
        clearTimeout(timer);
        timer = setTimeout(showGame, 180000);
    }
    
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onkeypress = resetTimer;