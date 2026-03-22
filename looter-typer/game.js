// ===================================================
// GAME CONFIG
// ===================================================

const RARITIES = {
    COMMON: { id: 'common', name: 'Pospolita', color: 'text-gray-400', bg: 'bg-gray-700', border: 'border-common', glow: 'glow-common', chance: 57, goldMin: 1, goldMax: 5 },
    RARE: { id: 'rare', name: 'Rzadka', color: 'text-blue-400', bg: 'bg-blue-900', border: 'border-rare', glow: 'glow-rare', chance: 30, goldMin: 8, goldMax: 20 },
    LEGENDARY: { id: 'legendary', name: 'Legendarna', color: 'text-yellow-400', bg: 'bg-yellow-700', border: 'border-legendary', glow: 'glow-legendary', chance: 11, goldMin: 35, goldMax: 80 },
    MYTHIC: { id: 'mythic', name: 'Mityczna', color: 'text-fuchsia-400', bg: 'bg-mythic-anim', border: 'border-mythic', glow: 'glow-mythic', chance: 2, goldMin: 150, goldMax: 400 }
};

// ===================================================
// WORD LIBRARY
// ===================================================

const WORDS = {
    common: [
        'Klucz', 'Pudło', 'Zamek', 'Drzwi', 'Deska', 'Kamień', 'Wytrych', 'Złom',
        'Sznur', 'Gwóźdź', 'Worek', 'Korzeń', 'Koszyk', 'Puszka', 'Garnek',
        'Tasak', 'Klamra', 'Haczyk', 'Igła', 'Nitka', 'Guzik', 'Latarka',
        'Mapa', 'Kompas', 'Wiadro', 'Łopata', 'Kilof', 'Siekiera', 'Rydel',
        'Beczka', 'Flaszka', 'Kubek', 'Miska', 'Talerz', 'Nożyce', 'Pilnik',
        'Wiertło', 'Poziomica', 'Miarka'
    ],
    rare: [
        'Srebrny Klucz', 'Mocny Wytrych', 'Tajna Skrytka', 'Żelazna Skrzynia',
        'Magiczny Zamek', 'Kryształ', 'Stalowy Miecz', 'Niebieska Fiolka',
        'Elficki Łuk', 'Malachitowy Amulet', 'Hartowana Tarcza', 'Runiczna Runa',
        'Mistyczny Pergamin', 'Zaczarowane Miasto', 'Lodowa Bransoleta',
        'Ogniste Ostrze', 'Srebrna Podkowa', 'Magnes Komandora', 'Tajemne Pismo',
        'Żelazny Pierścień', 'Pyszna Koronka', 'Smocza Łuska', 'Wietrzna Katana',
        'Granitowa Zbroja', 'Kryształowa Kula'
    ],
    legendary: [
        'Legendarny Wytrych', 'Starożytny Artefakt', 'Złoty Klucz Przeznaczenia',
        'Smocza Skrzynia', 'Oko Cyklopa', 'Korona Zaginionego Króla',
        'Miecz z Gwieździstej Kuźni', 'Talizman Nieśmiertelności',
        'Feniksowe Pióro', 'Eliksir Wieczności', 'Tajemnica Stulecia',
        'Starożytna Mapa Skarbów', 'Buława Atlantydy', 'Piorunowy Kostur',
        'Zaklęte Zwoje', 'Krwawy Chalcedon', 'Świetlisty Kryształ',
        'Mroczny Czart', 'Skrzydło Serafina', 'Najwyższa Esencja'
    ],
    mythic: [
        'Mityczny Artegon', 'Serce Boga', 'Klucz do Nieskończoności',
        'Tron Niebios', 'Oko Wszechświata', 'Wieczny Płomień',
        'Głaz Stworzyciela', 'Pierwszy Cień', 'Boski Rezonans',
        'Zakazana Wiedza', 'Ostatnie Proroctwo', 'Przełom Wiedźmy'
    ]
};

// ===================================================
// LOOT TABLE
// ===================================================

const LOOT = {
    common: [
        { emoji: '🪙', name: 'Miedziana Moneta', desc: 'Podniesiona z kałuży. Pachnie starością i czymś nieprzyjemnym.', stats: { Atak: 0, Obrona: 1, Szczęście: 2 } },
        { emoji: '🍎', name: 'Zwykłe Jabłko', desc: 'Połowę już ktoś nadgryzł. Ale wiesz co – i tak smakuje.', stats: { Atak: 0, Obrona: 0, Szczęście: 3 } },
        { emoji: '🗡️', name: 'Zardzewiały Sztylet', desc: 'Nadaje się do krojenia chleba. Lub sera. Wrogów raczej nie.', stats: { Atak: 3, Obrona: 0, Szczęście: 1 } },
        { emoji: '🪵', name: 'Kawałek Drewna', desc: 'Pamiątka po drzewie, które już dawno przestało żyć.', stats: { Atak: 1, Obrona: 2, Szczęście: 0 } },
        { emoji: '🧤', name: 'Stara Rękawica', desc: 'Tylko jedna. Gdzie jest druga? To wielka tajemnica wszechświata.', stats: { Atak: 1, Obrona: 3, Szczęście: 1 } },
        { emoji: '🩴', name: 'Zgubiony Klapek', desc: 'Znaleziony na plaży. Właściciel pewnie płacze do dziś.', stats: { Atak: 0, Obrona: 1, Szczęście: 4 } },
        { emoji: '📜', name: 'Pusty Pergamin', desc: "Ktoś napisał na nim: 'Lista rzeczy do zrobienia'. I nic więcej.", stats: { Atak: 0, Obrona: 0, Szczęście: 5 } },
        { emoji: '🔩', name: 'Zardzewiała Śruba', desc: 'Nie pasuje do żadnej nakrętki. Idealna do kolekcji bezużyteczności.', stats: { Atak: 2, Obrona: 2, Szczęście: 0 } },
        { emoji: '🧦', name: 'Podejrzana Skarpetka', desc: 'Znaleziona w skrzyni ze skarbami. Pytań nie zadawaj.', stats: { Atak: 0, Obrona: 3, Szczęście: 2 } },
        { emoji: '🍄', name: 'Głupawa Pieczarka', desc: 'Niejadalna, ale ładna. Jak wiele rzeczy w życiu.', stats: { Atak: 0, Obrona: 0, Szczęście: 6 } }
    ],
    rare: [
        { emoji: '💍', name: 'Srebrny Pierścień', desc: "Wyryto na nim napis: 'Własność kogoś ważniejszego'. Wiesz co? Teraz twój.", stats: { Atak: 5, Obrona: 5, Szczęście: 8 } },
        { emoji: '⚔️', name: 'Stalowy Miecz', desc: 'Błyszczy jak nowy. Poprzedni właściciel nie zdążył go użyć.', stats: { Atak: 18, Obrona: 3, Szczęście: 4 } },
        { emoji: '🛡️', name: 'Ciężka Tarcza', desc: 'Ma tyle wgnieceń, że wygląda jak mapa świata. Działa.', stats: { Atak: 2, Obrona: 20, Szczęście: 3 } },
        { emoji: '🧪', name: 'Mikstura Zdrowia', desc: 'Smakuje jak skarpetka. Ale leczy. Kompromisy życiowe.', stats: { Atak: 3, Obrona: 8, Szczęście: 10 } },
        { emoji: '🏹', name: 'Elficki Łuk', desc: 'Zrobiony z drewna, które szeptało zaklęcia. Ponoć.', stats: { Atak: 15, Obrona: 2, Szczęście: 12 } },
        { emoji: '🔮', name: 'Magiczna Kula', desc: 'Pokazuje przyszłość. Na razie tylko twoją klęskę. Przykro mi.', stats: { Atak: 7, Obrona: 7, Szczęście: 15 } },
        { emoji: '📖', name: 'Runiczny Grimuar', desc: 'Napisany językiem, którego nikt nie rozumie. Nawet autor.', stats: { Atak: 10, Obrona: 6, Szczęście: 14 } },
        { emoji: '🧊', name: 'Lodowy Kryształ', desc: 'Zimny jak lodówka. Ale ładniejszy i droższy.', stats: { Atak: 12, Obrona: 9, Szczęście: 9 } }
    ],
    legendary: [
        { emoji: '💎', name: 'Diament Nieskończoności', desc: 'Mówią, że kto go dzierży, ten panuje nad losem. Tymczasem znika do kieszeni.', stats: { Atak: 30, Obrona: 30, Szczęście: 30 } },
        { emoji: '👑', name: 'Korona Zaginionego Króla', desc: 'Zbyt ciężka do noszenia, zbyt cenna do sprzedaży. Czyli idealnie bezużyteczna.', stats: { Atak: 20, Obrona: 35, Szczęście: 40 } },
        { emoji: '🐉', name: 'Jajo Smoka', desc: 'Ciepłe w dotyku. Coś się w środku rusza. Proszę, nie chuchaj na nie.', stats: { Atak: 45, Obrona: 20, Szczęście: 25 } },
        { emoji: '🌌', name: 'Fragment Galaktyki', desc: 'Dosłownie kawałek kosmosu. Na sprzedaż naruszenie prawa grawitacji.', stats: { Atak: 25, Obrona: 25, Szczęście: 50 } },
        { emoji: '🗺️', name: 'Mapa Zagubionych Skarbów', desc: 'Nie wiadomo dokąd prowadzi, ale droga jest tak piękna, że to nie ma znaczenia.', stats: { Atak: 15, Obrona: 15, Szczęście: 55 } },
        { emoji: '🕯️', name: 'Wieczna Świeca', desc: 'Pali się od tysięcy lat. Pracodawca chciałby, żebyś był jak ona.', stats: { Atak: 10, Obrona: 40, Szczęście: 45 } },
        { emoji: '⚡', name: 'Piorun w Butelce', desc: 'Ktoś złapał burzę w szkło. Ten ktoś jest geniuszem lub głupcem. Może obydwoma.', stats: { Atak: 55, Obrona: 10, Szczęście: 30 } },
        { emoji: '🌹', name: 'Niewiędnąca Róża', desc: 'Piękna przez wieczność. Kłuje tak samo przez wieczność.', stats: { Atak: 5, Obrona: 5, Szczęście: 80 } }
    ],
    mythic: [
        { emoji: '🌠', name: 'Serce Gwiazdy', desc: 'Wyrwane wprost z umierającej gwiazdy. Ciepłe. Pulsuje. Nie pytaj.', stats: { Atak: 99, Obrona: 99, Szczęście: 99 } },
        { emoji: '👁️', name: 'Oko Wszechświata', desc: 'Widzi wszystko. Łącznie z tym, czego nie chcesz, żeby widziało.', stats: { Atak: 70, Obrona: 70, Szczęście: 120 } },
        { emoji: '🔱', name: 'Trójząb Bogów', desc: 'Skuto je przez trzy ery. Nikt nie wie dla kogo. Teraz wiesz.', stats: { Atak: 120, Obrona: 60, Szczęście: 80 } },
        { emoji: '🌀', name: 'Vortex Stworzenia', desc: 'Obraca się od Wielkiego Wybuchu. Daj mu spokój.', stats: { Atak: 80, Obrona: 80, Szczęście: 100 } },
        { emoji: '🏺', name: 'Urna Pierwszego Czasu', desc: 'Zawiera pierwszy oddech wszechświata. I trochę kurzu.', stats: { Atak: 50, Obrona: 110, Szczęście: 100 } },
        { emoji: '🧿', name: 'Kamień Przeznaczenia', desc: 'Nie możesz go zgubić. Po prostu nie możesz. Już próbowałeś.', stats: { Atak: 60, Obrona: 60, Szczęście: 140 } }
    ]
};

// ===================================================
// GAME STATE
// ===================================================

let currentRarity = null;
let targetWord = '';
let typedProgress = '';
let isOpening = false;
let inventory = [];
let gold = 0;
let selectedItemId = null;

// equipped: { helmet: item|null, armor: item|null, weapon: item|null, talisman: item|null }
let equipped = { helmet: null, armor: null, weapon: null, talisman: null };

const SLOT_NAMES = { helmet: 'Hełm', armor: 'Zbroja', weapon: 'Broń', talisman: 'Talizman' };
const SLOT_ICONS = { helmet: '🪖', armor: '🛡️', weapon: '⚔️', talisman: '💍' };
// Each slot only contributes one stat to the character summary
const SLOT_STAT = { helmet: 'Obrona', armor: 'Obrona', weapon: 'Atak', talisman: 'Szczęście' };

// Drag state
let draggedItemId = null;

// ===================================================
// DOM REFERENCES
// ===================================================

const wordContainer = document.getElementById('word-container');
const typedTextEl = document.getElementById('typed-text');
const remainingTextEl = document.getElementById('remaining-text');
const chestElement = document.getElementById('chest-element');
const rarityBadge = document.getElementById('rarity-badge');
const lootDisplay = document.getElementById('loot-display');
const lootEmoji = document.getElementById('loot-emoji');
const lootName = document.getElementById('loot-name');
const lootDesc = document.getElementById('loot-desc');
const inventoryGrid = document.getElementById('inventory-grid');
const emptyInventoryMsg = document.getElementById('empty-inventory');
const itemCountEl = document.getElementById('item-count');
const goldDisplay = document.getElementById('gold-display');
const toastEl = document.getElementById('toast');

const itemModal = document.getElementById('item-modal');
const modalBox = document.getElementById('modal-box');
const modalEmoji = document.getElementById('modal-emoji');
const modalRarity = document.getElementById('modal-rarity');
const modalName = document.getElementById('modal-name');
const modalDesc = document.getElementById('modal-desc');
const modalStats = document.getElementById('modal-stats');
const modalSellBtn = document.getElementById('modal-sell-btn');
const modalSellPrice = document.getElementById('modal-sell-price');
const modalClose = document.getElementById('modal-close');

// Character panel DOM
const statAtk = document.getElementById('stat-atk');
const statDef = document.getElementById('stat-def');
const statLck = document.getElementById('stat-lck');
const statTotal = document.getElementById('stat-total');
const equipSlotBtns = document.querySelectorAll('.equip-modal-btn');

// ===================================================
// PERSISTENCE (localStorage)
// ===================================================

const SAVE_KEY_INVENTORY = 'looter_inventory';
const SAVE_KEY_GOLD = 'looter_gold';
const SAVE_KEY_EQUIPPED = 'looter_equipped';

function saveGame() {
    try {
        localStorage.setItem(SAVE_KEY_INVENTORY, JSON.stringify(inventory));
        localStorage.setItem(SAVE_KEY_GOLD, String(gold));
        localStorage.setItem(SAVE_KEY_EQUIPPED, JSON.stringify(equipped));
    } catch (e) {
        console.warn('Zapis danych nie powiódł się:', e);
    }
}

function loadGame() {
    try {
        const savedInventory = localStorage.getItem(SAVE_KEY_INVENTORY);
        const savedGold = localStorage.getItem(SAVE_KEY_GOLD);
        const savedEquipped = localStorage.getItem(SAVE_KEY_EQUIPPED);

        if (savedInventory) {
            const parsed = JSON.parse(savedInventory);
            if (Array.isArray(parsed)) {
                inventory = parsed;
                inventory.forEach(item => addItemCardToDOM(item));
                updateInventoryUI();
            }
        }
        if (savedGold) {
            gold = parseInt(savedGold, 10) || 0;
            updateGoldUI();
        }
        if (savedEquipped) {
            const parsedEquip = JSON.parse(savedEquipped);
            for (const slot of Object.keys(equipped)) {
                if (parsedEquip[slot]) {
                    equipped[slot] = parsedEquip[slot];
                    renderSlot(slot);
                }
            }
            recalculateStats();
        }
    } catch (e) {
        console.warn('Odczyt danych nie powiódł się:', e);
    }
}

// ===================================================
// UI HELPERS
// ===================================================

function updateGoldUI(animate = false) {
    goldDisplay.textContent = gold.toLocaleString('pl-PL');
    if (animate) {
        goldDisplay.classList.remove('gold-pulse');
        void goldDisplay.offsetWidth;
        goldDisplay.classList.add('gold-pulse');
        goldDisplay.addEventListener('animationend', () => goldDisplay.classList.remove('gold-pulse'), { once: true });
    }
}

function updateInventoryUI() {
    const count = inventory.length;
    itemCountEl.textContent = `Przedmioty: ${count}`;
    if (emptyInventoryMsg) {
        emptyInventoryMsg.style.display = count === 0 ? 'block' : 'none';
    }
}

let toastTimer = null;
function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2500);
}

// ===================================================
// RARITY LOGIC
// ===================================================

function getRandomRarity() {
    const rand = Math.random() * 100;
    let cumulative = 0;
    for (const key of ['MYTHIC', 'LEGENDARY', 'RARE', 'COMMON']) {
        cumulative += RARITIES[key].chance;
        if (rand < cumulative) return RARITIES[key];
    }
    return RARITIES.COMMON;
}

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getSellPrice(rarity) {
    return Math.floor(Math.random() * (rarity.goldMax - rarity.goldMin + 1)) + rarity.goldMin;
}

// ===================================================
// CHEST SPAWN
// ===================================================

function spawnNewChest() {
    isOpening = false;
    typedProgress = '';

    currentRarity = getRandomRarity();
    targetWord = getRandomItem(WORDS[currentRarity.id]);

    chestElement.style.opacity = '1';
    if (currentRarity.id === 'mythic') {
        chestElement.innerText = '✨';
        chestElement.className = 'text-9xl cursor-default select-none mythic-chest-pulse transition-all duration-300 z-10';
    } else {
        chestElement.innerText = '📦';
        chestElement.className = 'text-9xl cursor-default select-none float-animation transition-all duration-300 z-10';
    }

    lootDisplay.classList.remove('loot-reveal');
    lootDisplay.style.opacity = '0';

    updateWordUI();

    if (currentRarity.id === 'mythic') {
        rarityBadge.className = 'px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4 transition-all duration-300 bg-mythic-anim text-white shadow-lg';
    } else {
        rarityBadge.className = `px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4 transition-all duration-300 ${currentRarity.bg} text-white shadow-lg`;
    }
    rarityBadge.innerText = `Rzadkość: ${currentRarity.name}`;

    remainingTextEl.className = `${currentRarity.color} opacity-70 ${currentRarity.glow}`;
}

function updateWordUI() {
    typedTextEl.innerText = targetWord.substring(0, typedProgress.length);
    remainingTextEl.innerText = targetWord.substring(typedProgress.length);
}

// ===================================================
// CHEST OPEN
// ===================================================

function openChest() {
    isOpening = true;

    chestElement.classList.remove('float-animation', 'mythic-chest-pulse');
    chestElement.classList.add('open-animation');
    setTimeout(() => { chestElement.innerText = '🎁'; }, 150);

    wordContainer.style.opacity = '0';
    rarityBadge.style.opacity = '0';

    const droppedItem = getRandomItem(LOOT[currentRarity.id]);

    setTimeout(() => {
        chestElement.style.opacity = '0.2';

        lootEmoji.innerText = droppedItem.emoji;
        lootName.innerText = droppedItem.name;
        lootDesc.innerText = droppedItem.desc;
        lootName.className = `text-2xl font-bold rounded bg-black bg-opacity-70 px-4 py-1 mt-4 ${currentRarity.color} ${currentRarity.glow}`;

        lootDisplay.style.opacity = '1';
        lootDisplay.classList.add('loot-reveal');

        addToInventory({ ...droppedItem, rarity: currentRarity, id: Date.now() + Math.random() });
    }, 600);

    setTimeout(() => {
        wordContainer.style.opacity = '1';
        rarityBadge.style.opacity = '1';
        spawnNewChest();
    }, 3000);
}

// ===================================================
// INVENTORY MANAGEMENT
// ===================================================

function addToInventory(item) {
    inventory.push(item);
    addItemCardToDOM(item);
    updateInventoryUI();
    saveGame();
}

function addItemCardToDOM(item) {
    const itemCard = document.createElement('div');
    itemCard.className = `item-card flex flex-col items-center justify-center p-3 rounded-xl border-2 bg-gray-800 bg-opacity-50 backdrop-blur-sm w-24 h-24 ${item.rarity.border}`;
    itemCard.dataset.id = item.id;

    const sellPrice = getSellPrice(item.rarity);
    itemCard.dataset.sellPrice = sellPrice;

    itemCard.innerHTML = `
        <span class="text-4xl drop-shadow-md mb-1">${item.emoji}</span>
        <span class="text-[9px] text-center leading-tight font-semibold text-gray-200 line-clamp-2">${item.name}</span>
        <span class="sell-btn">💰${sellPrice}g</span>
    `;

    // Click to open modal
    itemCard.addEventListener('click', () => openItemModal(item, sellPrice, itemCard));

    // Drag to equip
    itemCard.setAttribute('draggable', 'true');
    itemCard.addEventListener('dragstart', e => {
        draggedItemId = item.id;
        e.dataTransfer.effectAllowed = 'move';
        // slight fade so user sees it's being dragged
        setTimeout(() => { itemCard.style.opacity = '0.4'; }, 0);
    });
    itemCard.addEventListener('dragend', () => {
        itemCard.style.opacity = '1';
        draggedItemId = null;
    });

    inventoryGrid.prepend(itemCard);
}

function removeFromInventory(itemId) {
    inventory = inventory.filter(i => i.id !== itemId);
    const card = inventoryGrid.querySelector(`[data-id="${itemId}"]`);
    if (card) {
        card.style.transition = 'transform 0.2s, opacity 0.2s';
        card.style.transform = 'scale(0)';
        card.style.opacity = '0';
        setTimeout(() => card.remove(), 200);
    }
    updateInventoryUI();
    saveGame();
}

// ===================================================
// ITEM MODAL
// ===================================================

function openItemModal(item, sellPrice, cardEl) {
    selectedItemId = item.id;

    modalEmoji.textContent = item.emoji;
    modalName.textContent = item.name;
    modalDesc.textContent = item.desc;

    modalRarity.textContent = item.rarity.name.toUpperCase();
    if (item.rarity.id === 'mythic') {
        modalRarity.className = 'text-xs font-bold tracking-widest uppercase mb-1 px-3 py-0.5 rounded-full bg-mythic-anim text-white';
    } else {
        modalRarity.className = `text-xs font-bold tracking-widest uppercase mb-1 px-3 py-0.5 rounded-full ${item.rarity.bg} text-white`;
    }
    modalName.className = `text-2xl font-bold mt-2 mb-3 ${item.rarity.color} ${item.rarity.glow}`;

    modalStats.innerHTML = '';
    const statIcons = { Atak: '⚔️', Obrona: '🛡️', Szczęście: '🍀' };
    for (const [statName, value] of Object.entries(item.stats)) {
        const statDiv = document.createElement('div');
        statDiv.className = 'flex flex-col items-center bg-white bg-opacity-5 rounded-lg py-2';
        statDiv.innerHTML = `
            <span class="text-xl mb-1">${statIcons[statName] || '✨'}</span>
            <span class="font-bold text-white text-sm">${value}</span>
            <span class="text-gray-400 text-[10px]">${statName}</span>
        `;
        modalStats.appendChild(statDiv);
    }

    const actualSellPrice = parseInt(cardEl.dataset.sellPrice) || sellPrice;
    modalSellPrice.textContent = `Sprzedasz za: ${actualSellPrice} 🪙 złota`;
    modalSellBtn.onclick = () => sellItem(item.id, actualSellPrice);

    modalBox.className = `relative bg-gray-900 border-2 rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl ${item.rarity.border}`;

    // Wire up equip slot buttons
    updateEquipModalButtons(item);

    itemModal.classList.add('show');
}

function closeItemModal() {
    itemModal.classList.remove('show');
    selectedItemId = null;
}

modalClose.addEventListener('click', closeItemModal);
itemModal.addEventListener('click', e => { if (e.target === itemModal) closeItemModal(); });

// ===================================================
// EQUIPMENT SYSTEM
// ===================================================

function equipItem(item, slotKey) {
    // If slot already has something, put it back to inventory before replacing
    if (equipped[slotKey]) {
        const oldItem = equipped[slotKey];
        // return old item to inventory array + DOM
        if (!inventory.find(i => i.id === oldItem.id)) {
            inventory.push(oldItem);
        }
        addItemCardToDOM(oldItem);
    }
    equipped[slotKey] = item;
    // Remove newly equipped item from inventory
    removeFromInventory(item.id);
    renderSlot(slotKey);
    recalculateStats();
    saveGame();
    closeItemModal();
    showToast(`${item.emoji} ${item.name} założono na ${SLOT_NAMES[slotKey]}!`);
}

function unequipItem(slotKey) {
    const item = equipped[slotKey];
    if (!item) return;
    equipped[slotKey] = null;
    // Return to inventory
    if (!inventory.find(i => i.id === item.id)) {
        inventory.push(item);
        addItemCardToDOM(item);
        updateInventoryUI();
    }
    renderSlot(slotKey);
    recalculateStats();
    saveGame();
    showToast(`Zdjęto ${item.name} — wróćiło do ekwipunku.`);
}

function renderSlot(slotKey) {
    const slotEl = document.getElementById(`slot-${slotKey}`);
    if (!slotEl) return;
    const item = equipped[slotKey];
    if (item) {
        slotEl.classList.add('filled');
        slotEl.className = slotEl.className
            .replace(/border-common|border-rare|border-legendary|border-mythic/g, '').trim();
        slotEl.classList.add(item.rarity.border);
        slotEl.innerHTML = `
            <span class="slot-icon">${item.emoji}</span>
            <span class="slot-item-name">${item.name}</span>
        `;
        slotEl.onclick = () => unequipItem(slotKey);
    } else {
        slotEl.classList.remove('filled');
        slotEl.className = slotEl.className
            .replace(/border-common|border-rare|border-legendary|border-mythic/g, '').trim();
        slotEl.innerHTML = `
            <span class="slot-icon">${SLOT_ICONS[slotKey]}</span>
            <span class="slot-label">${SLOT_NAMES[slotKey]}</span>
        `;
        slotEl.onclick = null;
    }
    // Re-attach click handler separately — drag-drop is handled via delegation
}

function recalculateStats() {
    let atk = 0, def = 0, lck = 0;
    for (const [slotKey, item] of Object.entries(equipped)) {
        if (!item) continue;
        const relevantStat = SLOT_STAT[slotKey]; // which stat this slot contributes
        if (relevantStat === 'Atak') atk += item.stats.Atak || 0;
        if (relevantStat === 'Obrona') def += item.stats.Obrona || 0;
        if (relevantStat === 'Szczęście') lck += item.stats['Szczęście'] || 0;
    }
    const total = atk + def + lck;
    setStatWithAnim(statAtk, atk);
    setStatWithAnim(statDef, def);
    setStatWithAnim(statLck, lck);
    setStatWithAnim(statTotal, total);
}

function setStatWithAnim(el, value) {
    if (el.textContent === String(value)) return;
    el.textContent = value;
    el.classList.remove('stat-bump');
    void el.offsetWidth;
    el.classList.add('stat-bump');
    el.addEventListener('animationend', () => el.classList.remove('stat-bump'), { once: true });
}

function updateEquipModalButtons(item) {
    equipSlotBtns.forEach(btn => {
        const slotKey = btn.dataset.slot;
        const isOccupied = equipped[slotKey] !== null;
        btn.classList.toggle('slot-occupied', isOccupied);
        // Update label below emoji
        const lbl = btn.querySelector('span');
        if (lbl) lbl.textContent = isOccupied ? '✓ ' + SLOT_NAMES[slotKey] : SLOT_NAMES[slotKey];
        btn.onclick = () => equipItem(item, slotKey);
    });
}

// ===================================================
// DRAG-AND-DROP: EVENT DELEGATION ON CHARACTER PANEL
// ===================================================

function initSlotDropTargets() {
    const panel = document.getElementById('character-panel');
    if (!panel) return;

    panel.addEventListener('dragover', e => {
        const slot = e.target.closest('.equip-slot');
        if (!slot || !draggedItemId) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        slot.classList.add('drag-over');
    });

    panel.addEventListener('dragleave', e => {
        const slot = e.target.closest('.equip-slot');
        // Only remove when truly leaving the slot (not entering a child)
        if (slot && !slot.contains(e.relatedTarget)) {
            slot.classList.remove('drag-over');
        }
    });

    panel.addEventListener('drop', e => {
        const slot = e.target.closest('.equip-slot');
        if (!slot) return;
        e.preventDefault();
        slot.classList.remove('drag-over');
        if (!draggedItemId) return;

        const slotKey = slot.dataset.slot;
        const item = inventory.find(i => String(i.id) === String(draggedItemId));
        if (!item || !slotKey) return;

        equipItem(item, slotKey);
    });
}

// ===================================================
// SELLING SYSTEM
// ===================================================

function sellItem(itemId, price) {
    // If item is equipped, unequip it first silently
    for (const slot of Object.keys(equipped)) {
        if (equipped[slot] && equipped[slot].id === itemId) {
            equipped[slot] = null;
            renderSlot(slot);
            recalculateStats();
        }
    }
    gold += price;
    updateGoldUI(true);
    removeFromInventory(itemId);
    closeItemModal();
    showToast(`Sprzedano za ${price} 🪙 złota!`);
    saveGame();
}

// ===================================================
// MISTAKE ANIMATION
// ===================================================

function triggerMistakeAnimation() {
    wordContainer.classList.remove('shake-animation');
    void wordContainer.offsetWidth;
    wordContainer.classList.add('shake-animation');
    remainingTextEl.classList.add('text-red-400');
    setTimeout(() => remainingTextEl.classList.remove('text-red-400'), 400);
}

// ===================================================
// KEYBOARD INPUT
// ===================================================

window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        if (itemModal.classList.contains('show')) closeItemModal();
        return;
    }
    if (itemModal.classList.contains('show')) return;
    if (isOpening) return;
    if (e.key.length > 1) return;

    const expectedChar = targetWord[typedProgress.length];

    // Prevent space from scrolling the page when it's the expected character
    if (e.key === ' ' && expectedChar === ' ') e.preventDefault();

    // Case-sensitive, exact match (spacja też jest znakiem)
    if (e.key === expectedChar) {
        typedProgress += expectedChar;
        updateWordUI();
        if (typedProgress === targetWord) openChest();
    } else {
        triggerMistakeAnimation();
    }
});

// ===================================================
// RESET GAME
// ===================================================

function resetGame() {
    if (!confirm('Na pewno chcesz usunąć wszystkie przedmioty i złoto? Tej operacji nie można cofnąć!')) return;

    // Clear inventory
    inventory = [];
    inventoryGrid.querySelectorAll('.item-card').forEach(c => c.remove());
    updateInventoryUI();

    // Clear equipped
    for (const slot of Object.keys(equipped)) {
        equipped[slot] = null;
        renderSlot(slot);
    }
    recalculateStats();

    // Clear gold
    gold = 0;
    updateGoldUI();

    // Clear storage
    try {
        localStorage.removeItem(SAVE_KEY_INVENTORY);
        localStorage.removeItem(SAVE_KEY_GOLD);
        localStorage.removeItem(SAVE_KEY_EQUIPPED);
    } catch (e) { }

    showToast('🗑️ Ekwipunek został wyczyszczony!');
}

// ===================================================
// DISMISSIBLE HINT
// ===================================================

const SAVE_KEY_HINT = 'looter_hint_dismissed';

function initHint() {
    const hint = document.getElementById('inv-hint-banner');
    const btn = document.getElementById('inv-hint-ok');
    if (!hint || !btn) return;

    // hide immediately if already dismissed
    if (localStorage.getItem(SAVE_KEY_HINT)) {
        hint.style.display = 'none';
        return;
    }
    btn.addEventListener('click', () => {
        hint.style.display = 'none';
        try { localStorage.setItem(SAVE_KEY_HINT, '1'); } catch (e) { }
    });
}

const resetBtn = document.getElementById('reset-btn');
if (resetBtn) resetBtn.addEventListener('click', resetGame);

// ===================================================
// INIT
// ===================================================

loadGame();
spawnNewChest();
initSlotDropTargets();
initHint();
