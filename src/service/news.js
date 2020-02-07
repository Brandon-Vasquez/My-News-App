import { articles_url, _api_key, category, country_code} from '../config/rest_config'

export async function getArticles() {
  try {
    // let articles = await fetch(`${articles_url}?country=${country_code}&
    // category=${category}`, {
    //   headers: {
    //     'X-API-KEY': _api_key
    //   }
    // })

    let articles = await fetch(`${articles_url}?api-key=${_api_key}`)
    
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