let data = JSON.parse(localStorage.getItem('data'))// || [];
if (data == null){ // to je isto kt  (|| [])
    data = [];
}

let list = document.getElementById("list")

localStorage.setItem('data', JSON.stringify(data));

function save(){
    list.innerHTML = "";
    let count = 0;

    data.forEach(item => {
        let content = document.createElement("div")
        content.id = "content"
        list.append(content)

        let tickbox = document.createElement("input");
        tickbox.id = "tickbox"
        tickbox.type = "checkbox"

        let newitem = document.createElement("p");
        newitem.id = "todo-task"
        newitem.textContent = item;

        let newbtn = document.createElement("button")
        newbtn.innerHTML = "<i class = 'fa-solid fa-trash'></i>"
        newbtn.id = count;
        newbtn.onclick = () => remove(newbtn.id)


        content.append(tickbox, newitem, newbtn)

        count += 1;
    })

    localStorage.setItem('data', JSON.stringify(data))
}


function test(){
    let text = document.getElementById("input").value;

    data.push(text)

    localStorage.setItem('data', JSON.stringify(text));

    document.getElementById("input").value = "";
    
    save()
}

function remove(id){
    let content = JSON.parse(localStorage.getItem('data'))
    let remove = content[id];

    let num = 0;
    data.forEach(count => {
        num += 1;
    })

    for (let i = 0; i < num; i++){
        if (content[i] == remove){
            data.splice(id, 1)
        }
        
    }

    localStorage.setItem('data', JSON.stringify(data))

    save()


}
save()