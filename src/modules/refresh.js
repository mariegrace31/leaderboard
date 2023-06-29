import fetchValue from './fetchApi.js';

const refreshData = async () => {
  const refresh = document.querySelector('.refresh');
  const value = await fetchValue();
  const table = document.querySelector('.score-table');
  table.innerHTML = '';
  let placeholder = '';
  value.forEach((score) => {
    placeholder += `
    <tr>
    <td>${score.user}: ${score.score}</td>
    </tr>
    `;
  });
  table.innerHTML = placeholder;
  refresh.addEventListener('click', () => {
    refreshData();
  });
};

export default refreshData;
