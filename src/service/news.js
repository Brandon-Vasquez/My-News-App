import { articles_url, _api_key } from '../config/rest_config'

export async function getArticles(section='world') {
  try {
    // let articles = await fetch(`${articles_url}?country=${country_code}&
    // category=${category}`, {
    //   headers: {
    //     'X-API-KEY': _api_key
    //   }
    // })

    let articles = await fetch(`${articles_url}${section}.json?api-key=${_api_key}`)
    
    // console.log(articles)
    let result = await articles.json()
    articles = null
    console.log(result.results[0])

    return result.results
  }
  catch(error) {
    throw error
  }
}