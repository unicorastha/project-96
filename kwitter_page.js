var firebaseConfig = {
      apiKey: "AIzaSyDFm6RBhzZurKnk7_r5HRno7bd1qQyO0zY",
      authDomain: "activity-kwitter.firebaseapp.com",
      databaseURL: "https://activity-kwitter-default-rtdb.firebaseio.com",
      projectId: "activity-kwitter",
      storageBucket: "activity-kwitter.appspot.com",
      messagingSenderId: "1082966801786",
      appId: "1:1082966801786:web:881d6d34b77aae1c53aac3"
    };
    
    firebase.initializeApp(firebaseConfig)

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name =message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+ name + "<img class='user_tick' src='tick.png'.</h4>";

message_with_tag="<h4 class='message_h4'>"+ message + "<h4>";
like_button="<button class+'btn btn-warning' id"+firebase_message_id+"value="+like+" onclick='updatelike(this.id)'>";
span_with_tag= ",span class='glyphicon glyphicon-thumbs-up'>like; "+like +"</span></button><hr>";
document.getElementById("output").innerHTML +=HTMLTableRowElement

//End code
      } });  }); }
getData();

function updatelike(message_id)
{
      console.log("clicked on like button  -" + message_id);
      button_id=message_id;
      likes=document.getElementById(button-id).Value;
      updated_likes =number(likes) +1;
      console.log(updated_likes);

      firebase.database()ref(room_name).child(message_id).update({
            like:updated_likes
      });

}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
      }
      