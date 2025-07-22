async function searchMovie() {
  const query = document.getElementById("searchInput").value.trim();
  const resultDiv = document.getElementById("movieResult");

  if (!query) {
    resultDiv.innerHTML = "<p>Please enter a movie name.</p>";
    return;
  }

  const API_KEY = "thewdb";
  const url = `https://www.omdbapi.com/?t=${query}&apikey=${API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.Response === "False") {
      resultDiv.innerHTML = `<p>❌ Movie not found!</p>`;
    } else {
      resultDiv.innerHTML = `
        <img src="${data.Poster}" alt="Poster">
        <h2>${data.Title} (${data.Year})</h2>
        <p><strong>Genre:</strong> ${data.Genre}</p>
        <p><strong>Plot:</strong> ${data.Plot}</p>
        <p><strong>IMDB Rating:</strong> ⭐ ${data.imdbRating}</p>
      `;
    }
  } catch (err) {
    resultDiv.innerHTML = `<p>Something went wrong. Try again later.</p>`;
    console.error(err);
  }
}
