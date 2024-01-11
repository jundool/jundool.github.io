/*
                    Author: [LEE JUNSUNG]
                    File name: [byte_converter.js]
                    License: [This work is licensed under CC BY-NC 4.0.]
                    Name: Byte_Converter
                    Description: Simple byte conversion calculator

                    Overview: [Purpose or description of the program]

                    A utility for my own use.
*/
        function numberWithCommas(x) {
            if (x >= 1) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
                return x.toString();
            }
        }

        function convertBytes() {
            const value = parseFloat(document.getElementById('inputValue').value);
            const fromUnit = document.getElementById('fromUnit').value;
            const toUnit = document.getElementById('toUnit').value;

            const byteConversion = {
                'bit': 1 / 8,
                'byte': 1,
                'KB': 1024,
                'MB': Math.pow(1024, 2),
                'GB': Math.pow(1024, 3),
                'TB': Math.pow(1024, 4),
                'PB': Math.pow(1024, 5),
                'EB': Math.pow(1024, 6),
            };

            const bytes = value * byteConversion[fromUnit];
            let result = bytes / byteConversion[toUnit];

            // 소수점 제어
            if (result >= 1) {
                result = Math.round(result);
            } else {
                // 0 이하일 때 21자리까지 표시
                result = result.toFixed(21);
            }

            const formattedValue = numberWithCommas(value);
            const formattedResult = numberWithCommas(result);

            document.getElementById('result').innerText = `${formattedValue} ${fromUnit} is equal to ${formattedResult} ${toUnit}`;
        }
   