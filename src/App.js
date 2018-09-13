import React, { Component } from "react";
import LoginBox from "./component/loginBox";
import firebaseApp from "./component/fireball";
import Home from "./component/home";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: "",
      user: {},
      error: {
        message: ""
      }
    }
    // this.handleChangeEm = this.handleChangeEm.bind(this)
    // this.handleChangePass = this.handleChangePass.bind(this)
    // this.login = this.login.bind(this)
    // this.signup = this.signup.bind(this)
    // this.logout = this.logout.bind(this)
  }
  componentWillMount(){
      this.authListener();
  }

  authListener(){
      firebaseApp.auth().onAuthStateChanged((user) => {
        console.log(user);
        if(user){
            this.setState({ user })
        }else{
            this.setState({user: null});
        }
      })
  }

  handleChangeEm(emails){
     this.setState({
       email: emails.target.value
     })
   }
   handleChangePass(pass){
     this.setState({
       password: pass.target.value
     })
   }

   login(e){
     console.log("hey", e)
    e.preventDefault();
    firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .catch(error => {
      // console.log("error", error)
      this.setState({error})
      this.state.error.message = ""
    })
  
  }
  
  signup(e){
    e.preventDefault();
    firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch(error => {
      console.log("error", error)
      this.setState({error})
      this.state.error.message = ""
    })
  }

  logout(){
    firebaseApp.auth().signOut();
}

  deleteUser(){
    const user = firebaseApp.auth().currentUser;
    user.delete()
    .then((user) => {
        alert("successfully delete")
        console.log("deleted", user)
    })
    .catch((error) => {
        console.log("error", error)
        this.setState({error})
    })
  }

  render() {
    return (
      
        <div>
        <div className="root-container">
          {this.state.user ? 
          (<Home 
          deleteUser={() => this.deleteUser()} 
          logout={() => this.logout()} 
          error={this.state.error} 
          myData={this.state.datHero}
          />) :
          (<LoginBox 
          login={(e) => this.login(e)} 
          signup={(e) => this.signup(e)} 
          handleChangeEm={(emails) => this.handleChangeEm(emails)}
          handleChangePass={(pass) => this.handleChangePass(pass)}
          error={this.state.error}
          />)}
        </div>

        
      </div>
    );
  }
}

export default App;

