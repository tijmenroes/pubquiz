<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-select :items="gameNumbers" v-model="chosenGameNumber"> </v-select>
      </v-col>
      <v-col cols="2">
        <v-select :items="questionTypes" v-model="chosenQuestionType">
        </v-select>
      </v-col>
      <v-col cols="4">
        <v-text-field label="Title" v-model="title"> </v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field label="Description" v-model="description"> </v-text-field>
      </v-col>
      <v-row v-if="chosenQuestionType == 'Multiple choice'">
        <v-col cols="3" v-for="n in 4" :key="n">
          <v-text-field
            :label="answerNumber(n)"
            v-model="multipleChoiceAnswers[n - 1]"
          ></v-text-field>
        </v-col>
      </v-row>
      
      <v-select :items="correctAnswers" v-model="correctAnswer"> </v-select>
      <v-btn @click="lolsaveQuestion()">Save question</v-btn>
    </v-row>
    <v-divider></v-divider>
    <div v-for="(game, i) in games" :key="i">
      {{ game }}
    </div>
  </v-container>
</template>

<script>
import firebase from "../firebaseInit";
import "firebase/firestore";
// import { doc } from 'firebase/firestore';

const db = firebase;
console.log(db);

export default {
  name: "App",
  data: () => ({
    gameNumbers: [1],
    chosenGameNumber: 1,
    questionTypes: ["Multiple choice", "Action", "Text"],
    multipleChoiceAnswers: ["", "", "", ""],
    chosenQuestionType: "Multiple choice",
    correctAnswers: [1, 2, 3, 4],
    correctAnswer: 1,
    games: [],
    title: "",
    description: "",
    documents: [],
    answers: [],
    name: "",
  }),
  firestore: {
    games: db.collection("games").where("gameId", "==", 1),
    answers: db.collection("answers"),
  },
  watch: {
    documents() {
      console.log("documents changed bruh");
    },
  },
  methods: {
    answerNumber(n) {
      return "Answer: " + n;
    },
    lolsaveQuestion() {
      console.log("dood");
      console.log(typeof this.chosenGameNumber);
      const correctAnswer = this.correctAnswer -1;
      const data = {
        gameId: this.chosenGameNumber,
        title: this.title,
        description: this.description,
        type: this.chosenQuestionType,
        answers: this.multipleChoiceAnswers,
        correctAnswer: correctAnswer,
      };
      console.log(data);
      db.collection("games")
        .add(data)
        .then(() => {
          console.log("Document successfully written!");
        });
    },
    addEmployee() {
      db.collection("employees")
        .add({ name: "lelz" })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    },
    addAnswer(number) {
      db.collection("answers")
        .add({
          name: this.name,
          answer: number,
        })
        .then(() => {
          console.log("Document successfully written!");
        });
    },
  },
  created() {
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
  },
};
</script>
