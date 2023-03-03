
export let posts =[]

export function addItem() {
    const addPostBtn = document.getElementById("addPostBtn");
    const userInputDia = document.getElementById("userInputDia");
    const userInputFrm = document.getElementById("userInputFrm");
    addPostBtn.addEventListener("click", () =>{
        userInputDia.showModal();
    });
    userInputDia.addEventListener("close",() =>
    {
        if(userInputDia.returnValue == "true"){
            post();
        }
        console.log(posts)
        listItems();
    });
}

function post(){
    const postTitleIn = document.getElementById("postTitleIn");
    const postDateIn = document.getElementById("postDateIn");
    const postSummaryIn = document.getElementById("postSummaryIn");
    console.log(postTitleIn.value);
    console.log(postDateIn.value);
    console.log(postSummaryIn.value);
    if(postTitleIn.value == "" || postDateIn.value == "" || postSummaryIn.value==""){
        alert("post is not filled properly")
        userInputDia.showModal();
    }
    else{
        posts.push({
            title:postTitleIn.value,
            date:postDateIn.value,
            summary:postSummaryIn.value
        });
        userInputFrm.reset();
    }
}

export function deleteItem(){
    const deleteBtn = document.getElementById('deleteBtn');
    deleteBtn.addEventListener("click", () =>{
        posts.splice(index,1);
        listItems();
    })
}

export function editItem(index){

}

export function listItems() {
    let list = "";
    for (let i = 0; i < posts.length; i++) {
      list += "<li >";
      list += posts[i].title + " " + posts[i].date + " " + posts[i].summary + " ";
      list +=
        "<span id='deleteBtn'> delete </span>" +
        "<span id='editBtn'' onclick='editItem(" +
        i +
        ")'>edit</span></li>";
    }
    document.querySelector("#postsList").innerHTML = list;
}