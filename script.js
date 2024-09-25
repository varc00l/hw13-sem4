const delay = ms => {
    return new Promise(resolve => setTimeout(() => resolve(ms), ms));
  };
  
  const logger = time => console.log(`Resolved after ${time}ms`);
  
  delay(2000).then(logger);
  delay(1000).then(logger);
  delay(1500).then(logger);

  const toggleUserState = (allUsers, userName) => {
    return new Promise(resolve => {
      const updatedUsers = allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user
      );
      resolve(updatedUsers);
    });
  };
  
  const loger = updatedUsers => console.table(updatedUsers);
  
  toggleUserState(users, 'Mango').then(loger);
  toggleUserState(users, 'Lux').then(loger);
  
  const makeTransaction = transaction => {
    const delay = randomIntegerFromInterval(200, 500);
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const canProcess = Math.random() > 0.3;
  
        if (canProcess) {
          resolve({ id: transaction.id, time: delay });
        } else {
          reject(transaction.id);
        }
      }, delay);
    });
  };
  
  const logSuccess = ({ id, time }) => {
    console.log(`Transaction ${id} processed in ${time}ms`);
  };
  
  const logError = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
  };
  
  makeTransaction({ id: 70, amount: 150 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 71, amount: 230 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 72, amount: 75 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 73, amount: 100 })
    .then(logSuccess)
    .catch(logError);
  