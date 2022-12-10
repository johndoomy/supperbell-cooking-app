import AWS from 'aws-sdk'




const docClient = new AWS.DynamoDB.DocumentClient()
// console.log(docClient)



export const fetchData = async (tableName) => {
    console.log("fetching")
    console.log(AWS.config)
    const params = {
        TableName: tableName
    }

    return new Promise((resolve, reject) => {
        docClient.scan(params, function (err, data) {
            if (err) {
              // Reject the promise if an error occurs
              reject(err);
            } else {
              // Resolve the promise with the data
              resolve(data);
            }
        })
    })
}

export const putData = async (tableName, data) => {
  console.log("putting data")
  console.log(AWS.config)
  console.log(data)
    const params = {
      TableName: tableName,
      Item: {
        recipes: JSON.stringify(data)
      }
    }
  
    // Return a promise that resolves with the data put in the DynamoDB table
    return new Promise((resolve, reject) => {
      docClient.put(params, function (err, data) {
        if (err) {
          // Reject the promise if an error occurs
          reject(err)
        } else {
          // Resolve the promise with the data
          resolve(data)
        }
      })
    })
  }