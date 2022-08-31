const app = Vue.createApp({
  data() {
    return {
      placeholder: "",
    };
  },
  watch: {
    placeholder(newQuestion, oldQuestion) {
      this.checkCardNumber();
    },
  },
  methods: {
    checkCardNumber() {
      var reg = this.placeholder.replace(/\s/g, "").replace(/(.{4})/g, "$1 ");

      if (this.placeholder.length < 16) {
        this.placeholder = reg;
      } else {
        return;
      }
    },
  },
});

app.mount("#app");
