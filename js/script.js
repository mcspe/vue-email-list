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
        const cycleLimit = this.emailListN;
        setTimeout(() => {
          for (let i = 0; i < cycleLimit; i++) {
            axios.get(this.apiUrl)
              .then( result => {
                this.emailList.push(result.data.response);
              });
          }
          this.loading = false;
        }, 2000);
        this.emailListN = null;
      }
    }
  },
  mounted(){

  }
}).mount('#app');