const axios = require('axios')

exports.handler = async function () {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Accept',
  }

  try {
    const result = await axios.get('https://pastebin.com/raw/23irTnsr')

    if (result.status === 200) {
      return {
        headers,
        statusCode: 200,
        body: JSON.stringify(result.data),
      }
    }

    throw new Error('fail to reach api')
  } catch (error) {
    return {
      headers,
      statusCode: 500,
      body: JSON.stringify(error.message),
    }
  }
}
