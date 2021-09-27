$(document).ready(function() {
    $("#buttonPost").on("click", function(e) {
        e.preventDefault()
        
        if ($("#todoText").val().length != 0) {
            var divText = $("<div>")
            divText.append('<input type="checkbox" name="todo">');
            divText.append('<label class="lbl">'+$("#todoText").val()+'</label>');
            $("#todoList").append(divText);
        }
        $("#todoText").val("");
    });

    $("#buttonClear").on("click", function() {
        var todos = $("input[name='todo']")
        todos.prop("checked", false);
    });

    $("#buttonMark").on("click", function() {
        var todos = $("input[name='todo']")
        todos.prop("checked", true);
    });

    $("#buttonDelete").on("click", function() {
        $("#todoList").empty();
    });
});