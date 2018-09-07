Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        types: ['listings', 'events', 'offers'],
        filter_raw: 'all',
        listings: [],
        events: [],
        offers: []
    },
    computed: {
        filter: function() {
            if (this.filter_raw === 'all') { return this.types; }

            return this.types.filter(type => type === this.filter_raw);
        },
        items: function() {
            const items = [];

            this.filter.forEach((type) => items.push(this[type]))
            
            return [].concat(...items);
        },
    },
    methods: {
        getPlaceholderImage: function(e) {
            e.target.src = 'assets/images/placeholder.jpg';
        },
        setFilter: function(e, type) {
            document.querySelectorAll('.controls .btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            this.filter_raw = type;
        },
        getData: async function(type) {
            const promise = await fetch(`https://sv-reqres.now.sh/api/${type}/?per_page=6`);
            const res = await promise.json();

            this[type] = res.data;
        }
    },
    created: function() {
        this.types.forEach(type => this.getData(type));
    }
});