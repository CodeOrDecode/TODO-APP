let mainContent = document.getElementById("root");


async function read() {
    try {

        let res = await fetch(`http://localhost:3000/tasks`);
        let response = await res.json();
        display(response);

    } catch (error) {
        console.log(error)
    }
}

read();


function display(data) {
    data.forEach((ele) => {
        let div1 = document.createElement("div");
        div1.className = "stylediv";
        let heading3 = document.createElement("h3");
        heading3.innerText = ele.title;
        let p1 = document.createElement("p");
        p1.innerText = ele.type ? "Is task completed  : Yes" : "Is task completed : No";
        let button1 = document.createElement("button");
        button1.innerText = "Delete"
        button1.addEventListener("click", async function () {
            let res = await fetch(`http://localhost:3000/tasks/${ele.id}`, {
                method: "DELETE",
            })
        })

        let button2 = document.createElement("button");
        button2.innerText = "Update"
        button2.addEventListener("click", async function () {
            let obj = { type: !ele.type }
            let res = await fetch(`http://localhost:3000/tasks/${ele.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(obj)
            })
        })
        div1.append(heading3, p1, button1, button2);
        mainContent.append(div1);
    })

}

