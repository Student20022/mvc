export default class ModelCities {
    URL = `https://docs.google.com/spreadsheets/d/e/2PACX-1vR39fZYohcJwjumMPL4TtFevXEy394tREtl7hVDhkGHuEkn0fdJ5O1eM-60CZX6Lmm0xre-jh9NHBpk/pub?output=tsv`;
    SEP_LINE = '\r\n';
    SEP_CELL = '\t';


    loadData(){
        return fetch(this.URL).then(r => r.text());
    }

    parseData(d){
        const tableArr = d.split(this.SEP_LINE).map(r => r.split(this.SEP_CELL));
        const names = tableArr.shift();

        const formatData = tableArr.map(el => {
            const city = {};
            names.forEach((name, i) => city[name] = el[i]);

            return city;
        })
    
        this.formatData = formatData;
        this.names = names;

        return { names, formatData };
    
    }
}