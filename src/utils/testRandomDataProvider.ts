export class testRandomDataProvider {
  generateRandomName() {
    return Math.random().toString(36).substring(2, 7);
  }

  generateRandomNumber() {
    return (Math.floor(Math.random() * 9000000) + 1000000).toString();
  }

  generateRandomNumberIMEI() {
    const min = 100000000000000; // 10^14
    const max = 999999999999999; // 10^15 - 1
  
    return Math.floor(Math.random() * (max - min + 1) + min).toString();
  }

  generateRandomNumberThreeDigits() {
    return (Math.floor(Math.random() * 900) + 100).toString();
  }

  generateRandomAlphaNumeric() {
    return Math.random().toString(36).substring(2, 9).slice(0, 7);
  }

  generateRandomIP() {
    // Generate a random IP address in the format "xxx.xxx.xxx.xxx"
    return Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join('.');
  }
}