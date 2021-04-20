function initVue() {
  new Vue ({
    el:".container",

    data: {
      movies:[],
      tvSeries: [],
      value: "",
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
        this.value = "";
      },
      getVoteInteger: function(vote) {
        if (vote == 0) {
          return 1
        }
        return parseInt(Math.ceil(vote / 2))
      },
      getFlag: function(lang) {
        switch(lang) {
          case 'en' : return 'Inglese.png';
          case 'it' : return 'Italia.jpg';
        }
        return lang
      },
      isFlaggable: function(lang) {
        return lang == 'en' || lang == 'it';
      },
      getImage: function(image) {
        if (!image) {
          return 'img/unknown.jpg'
        }else {
          return this.imgForm.imgPath + this.imgForm.imgSize + image
        }
      },
      sliceOverview: function(text) {
        if (text.length > 500) {

          return text.slice(0,500) + "...";
        }else if(text.length == 0) {

          return "No overview yet"
        }
        return text;
      },

    },
  });
}

function init() {
  initVue();
}

$(document).ready(init);
