const vm = new Vue({
    el : "#app",

    data : {
        welcomeMessage : "Our first Vue app!",
        
        anotherMessage : "yay! you can haz vue!",

        hazVue : true,

        targetURL : "http://vuejs.org",

        anchorOff : true,

        deliciousFruit : [
            { name: "apple", flavour: "tasty!"},
            { name: "oranges", flavour: "sweet!"},
            { name: "pineapple", flavour: "tangy!"}
        ]
    },

    methods : {
        logFruit(e) {
            console.log(e.currentTarget);
        },

        changeText() {
            this.anotherMessage = "changed this from a functon call";
        }

    }
});

const vm2 = new Vue ({
    el : "#footer",
    data : {
        footerMessage : "this should be in the footer"
    }

});