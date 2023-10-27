let heroi = { nome: "Junior", xp: 2222 };

console.log(
  `O Herói de nome ${heroi.nome} está no nível de ${(() => {
    let xp = heroi.xp;
    if (xp > 10000) return "Radiante";
    if (xp > 9000) return "Imortal";
    if (xp > 8000) return "Ascendente";
    if (xp > 7000) return "Platina";
    if (xp > 6000) return "Ouro";
    if (xp > 2000) return "Prata";
    if (xp > 1000) return "Bronze";
    return "Ferro";
  })(heroi)}`
);
