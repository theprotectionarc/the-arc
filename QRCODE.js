function resetQRCode() {
    document.getElementById("qrcode").innerHTML = "";
    document.getElementById("text-input").value = "";
    document.getElementById("number-input").value = "";
    document.getElementById("email-input").value = "";
    document.getElementById("address-input").value = "";
    qrcode = null;
  }