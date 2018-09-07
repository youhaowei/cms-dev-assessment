Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        items: []
    },
    methods: {
        getPlaceholderImage: function(e) {
            e.target.src = 'assets/images/placeholder.jpg';
        },
        standardizeImages: function(array, type) {
            
        }
    },
    created: async function() {
        const listingsPromise = await fetch('https://sv-reqres.now.sh/api/listings/?per_page=6');
        const listings = await listingsPromise.json();

        listings.data.forEach(item => {
            item.asset = item.primary_image_url || 'assets/images/placeholder.jpg';
        });

        const eventsPromise = await fetch('https://sv-reqres.now.sh/api/events/?per_page=6');
        const events = await eventsPromise.json();

        events.data.forEach(item => {
            item.asset = item.media_raw ? item.media_raw[0].mediaurl : 'assets/images/placeholder.jpg';
        });

        const offersPromise = await fetch('https://sv-reqres.now.sh/api/offers/?per_page=6');
        const offers = await offersPromise.json();

        offers.data.forEach(item => {
            item.asset = item.media ? item.media[0].mediaurl : 'assets/images/placeholder.jpg';
        });

        this.items = listings.data.concat(events.data).concat(offers.data);
    }
});