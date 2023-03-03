
export function CUSTOM_showAlert() {
    const alertButton = document.getElementById("alert");
    const alertDialog = document.getElementById("alertDialog");
    alertButton.addEventListener("click", () => {
        alertDialog.showModal();    
    });
}
export function CUSTOM_showConfirm(){
    const buttonOutput = document.getElementById("buttonOutput");
    const confirmButton = document.getElementById("confirm");
    const confirmDialog = document.getElementById("confirmDialog");
    confirmButton.addEventListener("click", () =>{
        buttonOutput.textContent = ""
        setTimeout(() => {
            confirmDialog.showModal();
            confirmDialog.addEventListener("close",() =>
            {
                buttonOutput.textContent = `The value returned by the confirm method is : ${confirmDialog.returnValue}`;
            })
        }, 0)
    });
}
export function CUSTOM_showPrompt(){
    const buttonOutput = document.getElementById("buttonOutput");
    const promptButton = document.getElementById("prompt");
    const promptDialog = document.getElementById("promptDialog");
    const promptTxtInput = document.getElementById("userReply");
    const promptFrm = document.getElementById("promptFrm");
    let userInput = promptTxtInput.innerHTML;
    promptButton.addEventListener("click", () =>{
        promptFrm.reset();
        buttonOutput.textContent = "";
        setTimeout(() => {
            promptDialog.showModal();
            promptTxtInput.addEventListener("change",(e) =>
            {
                userInput = e.target.value;
            })
            promptDialog.addEventListener("close",() =>
            {
                   if(promptDialog.returnValue == "false" || userInput == ""){
                        buttonOutput.innerHTML = "User didn’t enter anything";
                    }
                    else{
                        buttonOutput.innerHTML = `Prompt result is : ${userInput}`;
                    }
            })
        }, 0) 
    });
}
