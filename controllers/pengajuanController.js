const model = require('../models');
require('dotenv').config();

exports.tambahPengajuan = async(req, res) => {
    const {judul_karya_haki, jenis_haki, deskripsi, surat_pernyataan_hak_cipta_pencipta, surat_pengalihan_hak_cipta, surat_pernyataan_ketua_lppm} = req.body;
    try {

        const pengajuan = await model.pengajuan.create({
            judulKaryaHaki: judul_karya_haki,
            jenisHaki: jenis_haki,
            deskripsi,
            suratPernyataanHakCiptaPencipta : surat_pernyataan_hak_cipta_pencipta,
            suratPengalihanHakCipta: surat_pengalihan_hak_cipta,
            suratPernyataanKetuaLppm: surat_pernyataan_ketua_lppm
        });

        res.json(pengajuan)

    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
};
