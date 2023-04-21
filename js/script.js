const {createApp} = Vue;

createApp({
  data() {
    return{
      emailList: [],
      emailListN: null,
      loading: true,
      startLoading: false,
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail'
    }
  },
  methods: {
    generateList() {
      if (this.emailListN) {
        this.loading = true;
        this.startLoading = true;
        this.emailList = [];
        for (let i = 0; i < this.emailListN; i++) {
          axios.get(this.apiUrl)
            .then( result => {
              this.emailList.push(result.data.response);
            });
        }
        this.loading = false;
        this.emailListN = null;
      }
    }
  },
  mounted(){

  }
}).mount('#app');