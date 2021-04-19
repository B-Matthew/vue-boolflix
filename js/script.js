function initVue() {
  new Vue ({
    el:".container",
    data: {
      array:[]
    },
    mounted() {
      axios.get("",{
        params: {

        }
      })
      .then(data => {
        console.log(data);
      })
      .catch(() => console.log('error'));
    }
  });
}

function init() {


}

$(document).ready(init);
