
// const form = document.querySelector('#searchForm');
// const imgRow = document.querySelector('.row');
const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const searchTerm = form.elements.q.value;  
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
        createCard(res.data);
        // makeImage(res.data)
        form.elements.q.value = '';
      
      })

//       const makeImage = (shows) => {
//         for (let result of shows) {
//             if (result.show.image) {
//                 const img = document.createElement('IMG');
//                 img.classList.add('col-md','m-2')
//                 img.src = result.show.image.medium;
//                 imgRow.append(img)
                
//             }
//         }
//       }
const cardDeck = document.querySelector('#cardList');
 const createCard = (shows) => {
    for(let result of shows)
    {
      if(result.show.image.medium && result.show.summary){
  //  <div class="card" style="width: 18rem;">
     const cardDiv = document.createElement('div');
      cardDiv.style = "width: 18rem;"
      cardDiv.classList.add('row','card','m-2')
          // <img class="card-img-top" src="..." alt="Card image cap">
          const img = document.createElement('IMG');
          img.classList.add('card-img-top')
          img.src = result.show.image.medium;
          cardDiv.appendChild(img);
              // <div class="card-body"
             const cardBody = document.createElement('div');
             cardBody.classList.add('card-body');
                    //  <h5 class="card-title">Card title</h5>
                    const movieTitle = document.createElement('h5');
                    movieTitle.classList.add('card-title');
                    movieTitle.innerText =  (result.show.name).toUpperCase();
                    cardBody.appendChild(movieTitle);
                     
                          //  <p class="card-text"></p>
                           const movieSummary = document.createElement('p');
                           movieSummary.classList.add('card-text')
                           movieSummary.innerHTML = result.show.summary;
                           cardBody.appendChild(movieSummary);

                           //Too lONG
                           if(movieSummary.innerHTML.length > 200){
                            movieSummary.style.display  = 'none';
                            console.log(movieSummary.innerHTML.length);
                            }
                            
                                // <a href="#" class="btn btn-primary">Go somewhere</a>
                                const movieLink = document.createElement('a');
                                movieLink.setAttribute('href', result.show.url);
                                movieLink.classList.add('btn', 'btn-primary');
                                movieLink.innerText = 'Read More';
                                cardBody.appendChild(movieLink);
                                         cardDiv.appendChild(cardBody);
                                         cardDeck.appendChild(cardDiv);
                                        }
                                        }
                                        
}