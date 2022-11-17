<template>
  <div class="about">
   <div class="right-content">
            <form id="form" @submit.prevent="formValidation">
                <div class="form-control">
                <label for="username" class="heading">Username</label>
                <input  type="text" id="username" v-model="username"/>
                <span v-if="errorUsername" class="error">{{errorUsername}}</span><br>
                </div>
                <div class="form-control">
                <label for="email" class="heading">Email</label>
                <input v-model="email" type="text" id="email">
                <span v-if="errorEmail" class="error">{{errorEmail}}</span><br>
                </div>
                <div class="form-control">
                <label for="password" class="heading">Password</label>
                <input  v-model="password" type="password" id="password">
                <span v-if="errorPassword" class="error">{{errorPassword}}</span><br>
                </div>
                <div class="form-control">
                <label for="confpass" class="heading">Confirm Password</label>
                <input  v-model="confpassword" type="password" id="confpassword">
                <span v-if="errorConfPassword" class="error">{{errorConfPassword}}</span><br>
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
        <table class="tb" border="1px">
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
          <tr>
            <td>{{username}}</td>
            <td>{{email}}</td>
            <td>{{password}}</td>
          </tr>
        </table>
    </div>
</template>
<script>
export default{
  name: "SignUp",
  data(){
    return{
      username :'',
      email : '',
      password : '',
      confpassword : '',
      errorUsername:'',
      errorEmail:'',
      errorPassword:'',
      errorConfPassword:''
    }
  },
methods:{
  formValidation(){
   // console.log("hii")
   //validation for username------------------
   if(!this.username){
    this.errorUsername ="***required this field";
   }
   else if(!/^[a-zA-Z\s]+$/.test(this.username)){
    this.errorUsername = "***Invalid Username";
   }
   else{
    this.errorUsername ="";
   }

  //validation for email-------------------------
   if(!this.email){
     this.errorEmail = "***required this field";
   }
   else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)){
    this.errorEmail = "***Invalid Email"
   }
   else{
    this.errorEmail = "";
   }

   //validation for password----------------------
   if(!this.password){
    this.errorPassword = "***required this field";
   }
   else if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/.test(this.password)){
    this.errorPassword = "*** Invalid Password"
   }
   else{
    this.errorPassword =""
   }

   // validation for conform password----------------------
   if(!this.confpassword){
    this.errorConfPassword = "***required this field";
   }
   else if(this.confpassword != this.password){
    this.errorConfPassword = "*** conformpassword and password does not match";
   }
   else{
    this.errorConfPassword = "";
   }
  }

 
}
}


</script>

<style scoped>
.right-content form a {
  font-size: small;
  float: right;
  margin-right: 30px;
  color: white;
}

.right-content form input {
  width: 20%;
  height: 20%;
  padding: 10px 10px 10px 10px;
  margin: 10px 10px 10px 10px;
}

.right-content form h1 {
  font-size: xx-large;
  font-weight: 600;
}

.right-content form .checkbx {
  float: left;
  font-size: small;
}

.right-content form {
  padding-left: 25px;
  padding-right: 25px;
}


.right-content form .checkbx {
  width: 10px;
}

.right-content .banner {
  background-color: white;
  width: 100%;
  height: 60px;
}

.n-footer .division {
  background-color: white;
  padding-top: 0 0 0 0;
  text-align: center;
  margin-top: 0%;
  color: orange;
  height: 60px;
  width: 100%;
  margin-top: 0px;
}

#radiobtn {
  width: 10px;
  height: 10px;
}
#text-wrapper {
  margin-left: 120px;
  font-size: larger;
  font-weight: 600;
  width: 300px;
  height: 50px;
}
.error{
  color: red;
  font-size: 17px;
}
.heading{
  font-size: 22px;
  color: black;
}
.tb{
  text-align: center;
  border:1;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}
</style>
