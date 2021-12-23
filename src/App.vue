<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
    <router-view>
    </router-view>
    </v-main>
    
  </v-app>
</template>

<script>
import firebase from "./firebaseInit";
import 'firebase/firestore';
// import { doc } from 'firebase/firestore';

const db = firebase;
console.log(db);


export default {
  name: 'App',
  data: () => ({
    employees: [],
    documents: [],
    answers: [],
    name: ''
  }),
  firestore: {
    // documents: db.collection('employees'),
    // answers: db.collection('answers')
  },
  watch: {
    documents() {
      // console.log('documents changed bruh')
    }
  }, created() {
    // let employeesData = [];
    //   db.collection("employees")
    //     .get()
    //     .then((querySnapshot) => {
    //       querySnapshot.forEach((doc) => {
    //        employeesData.push({
    //           name: doc.data().name,
    //         });
    //         console.log(doc.id, " => ", doc.data());
    //       });
    //       this.employees = employeesData
    //     })
    //     .catch((error) => {
    //       console.log("Error getting documents: ", error);
    //     });
    // const q = db.query(db.collection("employees"))
    // console.log(q)
    // db.onSnapshot(db.doc(q), (doc) => {
    //   console.log("Current data: ", doc.data());
    // });
  }
};
</script>
