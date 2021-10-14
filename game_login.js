function addUser() {
    P1_Name = document.getElementById("P1Name").value;
    P2_Name = document.getElementById("P2Name").value;
    localStorage.setItem("P1_Name",P1_Name);
    localStorage.setItem("P2_Name",P2_Name);
    window.location = "game_page.html"
}