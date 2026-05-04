const INGREDIENTS_DB = {
    'BUŁKA': 'var(--ing-bulka)',
    'KOTLET': 'var(--ing-kotlet)',
    'SER': 'var(--ing-ser)',
    'POMIDOR': 'var(--ing-pomidor)',
    'OGÓREK': 'var(--ing-ogorek)',
    'SAŁATA': 'var(--ing-salata)',
    'CEBULA': 'var(--ing-cebula)',
    'BEKON': 'var(--ing-bekon)',
    'SOS': 'var(--ing-sos)',
    'JAJKO': 'var(--ing-jajko)',
    'AWOKADO': 'var(--ing-awokado)',
    'JALAPENO': 'var(--ing-jalapeno)',
    'PIECZARKI': 'var(--ing-pieczarki)'
};

const FILLINGS = Object.keys(INGREDIENTS_DB).filter(i => i !== 'BUŁKA');

let score = 0; // Number of burgers
let totalPoints = 0;
let isGameActive = false;
let isBurning = false;

let currentOrder = [];
let currentIngredientIndex = 0; 
let typedText = "";

// Combo system
let combo = 0;
let maxCombo = 0;
let lastIngredientTime = 0;
const COMBO_WINDOW = 3000;

const elStartScreen = document.getElementById('start-screen');
const elGameOverScreen = document.getElementById('game-over-screen');
const elGameArea = document.getElementById('game-area');
const elStatsPanel = document.getElementById('stats-panel');

const elScore = document.getElementById('score');
const elComboCount = document.getElementById('combo-count');
const elComboHud = document.getElementById('combo-hud');

const elOrderList = document.getElementById('order-list');
const elPlate = document.getElementById('plate-container');
const elTypingWord = document.getElementById('typing-word');
const elCompletedList = document.getElementById('completed-list');

function startGame() {
    score = 0;
    totalPoints = 0;
    combo = 0;
    maxCombo = 0;
    isGameActive = true;
    isBurning = false;
    lastIngredientTime = Date.now();
    
    elScore.innerText = totalPoints;
    elComboCount.innerText = combo;
    elComboHud.innerText = '';
    elComboHud.classList.remove('visible');
    elCompletedList.innerHTML = '';
    
    elStartScreen.style.display = 'none';
    elGameOverScreen.style.display = 'none';
    elGameArea.style.display = 'flex';
    elStatsPanel.style.display = 'flex';

    generateNewOrder();
}

function endGame() {
    isGameActive = false;
    document.getElementById('final-score').innerText = totalPoints;
    document.getElementById('final-combo').innerText = maxCombo;
    
    elGameArea.style.display = 'none';
    elStatsPanel.style.display = 'none';
    elGameOverScreen.style.display = 'flex';
}

function generateNewOrder() {
    const numFillings = Math.floor(Math.random() * 3) + 2; 
    currentOrder = ['BUŁKA']; 
    
    for (let i = 0; i < numFillings; i++) {
        currentOrder.push(FILLINGS[Math.floor(Math.random() * FILLINGS.length)]);
    }
    currentOrder.push('BUŁKA');

    currentIngredientIndex = 0;
    typedText = "";
    
    elPlate.innerHTML = '';
    renderOrderBoard();
    renderTypingArea();
}

function renderOrderBoard() {
    elOrderList.innerHTML = '';
    currentOrder.forEach((ingredient, index) => {
        const div = document.createElement('div');
        div.className = 'order-item';
        if (index === currentIngredientIndex) div.classList.add('active');
        if (index < currentIngredientIndex) div.classList.add('done');
        div.innerText = ingredient;
        elOrderList.appendChild(div);
    });
}

function renderTypingArea() {
    if (isBurning) return;

    const targetWord = currentOrder[currentIngredientIndex];
    const remainingText = targetWord.substring(typedText.length);
    
    elTypingWord.innerHTML = `
        <span class="typed-correct">${typedText}</span><span class="typed-remaining">${remainingText}</span>
    `;
}

function updateCombo() {
    const now = Date.now();
    const dt = now - lastIngredientTime;
    lastIngredientTime = now;

    if (dt < COMBO_WINDOW) {
        combo++;
    } else {
        combo = 1;
    }
    if (combo > maxCombo) maxCombo = combo;

    elComboCount.innerText = combo;

    const pts = 10 + (combo > 1 ? combo * 5 : 0);
    totalPoints += pts;
    elScore.innerText = totalPoints;

    if (combo >= 3) {
        showComboPopup(combo);
    }

    if (dt < 1500) {
        showSpeedBonus('+' + pts);
    }

    elComboHud.textContent = combo > 1 ? `${combo}x COMBO!` : '';
    elComboHud.classList.toggle('visible', combo > 1);
}

function showComboPopup(c) {
    const el = document.createElement('div');
    el.className = 'combo-popup';
    el.textContent = `${c}x COMBO!`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 800);
}

function showSpeedBonus(text) {
    const plate = document.getElementById('plate-container');
    const el = document.createElement('div');
    el.className = 'speed-popup';
    el.textContent = text;
    el.style.right = '-60px';
    el.style.bottom = (plate.children.length * 20 + 10) + 'px';
    plate.appendChild(el);
    setTimeout(() => el.remove(), 1000);
}

document.addEventListener('keydown', (e) => {
    if (!isGameActive || isBurning) return;
    if (e.key.length > 1) return;

    const targetWord = currentOrder[currentIngredientIndex];
    const expectedChar = targetWord[typedText.length].toLowerCase();
    const typedChar = e.key.toLowerCase();

    if (typedChar === expectedChar) {
        typedText += targetWord[typedText.length];
        
        if (typedText === targetWord) {
            addIngredientToPlate(targetWord, currentIngredientIndex);
            updateCombo();
            currentIngredientIndex++;
            typedText = "";

            if (currentIngredientIndex >= currentOrder.length) {
                score++;
                saveCompletedBurger(currentOrder);
                setTimeout(generateNewOrder, 400);
            } else {
                renderOrderBoard();
            }
        }
        renderTypingArea();
    } else {
        combo = 0;
        elComboCount.innerText = '0';
        elComboHud.classList.remove('visible');
        triggerBurnEffect(targetWord);
    }
});

function triggerBurnEffect(targetWord) {
    isBurning = true;
    elTypingWord.innerHTML = `<span class="typed-burnt">${targetWord}</span>`;
    
    const burntBlock = document.createElement('div');
    burntBlock.className = 'ingredient-block burnt';
    burntBlock.innerText = "SPALONE!";
    
    if (currentIngredientIndex === 0) burntBlock.classList.add('bottom-bun');
    if (currentIngredientIndex === currentOrder.length - 1) burntBlock.classList.add('top-bun');
    
    elPlate.appendChild(burntBlock);
    
    document.body.style.transform = 'translateX(-3px)';
    setTimeout(() => document.body.style.transform = 'translateX(3px)', 50);
    setTimeout(() => document.body.style.transform = '', 100);

    setTimeout(() => {
        isBurning = false;
        typedText = "";
        elPlate.removeChild(burntBlock);
        renderTypingArea();
    }, 500);
}

function addIngredientToPlate(ingredientName, index) {
    const block = document.createElement('div');
    block.className = 'ingredient-block';
    block.innerText = ingredientName;
    
    block.setAttribute('data-ingredient', ingredientName);

    if (ingredientName === 'BUŁKA') {
        if (index === 0) {
            block.classList.add('bottom-bun');
        } else if (index === currentOrder.length - 1) {
            block.classList.add('top-bun');
        }
    }

    elPlate.appendChild(block);
}

function saveCompletedBurger(orderArray) {
    const wrapper = document.createElement('div');
    wrapper.className = 'mini-burger-wrapper';
    
    const miniBurger = document.createElement('div');
    miniBurger.className = 'mini-burger';
    
    orderArray.forEach((ingredientName, index) => {
        const block = document.createElement('div');
        block.className = 'ingredient-block';
        // Pusty tekst, bo litery będą nieczytelne przy tak dużej skali w dół
        block.innerText = ''; 
        block.setAttribute('data-ingredient', ingredientName);
        
        if (ingredientName === 'BUŁKA') {
            if (index === 0) {
                block.classList.add('bottom-bun');
            } else if (index === orderArray.length - 1) {
                block.classList.add('top-bun');
            }
        }
        
        miniBurger.appendChild(block);
    });
    
    wrapper.appendChild(miniBurger);
    // Dodajemy na początek listy
    elCompletedList.prepend(wrapper);
}
