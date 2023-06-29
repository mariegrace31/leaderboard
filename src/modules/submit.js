const submitData = () => {
  const form = document.getElementById('form');
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const myUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VNELYY9ZbSaPf4QTwrYB/scores/';
    fetch(myUrl, {
      method: 'POST',
      body: JSON.stringify({
        user: name.value,
        score: score.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    score.value = '';
    name.value = '';
  });
};

export default submitData;