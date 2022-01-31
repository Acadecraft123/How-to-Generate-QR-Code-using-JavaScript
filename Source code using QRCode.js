html
<!DOCTYPE html>
<html>
<head>
  <title>Let's Learn QR Codes!</title>
</head>
<body>
  <p>Enter the data in the text box</p>
  <input type="text" id="data" onchange="fun()"><br>
  <br>
  <div id="qr-code"></div>
</body>

<script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>

<script>
  const dataInput= document.getElementById("data");
  const newQRCode = new QRCode(document.getElementById("qr-code"));
  function fun() {
    const val = dataInput.value;
    newQRCode.makeCode(val);
  };
</script>

</html>
