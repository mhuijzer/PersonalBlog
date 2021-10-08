references = document.getElementsByTagName('reference');

i = 0;

while (references.item(i) != null){
    references.item(i).onclick = function(){
        this.classList.toggle('opened');
    }
    i++;
}
previous = document.getElementsByTagName('previous');

j = 0;

while (previous.item(j) != null){
    previous.item(j).onclick = function(){
        this.classList.toggle('opened');
    }
    j++;
}