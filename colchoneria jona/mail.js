for (let i = 1; i <= 8; i++) {
    const toggleButton = document.getElementById(`toggleButton${i}`);
    const myList = document.getElementById(`myList${i}`);
  
    if (toggleButton && myList) {
      toggleButton.addEventListener("click", () => {
        myList.style.display = myList.style.display === "none" ? "block" : "none";
      });
    }
  }
  