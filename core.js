references = document.getElementsByTagName('reference');

i = 0;

while (references.item(i) != null){
    references.item(i).onclick = function(){
        this.classList.toggle('opened');
    }
    i++;
}