export default class ViewCities {
    DOM_TABLE = document.querySelector('.city-table table');

    renderData({ formatData, names }){
        const html = `
            ${ this.getTableHead(names) }
            <tbody>
                ${ this.getTableBody(formatData) }
            </tbody>
        `;

        this.DOM_TABLE.innerHTML = html;
    }

    getTableHead([n, name, pop]){
        return `<thead>
        <tr>
            <th>Soroka</th>
        </tr>
        <tr>
            <th scope="col">#</th>
            <th scope="col">${ name }</th>
            <th scope="col">${ pop }</th>
        </tr>
        </thead>`;
    }

    getTableBody(data){
        return data.map(({ order, city, population }) => {
            return `
            <tr>
                <th scope="row">${ order }</th>
                <td>${ city }</td>
                <td>${ population }</td>
            </tr>`;
        }).join('');
    }
}