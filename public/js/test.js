document.addEventListener('DOMContentLoaded', function() {
    
    const posts = document.querySelectorAll('.post');

    posts.forEach(post => {
        const bookName = post.getAttribute('data-book-name');
        const googleBooksApiUrl = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(bookName)}key=AIzaSyBxjW1JS0SF-1QqwcZlXJlHTm1qUVgB5UM`;

        fetch(googleBooksApiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.items && data.items.length > 0) {
                    const imageUrl = data.items[0].volumeInfo.imageLinks.thumbnail;
                    const bookCoverDiv = post.querySelector("div[style*='background-image']");
                    bookCoverDiv.style.backgroundImage = `url('${imageUrl}')`;
                } else {
                    console.log(`No books found for title: ${bookName}`);
                }
            })
            .catch(error => {
                console.log(`Error fetching book cover for title ${bookName}:`, error);
            });
    });
});
