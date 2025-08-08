const typewriter = document.getElementById('typewriter');
          
  const texts = [
    "Hello,\nI am Adelin",
    "你好，\n我是马一丹"
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];
    const displayText = currentText.slice(0, charIndex);
    typewriter.innerText = displayText;

    let typingSpeed = 70;

    if (!isDeleting && charIndex < currentText.length) {
      charIndex++;
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      typingSpeed = 30;
    } else if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, 3000); // Pause after typing
      return;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(type, typingSpeed);
  }

  type();