var studentsArray = [
    {
        "id": 1,
        "name":"Мажура Кирило Олегович",
        "group":"РПЗ 20 2/9",
        "mark":"2005",
        "photo":""
    },
    {
        "id": 2,
        "name":"Добровольский Євгеній Олександрович",
        "group":"РПЗ 20 2/9",
        "mark":"2005",
        "photo":""
    },
    {
        "id": 3,
        "name":"Пугач Костянтин Андрійович",
        "group":"РПЗ 20 2/9",
        "mark":"2004",
        "photo":""
    },
      {
        "id": 4,
        "name":"Іванов Іван Іванович",
        "group":"РПЗ 20 500/700",
        "mark":"2000",
        "photo":""
    },
    ]
var columnsArray = [
        "name",
        "group",
        "photo",
        "mark"
]
import { createApp } from 'vue'
import axios from 'axios'
// const { createApp } = Vue;
createApp({
    data() {
       return {
           students: studentsArray,
           columns: columnsArray,
           student: {name:'', zdav: false,mark: null, group:'', photo:''},
           search:'',
       }
    },
    mounted () {
        axios.get('http://34.82.81.113:3000/students').then((response) => {
            console.log(response.data);
            this.students=response.data
        })
    },
    methods: {
       deleteStudent(studId) {
           this.students = this.students.filter(elem => {
               return elem.id != studId;
           });
       },
       addStudent() {
           this.student.id = this.students.length+1;
           this.students.push(this.student);
           this.student.name = '';
           this.student.zdav = false;
           this.student.mark = null;
           this.student.group = '';
           this.student.photo='';
       }
    },
 }).mount('#app');