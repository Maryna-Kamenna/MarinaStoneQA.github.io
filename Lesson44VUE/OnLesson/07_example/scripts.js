
Vue.component('film-item', {
    props: ['name', 'poster', 'year'],
    methods: {
        del() {
            this.$emit('del-item')
        }
    },
    template: `
        <div class="row mt-5 mb-5">
            <div class="col-4">
            <img :src="poster" :alt="name" width="" height="">  
            </div>    
            <div class="col-8">
            <h4 v-text="name"></h4>
            <p v-html="year"></p>
            <button @click="del">Delete</button>
            </div>
        </div>`
})
var app = new Vue({
    el: '#app',
    data: {
        name: '',
        apiUrl: 'http://www.omdbapi.com/?apikey=6d2c5721&s=',
        films: null

    },
    methods: {
        getFilms() {
            axios
                .get(this.searchLink)
                .then(response => {
                    this.films = response.data.Search
                })
        },
        deleteFilm(index) {
            this.films.splice(index, 1)
        }
    },
    computed: {
        searchLink() {
            return this.apiUrl + this.name
        }
    }
});
//adventure