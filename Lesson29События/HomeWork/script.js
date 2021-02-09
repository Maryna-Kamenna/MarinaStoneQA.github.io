let text = getElementById('text');
let text1 = getElementById(text1);

text.addEventListener('keydown', function (event) {
    if ((event.ctrlKey && (event.code == "KeyE"))) {
         change('text1')
    }
});