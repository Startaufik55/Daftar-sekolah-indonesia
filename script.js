$.getJSON('https://api-sekolah-indonesia.vercel.app/sekolah?page=1&perPage=10', function (data) {
  let dataSekolah = data.dataSekolah;
  console.log(dataSekolah);
  $.each(dataSekolah, function(i, data) {
    $('#Sekolah').append('<div class="card mt-1" style="display: center;"><div class="card-body"><h5 class="card-title text-center">'+ data.sekolah +'</h5><h6 class="card-subtitle mb-2 text-body-secondary">npsn: '+ data.npsn +'</h6><h6 class="card-subtitle mb-2 text-body-secondary">status: '+ data.status +'</h6><h6 class="card-subtitle mb-2 text-body-secondary">Alamat: '+ data.alamat_jalan +' '+ data.kecamatan +' '+ data.kabupaten_kota +'</h6></div></div>');
  });
 });