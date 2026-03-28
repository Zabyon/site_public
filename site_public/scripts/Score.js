(()=>{var n=[{rank:1,name:"Rumi",score:9875,color:"#ffd700"},{rank:2,name:"Tic Tac",score:8932,color:"#c0c0c0"},{rank:3,name:"Panda Roux",score:7689,color:"#cd7f32"},{rank:4,name:"nom long qui sort Lyra Whisperwind",score:6543,color:"#4169e1"},{rank:5,name:"Renard Gris",score:5901,color:"#50c878"}],r=document.getElementById("leaderboard");r.innerHTML=n.map(a=>`
  <li style="color: ${a.color}">
    <span class="rank-box">${a.rank}</span>
    <span class="player-name">${a.name}</span>
    <span class="player-score">${a.score}</span>
  </li>
`).join("");})();
//# sourceMappingURL=Score.js.map
