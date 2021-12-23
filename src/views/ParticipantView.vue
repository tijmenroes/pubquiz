<template>
  <v-container>
      <v-text-field v-model="name">
      </v-text-field>
      <v-btn @click="addEmployee">
        ADD EMPLOYEE
      </v-btn>
      
      <v-container fluid v-if="loaded">
        <h1>{{currentQuestion.title}}</h1>
      <v-row class="text-center" >
        <v-col cols="6" v-for="(answer, i) in currentQuestion.answers" :key="i" @click="addAnswer(i)">
          <div class="answerButton">
            <span>
            {{answer}}
            </span>
          </div>
        </v-col>
      </v-row>
      </v-container>
   
      <hr>
      {{currentQuestion}}
      <v-btn @click="nextQuestion"></v-btn>
  </v-container>
</template>

<script>
import firebase from "../firebaseInit";
import 'firebase/firestore';

const db = firebase;
console.log(db);


export default {
  name: 'App',
  data: () => ({
    employees: [],
    loaded: false,
    documents: [],
    answers: [],
    questions: [],
    currentQuestion: {
      title: '',
      answers: ['']
    },
    questionNumber: 0,
    name: ''
  }),
  firestore: {
    documents: db.collection('employees'),
    answers: db.collection('answers'),
    questions: db.collection('games').where('gameId', '==', 1)
  },
  watch: {
    questions() {
        this.questionNumber = 0;
        this.currentQuestion = this.questions[0];
        this.loaded = true;
    }
  },
  methods: {
    addEmployee() {
              db.collection("employees")
          .add({ name: 'lelz' })
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
    }, addAnswer(number) {
          db.collection("answers")
          .add({ 
            name: this.name,
            answer: number })
          .then(() => {
            console.log("Document successfully written!");
          })
    }, nextQuestion() {
      this.questionNumber++;
      this.currentQuestion = this.questions[this.questionNumber]
    }

  }, created() {

  }
};
</script>

<style scoped>

.answerButton {
  width: 100%;
  height: 100px;
  border: 1px solid black;
}

.answerButton span{
    padding-top: 15px;
    position: relative;
    display: block;
}

</style>
