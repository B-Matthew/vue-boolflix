function initVue() {
  new Vue ({
    el:".container",

    data: {
      movies:[],
      tvSeries: [],
      value: "",
      flags: {
        flagEn: "img/Inglese.png",
        flagIt: "img/Italia.jpg"
      },
      imgForm:{
        imgPath: "https://image.tmdb.org/t/p/",
        imgSize:"w342",
    },
  },


    methods:{
      searchMovie: function () {
        axios.get("https://api.themoviedb.org/3/search/movie",{
          params: {
            'api_key': '1550e050d06eb77cc575c30c39bfab7c',
            'query' : this.value
          }
        })
        .then(data => {
          // console.log(data);
          this.movies= data.data.results;
          console.log(this.movies);
        });

        axios.get("https://api.themoviedb.org/3/search/tv",{
          params: {
            'api_key':'1550e050d06eb77cc575c30c39bfab7c',
            'query': this.value
          }
        })
        .then(data => {
          this.tvSeries = data.data.results;
          console.log(this.tvSeries);
        });
      },
      // getVoteInteger: function (){
      //   for (var i = 0; i < this.movies.length; i++) {
      //     const item = this.movies[i];
      //     Math.ceil(item.vote_average);
      //   }
      // }
    },
  });
}

function init() {
  initVue();
}


$(document).ready(init);
