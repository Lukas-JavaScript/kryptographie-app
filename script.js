function ceasar() {
    out.innerText = '';

    let unencryptedText = text.value;

    for (let i = 0; i < unencryptedText.length; i++) {
        let numberOfCharacter = unencryptedText.charCodeAt(i) - 65;
        let code = (numberOfCharacter + +key.value) % 26;
        out.innerText += String.fromCharCode(code + 65);
    }
}

function decrypt() {
    out.innerText = '';

    let unencryptedText = text.value;

    for (let i = 0; i < unencryptedText.length; i++) {
        let numberOfCharacter = unencryptedText.charCodeAt(i) - 65;
        let code = (numberOfCharacter - +key.value + 26) % 26;
        out.innerText += String.fromCharCode(code + 65);
    }
}

// RSA Verschlüsselung mit vereinfachtem System
function rsaEncrypt() {
    out.innerText = '';

    let unencryptedText = text.value;
    let e = +document.getElementById('e').value;
    let n = +document.getElementById('n').value;

    for (let i = 0; i < unencryptedText.length; i++) {
        let charCode = unencryptedText.charCodeAt(i);
        let encryptedCode = modPow(charCode, e, n); // c = m^e mod n
        out.innerText += encryptedCode + ' ';
    }
}

// RSA Entschlüsselung mit vereinfachtem System
function rsaDecrypt() {
    out.innerText = '';

    let encryptedText = text.value.split(' ');
    let e = +document.getElementById('e').value;
    let n = +document.getElementById('n').value;

    // Wir nehmen einen privaten Exponenten (d) an (dieser ist normalerweise geheim)
    let d = 7; // d ist der private Schlüssel in diesem einfachen Beispiel

    for (let i = 0; i < encryptedText.length; i++) {
        let encryptedCode = +encryptedText[i];
        let decryptedCode = modPow(encryptedCode, d, n); // m = c^d mod n
        out.innerText += String.fromCharCode(decryptedCode);
    }
}

// Modulare Exponentiation: (base^exp) % mod
function modPow(base, exp, mod) {
    let result = 1;
    base = base % mod;

    while (exp > 0) {
        if (exp % 2 === 1) {
            result = (result * base) % mod;
        }
        exp = Math.floor(exp / 2);
        base = (base * base) % mod;
    }

    return result;
}
