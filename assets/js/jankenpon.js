let poin = 0;
//function menentukan pilihan
function game(){
    let player = prompt("Masukkan Pilihan Anda Batu/Gunting/Kertas");
    if (player) {
        //pilihan komputer
        let computer = Math.random();
        if (computer < 0.33) {
            computer = "Batu";
        }else if(computer < 0.66){
            computer = "Gunting";
        }else{
            computer = "Kertas";
        }
        //pilihan player
        switch (player) {
            case computer:
                alert("Hasil Seri!");
                alert(`Kamu : ${player} \nKomputer : ${computer} \npoin : ${poin}`);
                lanjut();
                break;
            case "Gunting":
                switch (computer) {
                    case "Kertas":
                        alert("Selamat anda menang!");
                        poin +=1;
                        alert(`Kamu : ${player} \nKomputer : ${computer} \npoin : ${poin}`);
                        lanjut();
                        break;
                    default:
                        alert("Yahh anda kalah!");
                        poin-=1;
                        alert(`Kamu : ${player} \nKomputer : ${computer} \npoin : ${poin}`);
                        lanjut();
                        break;
                }
                break;
            case "Kertas":
                switch (computer) {
                    case "Batu":
                        alert("Selamat anda menang!");
                        poin +=1;
                        alert(`Kamu : ${player} \nKomputer : ${computer} \npoin : ${poin}`);
                        lanjut();
                        break;
                    default:
                        alert("Yahh anda kalah!");
                        poin-=1;
                        alert(`Kamu : ${player} \nKomputer : ${computer} \npoin : ${poin}`);
                        lanjut();
                        break;
                }
                break;
            case "Batu":
                switch (computer) {
                    case "Gunting":
                        alert("Selamat anda menang!");
                        poin +=1;
                        alert(`Kamu : ${player} \nKomputer : ${computer} \npoin : ${poin}`);
                        lanjut();
                        break;
                    default:
                        alert("Yahh anda kalah!");
                        poin-=1;
                        alert(`Kamu : ${player} \nKomputer : ${computer} \npoin : ${poin}`);
                        lanjut();
                        break;
                }
                break;
            default:
                alert("Pilihan tidak tersedia")
                game();
                break;
        }
    } else {
        if (confirm("Kamu tidak jadi main?")) {
            hasil();
        } else {
            game();
        }
    }
};
//fungsi lanjut
function lanjut(){
    if(confirm("Lanjut bermain?")){
        game();
    }else{
        hasil();
    }
};
//fungsi untuk menampilkan hasil
function hasil(){
    alert(`Terima Kasih Sudah Bermain! \nPoin Kamu : ${poin}`);
};
//Mulai Permainan
if (confirm("Apakah anda Ingin Bermain Batu/Gunting/Kertas?")) {  
    game();   
} else {
    alert("Baiklah Sampai Jumpa lagi!");
}
