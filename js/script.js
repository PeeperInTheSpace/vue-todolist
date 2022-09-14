const vueToDoList = new Vue (   

        {
            el : "#root",
            data : {

                toDoArray: [
    
                {
                    text: 'Task Number 1',
                    done : true
                },
                {
                    text: 'Task Number 2',
                    done : true
                },
                {
                    text: 'Task Number 3',
                    done : false
                },
                {
                    text: 'Task Number 4',
                    done : true
                },
                {
                    text: 'Task Number 5',
                    done : false
                }
    
                ],

                task : ''

            },

            methods : {

                deleteTask(index) {
                    this.toDoArray.splice(index, 1)
                },

                addNewTask() {

                    let newTask = {
                        text: this.task,
                        done: false
                    }

                    this.toDoArray.push(newTask)

                    this.task = ''

                },

                doneUndone(index) {
                    this.toDoArray[index].done = !this.toDoArray[index].done;
                }



            }



        }
    
)