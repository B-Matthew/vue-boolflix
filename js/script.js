function initVue() {
  new Vue ({
    el:".container",
    data: {
      array:[],
      value: "",
      flags: {
        flagEn: "img/Inglese.png",
        flagIt: "img/Italia.jpg"
      }
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
          this.array= data.data.results;
          console.log(this.array);
        })
        .catch(() => console.log('error'));
      }
    },
  });
}

function init() {
  initVue();

}

$(document).ready(init);
