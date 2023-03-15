let poin = 0;
if (confirm("Apakah Kamu ingin bermain batu, gunting, kertas?")) {
    function game() {
        let pemain = prompt("Masukkan pilihan mu batu/gunting/kertas");
        if(pemain){
            let computer = Math.random();
            switch (true) {
                case computer < 0.30:
                computer = "kertas";
                break;
                case computer <= 0.70:
                computer = "batu";
                break;
                default:
                computer = "gunting";
                break;
            }
        
            switch (pemain) {
                case computer:
                alert("Hasil: Seri!");
                break;
                case "batu":
                switch (computer) {
                    case "gunting":
                    alert("Hasil: Kamu Menang!");
                    poin += 10;
                    break;
                    default:
                    alert("Hasil: Kamu Kalah!");
                    poin -= 10;
                    break;
                }
                break;
                case "gunting":
                switch (computer) {
                    case "kertas":
                    alert("Hasil: Kamu Menang!");
                    poin += 10;
                    break;
                    default:
                    alert("Hasil: Kamu Kalah!");
                    poin -= 10;
                    break;
                }
                break;
                case "kertas":
                switch (computer) {
                    case "batu":
                    alert("Hasil: Kamu Menang!");
                    poin += 10;
                    break;
                    default:
                    alert("Hasil: Kamu Kalah!");
                    poin -= 10;
                    break;
                }
                break;
                default:
                alert("Pilihan tidak tersedia!");
                break;
            }
        
            alert(`Kamu Memilih : ${pemain} \nKomputer Memilih : ${computer} \nPoin Kamu : ${poin}`);
        
            let lagi = confirm("Lanjut Bermain?");
            if (lagi) {
                game();
            } else {
                alert(`Terima kasih sudah bermain! \nPoin Kamu: ${poin}`);
            }
        } else{
            if(confirm("Kamu Tidak Jadi lanjut main?")){
                alert(`Terima kasih! \nPoin Kamu: ${poin}`);
            }else{
                game();
            }
        }  
    }
    game();
} else {
    alert("Baiklah, sampai jumpa lagi!");
}

