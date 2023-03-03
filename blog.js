
export let posts = JSON.parse(localStorage.getItem("blog-posts")) || [];

export function addItem() {
    const addPostBtn = document.getElementById("addPostBtn");
    const userInputFrm = document.getElementById("userInputFrm");
    const userInputDia = document.getElementById("userInputDia");
    const cancleBtn = document.querySelector("#userInputFrm button");

    addPostBtn.addEventListener("click", () =>{
        const postBtn = "<button id='postBtn' value=truePost>Post</button>";
        cancleBtn.insertAdjacentHTML("afterend",postBtn);
        userInputFrm.reset();
        document.getElementById("postDateIn").valueAsDate = new Date();
        userInputDia.showModal();
    });
    userInputDia.addEventListener("close",() =>
    {
        if(userInputDia.returnValue == "truePost"){
            post(true, 0);
            if(!!document.getElementById("postBtn")){
                document.getElementById("postBtn").remove();
            }
        }
        else{
            if(!!document.getElementById("postBtn")){
                document.getElementById("postBtn").remove();
            }
        }
        console.log(posts);
        listItems();
    });
}

function post(isNew, index){
    const postTitleIn = document.getElementById("postTitleIn");
    const postDateIn = document.getElementById("postDateIn");
    const postSummaryIn = document.getElementById("postSummaryIn");
    console.log(postTitleIn.value);
    console.log(postDateIn.value);
    console.log(postSummaryIn.value);
    if(postTitleIn.value == "" || postDateIn.value == "" || postSummaryIn.value==""){
        alert("post is not filled properly");
        userInputDia.showModal();
    }
    else{
        if(isNew){
            posts.push({
                title:postTitleIn.value,
                date:postDateIn.value,
                summary:postSummaryIn.value
            });
            localStorage.setItem("blog-posts", JSON.stringify(posts));
            
        }
        else{
            posts[index] = {
                title:postTitleIn.value,
                date:postDateIn.value,
                summary:postSummaryIn.value
            };
            localStorage.setItem("blog-posts", JSON.stringify(posts));  
        }
    }
}

export function deleteItem(index){
    console.log(index);
    posts.splice(index,1);
    localStorage.setItem("blog-posts", JSON.stringify(posts));
    listItems();
    console.log(posts);
}

export function editItem(index){
    const userInputDia = document.getElementById("userInputDia");
    const userInputFrm = document.getElementById("userInputFrm");
    const userInputFrmElem = document.getElementById("userInputFrm").elements;
    const cancleBtn = document.querySelector("#userInputFrm button");

    const confimEditBtn = "<button id='confimEditBtn' value=trueEdit>Edit Post</button>";
    cancleBtn.insertAdjacentHTML("afterend",confimEditBtn);

    userInputFrmElem.namedItem("postTitleIn").value = posts[index].title;
    userInputFrmElem.namedItem("postDateIn").value = posts[index].date;
    userInputFrmElem.namedItem("postSummaryIn").value = posts[index].summary;

    userInputDia.showModal();

    userInputDia.addEventListener("close", () =>{
        if(userInputDia.returnValue == "trueEdit"){
            post(false, index);
            if(!!document.getElementById("confimEditBtn")){
                document.getElementById("confimEditBtn").remove();
            }
        }
        else{
            if(!!document.getElementById("confimEditBtn")){
                document.getElementById("confimEditBtn").remove();
            }
        }
        console.log(posts);
        listItems();
    })

}

export function listItems() {
    let list = "";
    for (let i = 0; i < posts.length; i++) {
      list += "<li >";
      list += posts[i].title + " " + posts[i].date + " " + posts[i].summary + " ";
      list +=
        "<span id='deleteBtn' onclick='deleteItem(" +
        i +
        ")'> delete </span>" +
        "<span id='editBtn' onclick='editItem(" +
        i +
        ")'>edit</span></li>";
    }
    document.querySelector("#postsList").innerHTML = list;
}
