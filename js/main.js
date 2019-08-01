//someone writes a skill in the input
var $newSkill;

$('$newSkill').on('click', '.add-skill', function(evt) {
    var template = `
    <tr>
        <td></td>
        <td><button class="deleteButton">Delete</button></td>
    </tr>
    `;
    $template.append('tbody').fadeIn(2000)
});

$('#skills tbody').on('click', '.delete-button', function() {
    $(this).closest('tr')
        .fadeOut(1000, function() {
            $(this).remove();
        })
});
