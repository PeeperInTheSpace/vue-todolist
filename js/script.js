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

            },

            methods : {

                deleteTask: function(index) {
                    this.toDoArray.splice(index, 1)
                }
            }

        }
    
)