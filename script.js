document.querySelector('#add').onclick = function(){
    if(document.querySelector('#task input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#list').innerHTML += `
        <div class="tasks">
        <span id="taskname">
        ${document.querySelector('#task input').value}
        </span>
        <button class="delete">
        <i class="far fa-trash-alt"></i>
        </button>
        </div>`;

        var current_task = document.querySelectorAll('.delete');
        for(var i=0; i<current_task.length; i++){
            current_task[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        var task = document.querySelectorAll('.tasks');
        for(var i=0; i<task.length; i++){
            task[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
        document.querySelector("#task input").value = "";
    }
}
