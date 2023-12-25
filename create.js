let taskone = document.getElementById("taskone")

async function addNewTask() {
    let obj = {
        title: taskone.value,
        type: false
    }

    let res = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj)
    })

}