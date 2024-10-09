//Griffin Urban
function fetchUser() {
    document.getElementById("loginuser").innerHTML = `Authenticating...`;
    return new Promise((resolve, reject) => {
        fetch("./griffinu_Activity12_Login.json")
        .then(()=>{return response.json})
        .then((data)=>{resolve(data)})
        .catch((error)=>{console.log(error)});
    });
}
function login(users, userInput, passwordInput) {
    // TODO
    if (users.userInput === userInput && users.passwordInput === passwordInput) {
        document.getElementById('loginuser').innerHTML="user and password correct"
    } else {
        document.getElementById('loginuser').innerHTML="user and password incorrect"
    }
}
async function useAdmin(userInput, passwordInput) {
    const users = await fetchUser();
    login(users, userInput, passwordInput);
}
document.getElementById("loginButton").addEventListener("click", (event) => {
    event.preventDefault();
    // read input
    const userInput = document.getElementById("userInput").value;
    const passwordInput = document.getElementById("passwordInput").value;
    useAdmin(userInput, passwordInput);
});