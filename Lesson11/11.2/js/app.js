$(function() {

    let $tabs = $('.tabs'),
        $tabs__nav = $($tabs).children('.tabs__nav'),
        $tabs__item = $($tabs__nav).children('.tabs__item'),
        $tabs__devider = $($tabs__nav).children('.tabs__devider'),
        $tabs__link = $($tabs__item).children('.tabs__link'),
        $tabs__link_active = $($tabs__item).children('.tabs__link--active');

    $($tabs).on('click', '.tabs__item', function(){
        // console.log(this); лишка на которую нажали
        // console.log(event.target); ссылка на которую нажали

        $($tabs__link).removeClass('tabs__link--active');

        $(event.target).addClass('tabs__link--active');

        let newStyle = GetStyles(this);
        MoveDevider(newStyle.width, newStyle.offset);
    })

    /**
     * 
     * @param {HtmlElement} _html_element 
     * @returns object with new width and size for devider
     */
    function GetStyles(_html_element) {
        let style = {};
        style.width = $(_html_element).outerWidth();
        style.offset = _html_element.offsetLeft;
        return style;
    }

    /**
     * 
     * @param {number} _width 
     * @param {number} _left 
     */
    function MoveDevider(_width, _left) {
        $($tabs__devider).css("width", _width + "px");
        $($tabs__devider).css("left", _left + "px");
    }

    let startStyle = GetStyles($($tabs__link_active).parent()[0]);

    MoveDevider(startStyle.width, startStyle.offset);
});