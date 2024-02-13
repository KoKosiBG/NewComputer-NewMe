let buttons = Array.from(document.getElementsByClassName("button"))


buttons[0].addEventListener('mouseover', () => {
    if (buttons[0].innerText === "Me too") {
        return
    }else{
        buttons[0].style.backgroundColor = "#ff009e"
        buttons[0].innerText = "Me too"
        buttons[1].style.backgroundColor = "#ff819f"
        buttons[1].innerText = "Who tf are you?"
    }
  });

  buttons[1].addEventListener('mouseover', () => {
    if (buttons[1].innerText === "Me too") {
        return
    }else{
        buttons[1].style.backgroundColor = "#ff009e"
        buttons[1].innerText = "Me too"
        buttons[0].style.backgroundColor = "#ff819f"
        buttons[0].innerText = "Who tf are you?"
    }
  });
