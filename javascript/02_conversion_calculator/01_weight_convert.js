/*
          Author: [LEE JUNSUNG]
          File name: [weight_convert.js]
          License: [This work is licensed under CC BY-NC 4.0]
          Name: Weight Converter
          Description: Simple weight conversion calculator

          Overview: [Purpose or description of the program]

          I am very interested in gold and silver, so I made it out of necessity for troy ounces (31.1035g), don(錢) (3.75g), and nyang(兩) (37.5g).
*/
  
  function convertWeight() {
    const input = parseFloat(document.getElementById('inputWeight').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let result = '';
  
    switch (inputUnit) {
      case 'g':
        result = convertFromGrams(input, outputUnit);
        break;
      case 'kg':
        result = convertFromKilograms(input, outputUnit);
        break;
      case 'ton':
        result = convertFromTons(input, outputUnit);
        break;
      case 'lbs':
        result = convertFromPounds(input, outputUnit);
        break;
      case 'troyoz':
        result = convertFromTroyOunces(input, outputUnit);
        break;
      case 'don':
        result = convertFromDon(input, outputUnit);
        break;
      case 'nyang':
            result = convertFromNyang(input, outputUnit);
            break; 
      default:
        result = 'Invalid conversion. Please select different units.';
        break;
    }
  
    document.getElementById('result').innerText = result;
  }
  
  function convertFromGrams(grams, outputUnit) {
    let result = '';
    switch (outputUnit) {
      case 'g':
        result = `${grams} Gram(g)`;
        break;
      case 'kg':
        const kilograms = grams / 1000;
        result = `${kilograms} Kilogram(kg)`;
        break;
      case 'ton':
        const tons = grams / 1000000;
        result = `${tons} Ton(1,000,000g)`;
        break;
      case 'lbs':
        const pounds = grams * 0.00220462;
        result = `${pounds} Pound(lbs)`;
        break;
      case 'troyoz':
        const troyOunces = grams / 31.1035;
        result = `${troyOunces} Troy Ounces(31.1035g)`;
        break;
      case 'don':
        const dons = grams / 3.75;
        result = `${dons} Don(錢)(3.75g)`;
        break;
        case 'nyang':
            const nyangs = grams / 37.5;
            result = `${nyangs} Nyang(兩)(37.5g)`;
            break;  
      default:
        result = 'Invalid conversion. Please select different units.';
        break;
    }
    return result;
  }
  
  function convertFromKilograms(kilograms, outputUnit) {
    const grams = kilograms * 1000;
    return convertFromGrams(grams, outputUnit);
  }
  
  function convertFromTons(tons, outputUnit) {
    const grams = tons * 1000000;
    return convertFromGrams(grams, outputUnit);
  }
  
  function convertFromPounds(pounds, outputUnit) {
    const kilograms = pounds / 2.20462;
    return convertFromKilograms(kilograms, outputUnit);
  }
  
  function convertFromTroyOunces(troyOunces, outputUnit) {
    const grams = troyOunces * 31.1035;
    return convertFromGrams(grams, outputUnit);
  }
  
  function convertFromDon(don, outputUnit) {
    const grams = don * 3.75;
    return convertFromGrams(grams, outputUnit);
  }

  function convertFromNyang(nyang, outputUnit) {
        const grams = nyang * 37.5;
        return convertFromGrams(grams, outputUnit);
      }
