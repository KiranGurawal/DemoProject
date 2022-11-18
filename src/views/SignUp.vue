<template>
<div>
  <div class="about">
    <div class="header">
      <div class="title">
        <img
          src="https://www.tcsion.com/dotcom/TCSSMB/Login/images/TATA-logo-left.png"
          alt="Tata Logo"
        />
      </div>
      <div class="title_img">
        <img
          src="https://www.tcsion.com/dotcom/TCSSMB/Login/images/TATA-logo-right.png"
          alt="Tata Logo"
        />
      </div>
    </div>
    <div class="menu-items">
      <img src="@/assets/tcsionimg.png" />
      <div class="items">
        <a id="phoneno" class="fa-solid fa-phone"> 1800 029 6030</a> |
        <i class="fa-solid fa-message"></i
        ><a id="redtext"> SMS: 'TCSiON' to 16161</a> |
        <i class="fa-solid fa-envelope"></i><a id="phoneno"> Email US </a> |
        <i class="fa-solid fa-computer"></i
        ><a id="phoneno"> Visit Our Portal </a> |
        <i class="fa-solid fa-circle-exclamation"></i
        ><a id="phoneno"> Help Central </a> |
        <a id="phoneno"> Language : </a>
        <select name="English">
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="Japanese">Japanese</option>
          <option value="Bahasa">Bahasa</option>
          <option value="Portugese">Portugese</option>
        </select>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="left-content">
      <img src="@/assets/ion-login-banner.jpg" />
      <div id="text-wrapper">
        Experience the <a id="best"> Best </a><br />
        with all new <a id="orange">TCS iON</a>
      </div>
    </div>
      <div class="right-content">
      <form id="form" @submit.prevent="formValidation">
        <div class="form-control">
          <label for="username" class="heading">Username</label>
          <input type="text" id="username" v-model="username" />
          <span v-if="errorUsername" class="error">{{ errorUsername }}</span>
        </div>
        <div class="form-control">
          <label for="email" class="heading">Email</label>
          <input v-model="email" type="text" id="email" />
          <span v-if="errorEmail" class="error">{{ errorEmail }}</span>
        </div>
        <div class="form-control">
          <label for="password" class="heading">Password</label>
          <input v-model="password" type="password" id="password" />
          <span v-if="errorPassword" class="error">{{ errorPassword }}</span>
        </div>
        <div class="form-control">
          <label for="confpass" class="heading">Confirm Password</label>
          <input v-model="confpassword" type="password" id="confpassword" />
          <span v-if="errorConfPassword" class="error">{{errorConfPassword }}</span>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confpassword: "",
      errorUsername: "",
      errorEmail: "",
      errorPassword: "",
      errorConfPassword: "",
    }
  },
  methods: {
    formValidation() {
      // console.log("hii")
      //validation for username------------------
      if (!this.username) {
        this.errorUsername = "***required this field";
      } else if (!/^[a-zA-Z\s]+$/.test(this.username)) {
        this.errorUsername = "***Invalid Username";
      } else {
        this.errorUsername = "";
      }

      //validation for email-------------------------
      if (!this.email) {
        this.errorEmail = "***required this field";
      } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)
      ) {
        this.errorEmail = "***Invalid Email";
      } else {
        this.errorEmail = "";
      }

      //validation for password----------------------
      if (!this.password) {
        this.errorPassword = "***required this field";
      } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/.test(this.password)
      ) {
        this.errorPassword = "*** Invalid Password";
      } else {
        this.errorPassword = "";
      }

      // validation for conform password----------------------
      if (!this.confpassword) {
        this.errorConfPassword = "***required this field";
      } else if (this.confpassword != this.password) {
        this.errorConfPassword =  "*** conformpassword and password does not match";
      } else {
        this.errorConfPassword = "";
      }

      if(this.username && this.email && this.password && this.password){
        alert("registration done..")
      }
    },
  },
};
</script>

<style>
.header {
  height: 28px;
  background-color: #2d3540;
  color: #fff;
  width: 100%;
}

.title {
  padding: 4px 3%;
  float: left;
}

.title_img {
  padding: 5px 3%;
  float: right;
}

div {
  display: block;
}

.n-footer {
  background: #043254 none repeat scroll 0 0;
  /* top:90%; */
  bottom: 0;
  position: fixed;
  width: 100%;
  text-align: center;
  padding: 10px 0;
}

#year1 {
  font-size: 1em;
  vertical-align: 0px;
}

.footer-content {
  display: inline-block;
  margin-right: 3%;
  margin-left: 2px;
}

.circle {
  background: #00aade none repeat scroll 0 0;
  border-radius: 50%;
  color: #ffffff;
  display: inline-block;
  font-size: 0.9em;
  width: 23px;
  height: 21px;
  padding-top: 2px;
}

.footer {
  color: #fff;
  font-size: 0.8em;
  font-weight: 600;
  float: left;
  margin-left: 3%;
  line-height: 23px;
}

.menu-items img {
  height: 100px;
  width: 250px;
}

.items {
  font-size: small;
  float: right;
  margin-right: 0%;
  margin-top: 25px;
  border-bottom: #00aade;
  border-width: 12px;
}

.right-content {
  color: white;
  background-color: rgb(125, 125, 254);
  display: inline;
  float: right;
  margin-right: 20%;
  margin-left: 60px;
  margin-bottom: 50px;
  padding: 10px 10px 10px 10px;
  border-radius: 10px;
  height: 450px;
  width: 450px;
}

.left-content {
  display: inline;
  float: left;
}

.left-content img {
  margin-left: 90px;
}
.right-content form a {
  font-size: small;
  float: right;
  margin-right: 30px;
  color: white;
}

.right-content form input {
  width: 90%;
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

.right-content form .btn1 {
  position: absolute;
  background-color: rgb(27, 192, 33);
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  box-shadow: #2d3540;
  cursor: pointer;
  border-radius: 0px;
  align-items: center;
}

.right-content form .btn:hover {
  background-color: black;
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

select {
  border-color: blue;
}

#phoneno {
  color: blue;
  font-weight: 800;
}

#redtext {
  color: red;
  font-weight: 800;
}

#best {
  color: blue;
  font-weight: 700;
}

#orange {
  color: orange;
  font-weight: 700;
}

#text-wrapper {
  margin-left: 120px;
  font-size: larger;
  font-weight: 600;
  width: 300px;
  height: 50px;
}
.error {
  color: red;
  font-size: 17px;
}
.heading {
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
