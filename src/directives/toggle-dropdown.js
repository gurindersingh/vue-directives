import $ from 'cash-dom';

let DropDownToggle = {

    bind: function (el, binding, vnode) {

        let button = $(el).children().first();
        let dropdown = $($(el).children()[1]);

        if (dropdown) {
            button.on('click', e => {
                e.preventDefault();
                if (dropdown.toggleClass('open').hasClass('open')) {

                    document.addEventListener('click', e => {
                        if (!el.contains(e.target)) {
                            dropdown.removeClass('open');
                        }
                    });

                }

            });
        }

    }

};

export default DropDownToggle