const searchingBooks = (insertTitleHere) =>{
    return new Promise ((success, failed)=>{
        setTimeout(()=>{
            const booksList = [
            {title: 'The Lion, the Witch and the Wardrobe', year: 1950, author:'C. S. Lewis', genre: ['Fantasy', 'Childrens fiction']},
            {title: 'Lolita', year: 1955, author:'Vladimir Nabokov', genre:['Novel', 'Drama']},
            {title:'Charlottes Web', year: 1952, author:'E. B. White', genre:['Childrens Fiction', 'Drama', 'Fantasy']},
            {title: 'The Tale of Peter Rabbit', year: 1902, author: 'Beatrix Potter', genre:['Childrens Literature', 'Adventure']},
            {title: 'The Exorcist', year: 1971, author: 'William Peter Blatty', genre: ['Horror', 'Thriller', 'Exorcism']},
            {title: 'The Name of the Rose', year: 1980, author: 'Umberto Eco', genre: ['Historical novel', 'mystery']},
            {title: 'Anne of Green Gables', year: 1908, author: 'Lucy Maud Montgomery', genre: ['Childrens Novel', 'Drama', 'Family']},
            {title: 'The Great Gatsby', year: 1925, author: 'F. Scott Fitzgerald', genre: ['Novel', 'Tragedy']},
            {title: 'Love Story', year: 1970, author: 'Erich Segal', genre: ['Romance', 'Drama']},
        ]
                let titles = booksList.filter((items)=>{
                    return items.title.toLowerCase().includes(insertTitleHere.toLowerCase())
                    })
                    if (titles.length !=0){
                        success(titles)
                    }
                    else{
                        failed(`${insertTitleHere} cannot be found`)
                    }
        },2000)
    })
}

const searchingBooksAsync = async (insertTitleHere)=>{
    try{
        const runSearchingBooks = await searchingBooks(insertTitleHere);
        console.log(runSearchingBooks)
    }
    catch(error){
        console.log(error)
    }
}

searchingBooksAsync('an')