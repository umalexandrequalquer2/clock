function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    // Formata os números com dois dígitos, se necessário
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    var time = hours + ":" + minutes + ":" + seconds;
  
    // Atualiza o relógio
    document.getElementById("clock").textContent = time;
  }
  
  // Atualiza o relógio a cada segundo
  setInterval(updateClock, 1000);
  