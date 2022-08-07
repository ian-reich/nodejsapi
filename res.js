'use strict';
exports.ok = function (values, res) {
    var data = {
        'status':200,
        'values':values
    };
     res.json(data);
     res.end();
};

// Nested JSON 
exports.oknested = function(values, res){
    // Akumulasi 
    const hasil = values.reduce((akumulasikan, item) => {
        // Menetukan Key Group 
        if (akumulasikan[item.d_jual_nofak]) {
            // Buat variabel group No Faktur
            const group = akumulasikan[item.d_jual_nofak];
            // Cek array No Faktur 
            if (Array.isArray(group.d_jual_barang_nama)) {
                group.d_jual_barang_nama.push(item.d_jual_barang_nama);
            } else {
                group.d_jual_barang_nama = [group.d_jual_barang_nama, item.d_jual_barang_nama];
            }
        } else {
            akumulasikan[item.d_jual_nofak]=item;
        }
        return akumulasikan;
    }, {});
    var data = {
        'status':200,
        'values':hasil
    };
    res.json(data);
    res.end();
};