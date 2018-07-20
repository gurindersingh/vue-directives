import $ from 'cash-dom';

let EqualHeight = {

    inserted(el) {
        let height = 0;

        let items = [...el.children];

        items.map(item => {
            height = height < item.clientHeight ? item.clientHeight : height;
        });

        items.map(item => {
            $(item).find('.eqh').height(height)
        });

    }

};

export default EqualHeight