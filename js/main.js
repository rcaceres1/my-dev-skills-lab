//someone writes a skill in the input
var $newSkill;

$('$newSkill').on('form', 'click'), function(evt) {
    $('#table').childs('tr').append('<tr><td></td><td><button class="delete-button">Delete</button></td></tr>');
};

$('#skills tbody').on('click', '.delete-button', function() {
    $(this).closest('tr')
        .fadeOut(1000, function() {
            $(this).remove();
        })
});
