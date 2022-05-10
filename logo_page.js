const firebaseConfig = {
    apiKey: "AIzaSyAiu_EICzvk1YTZ6PcIjmhhdEzqiu7ZtDI",
    authDomain: "project-93-8b280.firebaseapp.com",
    databaseURL: "https://project-93-8b280-default-rtdb.firebaseio.com",
    projectId: "project-93-8b280",
    storageBucket: "project-93-8b280.appspot.com",
    messagingSenderId: "522574312984",
    appId: "1:522574312984:web:919940ce56ba2fc02bb56d",
    measurementId: "G-R4VHSQNCVR"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("User Name");
  room_name=localStorage.getItem("Room Name");

  function send(){
    msg=  document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0

    });
    document.getElementById("msg").value="";  
      
  }
  function logout(){
      localStorage.removeItem("User Name");
      localStorage.removeItem("Room Name");
      window.location="index.html";
  }
  