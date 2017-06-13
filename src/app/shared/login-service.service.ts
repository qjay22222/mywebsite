import {Injectable} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class LoginServiceService {
  adminLoggedIn;
  userLoggedIn;
  userName;
  userPass;

  login(username: string, pass: string) {
    this.userName = username;
    this.userPass = pass;
    const promise = this.af.auth.signInWithEmailAndPassword(this.userName, this.userPass);
    promise.catch(e => console.log(e.message));
    promise.then(response => {
      console.log('login Successful response: ');
      console.log(response);
      this.adminLoggedIn = true;
    });
  }

  logout() {
    this.af.auth.signOut();
    this.adminLoggedIn = false;
  }

  createUser(username: string, pass: string) {
    this.userName = username;
    this.userPass = pass;
    console.log("versuche User mit username: " + username + " und pass: " + pass + " zu kreieren");
    this.af.auth.createUserWithEmailAndPassword(username, pass);
  }

  constructor(public af: AngularFireAuth) {
    this.adminLoggedIn = false;
    this.userLoggedIn = false;
  }

}
