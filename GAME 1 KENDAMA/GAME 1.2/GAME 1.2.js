ball.onmousedown = function(event) {

    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    let shiftY = event.clientY - ball.getBoundingClientRect().top;
  
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    document.body.append(ball);
  
    moveAt(event.pageX, event.pageY);
  
    // moves the ball at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      ball.style.left = pageX - shiftX + 'px';
      ball.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the ball, remove unneeded handlers
    ball.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball.onmouseup = null;
    };
  
  };
  
  ball.ondragstart = function() {
    return false;
  };
      
      
      
      
      ball2.onmousedown = function(event) {
  
    let shiftX = event.clientX - ball2.getBoundingClientRect().left;
    let shiftY = event.clientY - ball2.getBoundingClientRect().top;
  
    ball2.style.position = 'absolute';
    ball2.style.zIndex = 1000;
    document.body.append(ball2);
  
    moveAt(event.pageX, event.pageY);
  
    // moves the ball at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      ball2.style.left = pageX - shiftX + 'px';
      ball2.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the ball, remove unneeded handlers
    ball2.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball2.onmouseup = null;
    };
  
  };
  
  ball2.ondragstart = function() {
    return false;
  };
      
      
      
      
      
          ball3.onmousedown = function(event) {
  
    let shiftX = event.clientX - ball3.getBoundingClientRect().left;
    let shiftY = event.clientY - ball3.getBoundingClientRect().top;
  
    ball3.style.position = 'absolute';
    ball3.style.zIndex = 1000;
    document.body.append(ball3);
  
    moveAt(event.pageX, event.pageY);
  
    // moves the ball at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      ball3.style.left = pageX - shiftX + 'px';
      ball3.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the ball, remove unneeded handlers
    ball3.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball3.onmouseup = null;
    };
  
  };
  
  ball3.ondragstart = function() {
    return false;
  };
      
          ball4.onmousedown = function(event) {
  
    let shiftX = event.clientX - ball4.getBoundingClientRect().left;
    let shiftY = event.clientY - ball4.getBoundingClientRect().top;
  
    ball4.style.position = 'absolute';
    ball4.style.zIndex = 1000;
    document.body.append(ball4);
  
    moveAt(event.pageX, event.pageY);
  
    // moves the ball at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      ball4.style.left = pageX - shiftX + 'px';
      ball4.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the ball, remove unneeded handlers
    ball4.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball4.onmouseup = null;
    };
  
  };
  
  ball4.ondragstart = function() {
    return false;
  };
      
          ball5.onmousedown = function(event) {
  
    let shiftX = event.clientX - ball5.getBoundingClientRect().left;
    let shiftY = event.clientY - ball5.getBoundingClientRect().top;
  
    ball5.style.position = 'absolute';
    ball5.style.zIndex = 1000;
    document.body.append(ball5);
  
    moveAt(event.pageX, event.pageY);
  
    // moves the ball at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      ball5.style.left = pageX - shiftX + 'px';
      ball5.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the ball, remove unneeded handlers
    ball5.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball5.onmouseup = null;
    };
  
  };
  
  ball5.ondragstart = function() {
    return false;
  };
  
      ball6.onmousedown = function(event) {
  
    let shiftX = event.clientX - ball6.getBoundingClientRect().left;
    let shiftY = event.clientY - ball6.getBoundingClientRect().top;
  
    ball6.style.position = 'absolute';
    ball6.style.zIndex = 1000;
    document.body.append(ball6);
  
    moveAt(event.pageX, event.pageY);
  
    // moves the ball at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      ball6.style.left = pageX - shiftX + 'px';
      ball6.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the ball, remove unneeded handlers
    ball6.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball5.onmouseup = null;
    };
  
  };
  
  ball6.ondragstart = function() {
    return false;
  };
      
      
      
      ball7.onmousedown = function(event) {
  
    let shiftX = event.clientX - ball7.getBoundingClientRect().left;
    let shiftY = event.clientY - ball7.getBoundingClientRect().top;
  
    ball7.style.position = 'absolute';
    ball7.style.zIndex = 1000;
    document.body.append(ball7);
  
    moveAt(event.pageX, event.pageY);
  
    // moves the ball at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      ball7.style.left = pageX - shiftX + 'px';
      ball7.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the ball, remove unneeded handlers
    ball7.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball7.onmouseup = null;
    };
  
  };
  
  ball7.ondragstart = function() {
    return false;
  };
      
          ball8.onmousedown = function(event) {
  
    let shiftX = event.clientX - ball8.getBoundingClientRect().left;
    let shiftY = event.clientY - ball8.getBoundingClientRect().top;
  
    ball8.style.position = 'absolute';
    ball8.style.zIndex = 1000;
    document.body.append(ball8);
  
    moveAt(event.pageX, event.pageY);
  
    // moves the ball at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      ball8.style.left = pageX - shiftX + 'px';
      ball8.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the ball, remove unneeded handlers
    ball8.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball8.onmouseup = null;
    };
  
  };
  
  ball8.ondragstart = function() {
    return false;
  };
      
              ball9.onmousedown = function(event) {
  
    let shiftX = event.clientX - ball9.getBoundingClientRect().left;
    let shiftY = event.clientY - ball9.getBoundingClientRect().top;
  
    ball9.style.position = 'absolute';
    ball9.style.zIndex = 1000;
    document.body.append(ball9);
  
    moveAt(event.pageX, event.pageY);
  
    // moves the ball at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      ball9.style.left = pageX - shiftX + 'px';
      ball9.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the ball, remove unneeded handlers
    ball9.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball9.onmouseup = null;
    };
  
  };
  
  ball9.ondragstart = function() {
    return false;
  };
      
      
                  ball10.onmousedown = function(event) {
  
    let shiftX = event.clientX - ball10.getBoundingClientRect().left;
    let shiftY = event.clientY - ball10.getBoundingClientRect().top;
  
    ball10.style.position = 'absolute';
    ball10.style.zIndex = 1000;
    document.body.append(ball10);
  
    moveAt(event.pageX, event.pageY);
  
    // moves the ball at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      ball10.style.left = pageX - shiftX + 'px';
      ball10.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the ball, remove unneeded handlers
    ball10.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball10.onmouseup = null;
    };
  
  };
  
  ball10.ondragstart = function() {
    return false;
  };
      
          
                  ball11.onmousedown = function(event) {
  
    let shiftX = event.clientX - ball11.getBoundingClientRect().left;
    let shiftY = event.clientY - ball11.getBoundingClientRect().top;
  
    ball11.style.position = 'absolute';
    ball11.style.zIndex = 1000;
    document.body.append(ball11);
  
    moveAt(event.pageX, event.pageY);
  
    // moves the ball at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      ball11.style.left = pageX - shiftX + 'px';
      ball11.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the ball, remove unneeded handlers
    ball11.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball11.onmouseup = null;
    };
  
  };
  
  ball11.ondragstart = function() {
    return false;
  };
      
                      ball12.onmousedown = function(event) {
  
    let shiftX = event.clientX - ball12.getBoundingClientRect().left;
    let shiftY = event.clientY - ball12.getBoundingClientRect().top;
  
    ball12.style.position = 'absolute';
    ball12.style.zIndex = 1000;
    document.body.append(ball12);
  
    moveAt(event.pageX, event.pageY);
  
    // moves the ball at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      ball12.style.left = pageX - shiftX + 'px';
      ball12.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the ball, remove unneeded handlers
    ball12.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball12.onmouseup = null;
    };
  
  };
  
  ball12.ondragstart = function() {
    return false;
  };