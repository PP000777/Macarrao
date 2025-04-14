function ligarFogao() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Fogão ligado");
        resolve();
      }, 1000);
    });
  }
  
  function ferverAgua() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Água fervida");
        resolve();
      }, 2000);
    });
  }
  
  function cozinharMacarrao() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Macarrão cozido");
        resolve();
      }, 3000);
    });
  }
  
  function escorrerMacarrao() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Macarrão escorrido");
        resolve();
      }, 1000);
    });
  }
  
  function servirMacarrao() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Macarrão servido!");
        resolve();
      }, 1000);
    });
  }

async function prepararMacarrao(){
    const resposta1 = await ligarFogao()
    console.log(resposta1)
    const resposta2 = await ferverAgua()
    console.log(resposta2)
    const resposta3 = await cozinharMacarrao()
    console.log(resposta3)
    const resposta4 = await escorrerMacarrao()
    console.log(resposta4)
    const resposta5 = await servirMacarrao()
    console.log(resposta5)
}

prepararMacarrao()