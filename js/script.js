const {createApp} = Vue;

createApp({
  data() {
    return{
      emailList: [],
      emailListN: null,
      loading: true,
      startLoading: false,
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      errorMsg: ''
    }
  },
  methods: {
    generateList() {
      if (this.emailListN > 0) {
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
      } else {
        this.errorMsg = 'Valore inserito non consentito';
        setTimeout(() => {
          this.errorMsg = '';
        }, 2000);
      }
    }
  },
  mounted(){

  }
}).mount('#app');