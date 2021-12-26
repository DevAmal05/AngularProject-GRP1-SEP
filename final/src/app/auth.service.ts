import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import  firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  signUpUser(email:string,password:string){
    return new Promise(
      (resolve,reject) => {
        firebase.auth().createUserWithEmailAndPassword(email,password).then(
          ()=> {
            resolve(true);
          },
          (error) =>{
            reject(error)
          }

        )
      }
    )
    
  }

  signInUser(email:string,password:string) {
    return new Promise(
      (resolve,reject) => {
        firebase.auth().signInWithEmailAndPassword(email,password).then(
          () => {
            console.log("Bienvenue");
            resolve(true);
          },
          (error) => {
            console.log("Erreur de connexion");
            reject(error);
          }
        );
      }
    );

  }

  signOutuser() {
    firebase.auth().signOut()
  }
}
