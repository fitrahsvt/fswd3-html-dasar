//if
let respond = prompt('1 + 1 =');
if (respond == 2) {
    alert("Correct!");
}

//if-else
let respond2 = prompt('2 + 2 =');
if (respond2 == 4) {
    alert("Correct!");
}else {
    alert("Sorry You Wrong!");
}

//else-if
let respond3 = prompt("3 + 3 =")

if (respond3 == 6) {
    alert("Correct!");
} else if (respond3 < 6){
    alert("Terlalu rendah!")
} else
    alert("Terlalu Tinggi!")

//switch
let respond4 = prompt("Silahkan pilih angka keberuntungan anda 1/2/3/4");

switch (respond4) {
    case "1":
        alert("Selamat Anda Beruntung")
        break;

    case "2":
        alert("Anda Lumayan Beruntung")
        break;

    case "3":
        alert("Anda tidak beruntung")
        break;

    case "4":
        alert("Maaf, Anda Sangat tidak beruntung")
        break;

    default:
        alert("Maaf pilihan tidak tersedia!")
        break;
}
