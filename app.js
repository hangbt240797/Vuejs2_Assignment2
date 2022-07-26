const app = Vue.createApp({
    data() {
      return {
        practiceAlert: "",
        name2: "",
        name22: "",
        name3: "",
      };
    },
    methods: {
      showAlert() {
        alert("Content alert you enter: " + this.practiceAlert);
      },
      inputKeyDown(event) {
        this.name2 = event.target.value;
      },
      inputKeyEnter(event) {
        this.name3 = event.target.value;
      },
    },
  });
  
  app.mount("#assignment2");
  