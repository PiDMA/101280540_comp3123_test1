const resolvedPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        try{
            resolve({ message: "message: delayed success!" });
        } catch(e) {
            reject(e);
        }
    }, 500);
  });
}

const rejectedPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        try{
            throw new Error('error: delayed exception!');
        } catch(e) {
            console.error(e);
        }
    }, 500);
  });
}


console.log(resolvedPromise());
console.log(rejectedPromise());
