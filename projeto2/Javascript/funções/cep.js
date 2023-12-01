var CEP = {
    debounceTimer: null,
    zipCodeInput: null,

    formatZipCode: function (value) {
        var numericValue = value.replace(/\D/g, '');

        if (numericValue.length > 5) {
            return numericValue.slice(0, 5) + '-' + numericValue.slice(5);
        } else {
            return numericValue;
        }
    },

    getAddress: function () {
        var addressDetails = document.getElementById('address-details');
        var zipCode = this.formatZipCode(this.zipCodeInput.value.trim());
        var zipCodePattern = /^\d{5}-\d{3}$/;

        if (!zipCodePattern.test(zipCode)) {
            alert('Por favor, insira um CEP válido.');
            return;
        }

        addressDetails.innerHTML = '';
        var apiUrl = 'https://viacep.com.br/ws/' + zipCode + '/json/';

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    addressDetails.innerHTML = `<p class="inline-paragraphs">${data.bairro},</p>
                                               <p class="inline-paragraphs">${data.localidade},</p>
                                               <p class="inline-paragraphs">${data.uf}</p>`;
                } else {
                    alert('CEP não encontrado.');
                }
            })
            .catch(error => {
                console.error('Erro na requisição à API:', error);
                alert('Erro ao buscar o endereço. Tente novamente mais tarde.');
            });
    },

    init: function () {
        this.zipCodeInput = document.getElementById('zip-code-input');
        var self = this;
        this.zipCodeInput.addEventListener('input', function () {
            clearTimeout(self.debounceTimer);
            self.debounceTimer = setTimeout(self.getAddress.bind(self), 500);
        });
    }
};

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function () {
    CEP.init(); // Inicialização após o carregamento completo do DOM
});
