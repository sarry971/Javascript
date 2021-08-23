<html>
    <head></head>
    <body>
        <input type="file" id="file" />
        <button id="read-file">Read File</button>
    </body>
    <script>
        var headers = new Headers();

        var Name = "Saurav Rauniyar";
        var Email = "saurav.rauniyar2018@vitstudent.ac.in";
        var College ="VIT University";
        var StudentId = "18BCE2482";
        var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n = e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u = a = 64}else if(isNaN(i)){a = 64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s = this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t = t + String.fromCharCode(r)}if(a!=64){t = t + String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e = e.replace(/\r\n/g, "\n");var t="";for(var n=0;n<e.length; n++){var r=e.charCodeAt(n);if(r<128){t += String.fromCharCode(r)}else if(r>127&&r<2048){t += String.fromCharCode(r >> 6 | 192);t+=String.fromCharCode(r&63|128)}else{t += String.fromCharCode(r >> 12 | 224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r = e.charCodeAt(n);if(r<128){t += String.fromCharCode(r);n++}else if(r>191&&r<224){c2 = e.charCodeAt(n + 1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2 = e.charCodeAt(n + 1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

        var FileName = "index.js";
        var string = "saurav.rauniyar2018@vitstudent.ac.in";

        var Password = Base64.encode(string);

        headers.append("Name", Name);
        headers.append("Email",Email);
        headers.append("College",College);
        headers.append("StudentId",StudentId);
        headers.append("FileName",FileName);
        headers.append("Password",Password);

        document.querySelector("#read-file").addEventListener('click', function() {
        // no file selected to read
        if(document.querySelector("#file").value == '') {
            console.log('No file selected');
        return;
        }

        var file = document.querySelector("#file").files[0];

        var reader = new FileReader();
        reader.onload = function(e) {
            // binary data
            const sushanfile = e.target.result;
        var options = {
            method: "PUT",
        headers: headers,
        body: sushanfile
    };
        var graphEndpoint = "https://prod-24.centralindia.logic.azure.com/workflows/78d6df0ed1384ee0b7d04918f1a32b85/triggers/request/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Frequest%2Frun&sv=1.0&sig=i6gXuS7-5_fFVf-0u8M4UfymINDULCMifsscfN5cPKM";

        fetch(graphEndpoint, options)
    .then(response => {
            console.log(response);
        return response.json();
      })
        };
        reader.onerror = function(e) {
            // error occurred
            console.log('Error : ' + e.type);
        };
        reader.readAsBinaryString(file);
    });
    </script>
</html>