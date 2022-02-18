const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient()

exports.handler = async (event) => {
    const data = JSON.parse(event['body'])
    console.log(data.id)
    try {
        await dynamo.delete({
            TableName: 'pacients',
            Key: {
                id: data.id
            }
        }).promise()
        
        return {
            message: 'Deleted successfully ' + data.id
        }
    } catch (e) {
        return {
            error: e
        }
    }
    
};
