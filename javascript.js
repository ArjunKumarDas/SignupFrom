

const signupBtn = document.querySelector(".signupBtn");
const loginBtn = document.querySelector(".loginBtn");
const moveBtn = document.querySelector(".moveBtn");
const signup = document.querySelector(".signup");
const login = document.querySelector(".login");

loginBtn?.addEventListener('click',()=>{
  moveBtn?.classList.add("rightBtn");
  login?.classList.add("loginFrom");
  signup?.classList.remove("signupFrom");

})

signupBtn?.addEventListener('click',()=>{
    moveBtn?.classList.remove("rightBtn");
    login?.classList.remove("loginFrom");
    signup?.classList.add("signupFrom");
    
  })
  
