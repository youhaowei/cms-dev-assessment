Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        items: []
    },
    methods: {
        getPlaceholderImage: function(e) {
            e.target.src = '/assets/images/placeholder.jpg';
        }
    },
    created: async function() {
        const resPromise = await fetch('https://sv-reqres.now.sh/api/listings/?per_page=6');
        const res = await resPromise.json();

        this.items = res.data;
    }
});