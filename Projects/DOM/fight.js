//<div class="player">
  //          <div class="player_name">Player</div>
    //        <div class="player_life"></div>
      //  </div>

      class Player {
          name = '';
          enemy = '';
          life = 100
          constructor(name,enemy){
            this.enemy = enemy;
            this.name = name;
            this.drawPlayer();

            
          }

          drawPlayer(){
            const html = `
            <div class="player" id = "${this.name}">
                <div class="player_name">${this.name}</div>
                <div class="player_life">${this.life}</div>
            </div>
            `
            document.querySelector('#app').innerHTML += html;
          }

          recievDemage(demage){

            if(!this.life) return;

              this.life -= demage;
              if(this.life < 0){
                  this.life = 0;
                  this.changeLife();
                  return
              }
              this.changeLife();
          }

          changeLife(){
              const player = document.querySelector(`#${this.name}`)
              const life = document.querySelector(`.player_life`);
              life.innerText = this.life + '%';
              life.style.width = this.life + '%';
              life.style.background =this.lifeColor;

          }

          giveDemage(anamy){
              const demage = Math.round(Math.random() * 20)
              anamy.recievDemage(demage)
          }

          get lifeColor(){
              if(this.life > 75) return 'green'
              else if(this.life > 25) return 'orange'
              else if(this.life > 15) return 'red'
          }
      }

      const playerIvan = new Player('Ivan', 'petro');
      const playerPetro = new Player('Petro', 'ivan');