const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient()

exports.handler = async (event) => {
    
    try {
        const results = await dynamo.scan({ TableName: 'pacients'}).promise()
        
        const response = {
            statusCode: 200,
            body: JSON.stringify(results)
        }
        
        return response;
    } catch (e) {
        return {
            error: e
        }
    }
    
};
