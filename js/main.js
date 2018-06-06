

const search = document.querySelector(".search")
const searchTerm = document.querySelector(".searchTerm")
const output = document.querySelector(".output")

function newsSearch(){
const api_url = (`https://newsapi.org/v2/everything?q=${searchTerm.value}&apiKey=0573d17377384d7ba3d993e2f5b9f927`)
    $.ajax({
        type:'GET',
        url: api_url,
        dataType:'json',
        success: (data)=>{
            console.log(data)
            output.innerHTML = ""
            for(let i=0; i<data.articles.length; i++){
            output.innerHTML += `
                <li>
                <p>${data.articles[i].title}</p>
                <img src="${data.articles[i].urlToImage}" alt = "Img">
                <a href = "${data.articles[i].url}">${data.articles[i].url}</a>
                <p>${data.articles[i].source.name}</p>
                <p>${data.articles[i].description}</p>
                </li>
            `
            }
        },
        error: (error)=>{
            console.log("There was an error")
        
        }
    })
}
search.addEventListener('click', newsSearch)

   