import usersList from '../data/testUsersCredentials.json';

export class testUsersSelector {
  getRandomUsers() {
    const randomIndex = Math.floor(Math.random() * usersList.length);
    const email = usersList[randomIndex].email;
    const password = usersList[randomIndex].password;
    const description = usersList[randomIndex].description;
    return {
      email: email,
      password: password,
      description: description,
    };
  }

  getUserByDescription(emailDescription: string) {
    const userIndex = usersList.findIndex((x) => x.description === emailDescription);
    const email = usersList[userIndex].email;
    const password = usersList[userIndex].password;
    const description = usersList[userIndex].description;
    return {
      email: email,
      password: password,
      description: description,
    };
  }
}
