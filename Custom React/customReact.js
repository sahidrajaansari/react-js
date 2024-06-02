const reactElement = {
  type: "a",
  options: {
    href: "https:\\www.google.com",
    target: "_blank",
  },
  innerText:"Click to go to Google"
};

function customRender(element,container){
    const newElement=document.createElement(element.type);
    for (const prod in element.options) {
        newElement.setAttribute(prod,element.options[prod])
    }
    newElement.innerText=element.innerText;
    container.appendChild(newElement);
}

const domContainer = document.querySelector("#root");

customRender(reactElement,domContainer)
