const enemy = [
    { 
        name:"Lancelot",
        health:100,
        attack:10,
        defense:8,
        counterAttack:4,
        img:"assets/images/lancelot.jpg"
    },
    {
        name:"Gawain",
        health:100,
        attack:8,
        defense:5,
        counterAttack:8,
        img:"assets/images/gawain.jpg"
    },
    {
        name:"Arthur",
        health:150,
        attack:12,
        defense:6,
        counterAttack:10,
        img:"assets/images/arthur.png"
    },
    {
        name:"Galahad",
        health:80,
        attack:5,
        defense:10,
        counterAttack:3,
        img:"assets/images/galahad.jpg"
    }


]

let player = {
    name:"",
    health:100,
    attack:0,
    defense:0,
    counterAttack:0,
    img:""
}

function reset (){
    player.name = "";
    player.health = 100;
    player.attack = 0;
    player.defense = 0;
    player.counterAttack = 0;
}

let enemyNum = Math.floor(Math.random() * 3);
let potion = 1;

document.getElementById("createMc").addEventListener("click", function(){
    player.name = prompt("What is your name?");
    player.attack =Math.floor(Math.random() * 15) + 1;
    player.defense = Math.floor(Math.random() * 10) + 1;
    player.counterAttack = Math.floor(Math.random() * 10) + 1;
    document.getElementById("mcName").innerHTML = player.name;
    document.getElementById("mcHealth").innerHTML = "HP: " + player.health;
    document.getElementById("mcAttack").innerHTML = "Attack: " +player.attack;
    document.getElementById("mcDefense").innerHTML = "Defense: " + player.defense;
    document.getElementById("mcCounterAttack").innerHTML = "CounterAttack: "+player.counterAttack;
    
    

    document.getElementById("enemyName").innerHTML = enemy[enemyNum].name;
    document.getElementById("enemyHealth").innerHTML = "HP: "+enemy[enemyNum].health;
    document.getElementById("enemyAttack").innerHTML = "Attack: "+enemy[enemyNum].attack;
    document.getElementById("enemyDefense").innerHTML = "Defense: "+enemy[enemyNum].defense;
    document.getElementById("enemyCounterAttack").innerHTML = "CounterAttack: "+enemy[enemyNum].counterAttack;
    document.getElementById("enemyImg").src = enemy[enemyNum].img;
});

let round = 0;
const attack = document.getElementById("attack");
    attack.addEventListener("click", function(){
        round = 0;
        while(player.health > 0 && enemy[enemyNum].health > 0){
        if  (round === 0){ 
            if(Math.floor(Math.random()*7) > 2){
                
                enemy[enemyNum].health -= player.attack;
                document.getElementById("enemyHealth").innerHTML = enemy[enemyNum].health;
                let attacker = true;
                let randomPotion = Math.floor(Math.random()*8);
                    if(randomPotion > 5){ 
                        potion++;
                        alert("You have gained a potion!");
                        document.getElementById("potion").innerHTML = `Use a Potion(${potion})`;	
                    }
                    alert("You attacked the enemy!");

                    if(attacker === true && Math.floor(Math.random()*7) > 4 ){
                        
                        player.health -= enemy[enemyNum].counterAttack;
                        document.getElementById("mcHealth").innerHTML = player.health;
                        alert("The enemy counterAttack you!");
                    }else{
                        alert("You Block the enemy's attack!");
                    }
                
            }else{
                alert("You missed!");
            }

            if(Math.floor(Math.random()*7) > 2){
                
                player.health -= enemy[enemyNum].attack;
                document.getElementById("mcHealth").innerHTML = player.health;
                let attackerEnemy = true;
                alert("The enemy attacked you!");
                    if(attackerEnemy === true && Math.floor(Math.random()*7) > 4 ){
                        
                        enemy[enemyNum].health -= player.counterAttack;
                        document.getElementById("enemyHealth").innerHTML = enemy[enemyNum].health;
                        alert("You counterAttack the enemy!");
                    }else{
                        alert("Enemy Block your attack!");
                    }
            }else{
                alert("The enemy missed!");
            }
            round ++;
        }
       break 
    } 
    if(player.health <= 0){
        alert(`${player.name}, You lose!`);
    }else if(enemy[enemyNum].health <= 0){
        alert(`${player.name}, You win!`);
    }
});



const retreat = document.getElementById("retreat");
    retreat.addEventListener("click", function(){
        confirm(`${player.name}, You retreat!`);
        windows.location.reload();
    });

const potionUse = document.getElementById("potion");
    potionUse.addEventListener("click", function(){
        if(potion > 0){
            player.health += 25;
            document.getElementById("mcHealth").innerHTML = player.health;
            potion--;
            document.getElementById("potion").innerHTML = `Use a Potion(${potion})`;
                if(Math.floor(Math.random()*7) > 2){
                
                    player.health -= enemy[enemyNum].attack;
                    document.getElementById("mcHealth").innerHTML = player.health;
                    let attackerEnemy = true;
                    alert("The enemy attacked you!");
                        if(attackerEnemy === true && Math.floor(Math.random()*7) > 4 ){
                        
                            enemy[enemyNum].health -= player.counterAttack;
                            document.getElementById("enemyHealth").innerHTML = enemy[enemyNum].health;
                            alert("You counterAttack the enemy!");
                        }else{
                            alert("Enemy Block your attack!");
                        }
            }else{
                alert("The enemy missed!");
            }
        }else{
            alert("You don't have any potions!");
        }
    });





