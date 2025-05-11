const displayInput=document.querySelector("#display");
let deger=displayInput.value;
function sayiEkle(sayi){
    displayInput.value+=sayi
}
function operatorEkle(operator){
    displayInput.value+=" " +operator+ " ";

}
displayInput.style.textAlign="end";
function hesapla(){
    try {
        displayInput.value=eval(displayInput.value);
    } catch (error) {
        displayInput.value="Hata";
    }
}
function clearSonuc() {
    displayInput.value = '';
}
function sil(){
    displayInput.value = displayInput.value.slice(0, -1);
}