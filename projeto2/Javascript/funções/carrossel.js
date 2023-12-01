function handleFileSelect(event) {
    var files = event.target.files;
    var carouselInner = document.querySelector('.carousel-inner');

    // Limite de 4 fotos
    if (files.length > 4) {
        alert('Você pode selecionar no máximo 4 fotos.');
        return;
    }

    // Limpa o carrossel existente
    carouselInner.innerHTML = '';

    // Itera sobre os arquivos
    for (var i = 0; i < files.length; i++) {
        displayImages(files[i]); // Chama displayImages para exibir as imagens
    }
}

document.getElementById('addFilesBtn').addEventListener('click', function () {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function (event) {
    handleFileSelect(event);
});

// Função para exibir as imagens após a seleção
function displayImages(file) {
    var carouselInner = document.querySelector('.carousel-inner');

    var reader = new FileReader();
    reader.onload = function (e) {
        var img = document.createElement('img');
        img.src = e.target.result;
        img.className = 'd-block w-100';
        carouselInner.appendChild(img);
    };
    reader.readAsDataURL(file);
}
