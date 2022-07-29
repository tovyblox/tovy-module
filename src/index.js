const axios = require('axios');

class Tovy {
    constructor (url, apiKey) {
        this.url = url;
        this.apiKey = apiKey;
        if (!this.url) {
            throw new Error('URL is required.');
        }
        if (!this.apiKey) {
            throw new Error('API key is required.');
        }

        if (this.url.endsWith('/')) {
            this.url = this.url.slice(0, -1);
        }

        this.axios = axios.create({
            baseURL: this.url,
            headers: {
                'api': this.apiKey
            }
        });


        const URLS = {
            'promote': this.url + '/api/ranking/promote',
            'demote': this.url + '/api/ranking/demote',
            'setrank': this.url + '/api/ranking/setrank',
            'shout': this.url + '/api/ranking/shout',
        }

        this.urls = URLS;


    }
    async promote (userid) {
        let req = await this.axios.post(this.urls.promote, {
            user: userid
        }).catch(err => {
            throw new Error(err);
        })    
    }
    async demote (userid) {
        let req = await this.axios.post(this.urls.demote, {
            user: userid
        }).catch(err => {
            throw new Error(err);
        })
    }
    async setrank (userid, rankid) {
        let req = await this.axios.post(this.urls.setrank, {
            user: userid,
            rank: rankid
        }).catch(err => {
            throw new Error(err);
        })
    }
    async shout (message) {
        let req = await this.axios.post(this.urls.shout, {
            shout: message
        }).catch(err => {
            throw new Error(err);
        })
    }
}

module.exports = Tovy;