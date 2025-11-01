// Game State
const gameState = {
    level: 1,
    score: 0,
    attempts: 3,
    currentChallenge: null,
    workspaceAtoms: []
};

// Molecules Database
const molecules = [
    {
        id: 1,
        name: 'جزيء الماء',
        formula: 'H₂O',
        description: 'ركب جزيء الماء باستخدام ذرتين من الهيدروجين وذرة واحدة من الأكسجين',
        atoms: { H: 2, O: 1 },
        difficulty: 1,
        points: 100,
        hint: 'تذكر: الماء يتكون من ذرتين هيدروجين وذرة أكسجين واحدة',
        structure: [
            { type: 'O', x: 100, y: 100 },
            { type: 'H', x: 50, y: 140 },
            { type: 'H', x: 150, y: 140 }
        ]
    },
    {
        id: 2,
        name: 'ثاني أكسيد الكربون',
        formula: 'CO₂',
        description: 'ركب جزيء ثاني أكسيد الكربون باستخدام ذرة كربون وذرتين من الأكسجين',
        atoms: { C: 1, O: 2 },
        difficulty: 1,
        points: 150,
        hint: 'ذرة الكربون في المنتصف والأكسجين على الجانبين',
        structure: [
            { type: 'C', x: 100, y: 100 },
            { type: 'O', x: 40, y: 100 },
            { type: 'O', x: 160, y: 100 }
        ]
    },
    {
        id: 3,
        name: 'الأمونيا',
        formula: 'NH₃',
        description: 'ركب جزيء الأمونيا باستخدام ذرة نيتروجين وثلاث ذرات من الهيدروجين',
        atoms: { N: 1, H: 3 },
        difficulty: 2,
        points: 200,
        hint: 'النيتروجين في المركز وثلاث ذرات هيدروجين حوله',
        structure: [
            { type: 'N', x: 100, y: 90 },
            { type: 'H', x: 50, y: 130 },
            { type: 'H', x: 100, y: 150 },
            { type: 'H', x: 150, y: 130 }
        ]
    },
    {
        id: 4,
        name: 'الميثان',
        formula: 'CH₄',
        description: 'ركب جزيء الميثان باستخدام ذرة كربون وأربع ذرات من الهيدروجين',
        atoms: { C: 1, H: 4 },
        difficulty: 2,
        points: 250,
        hint: 'الكربون في المركز محاط بأربع ذرات هيدروجين',
        structure: [
            { type: 'C', x: 100, y: 100 },
            { type: 'H', x: 50, y: 70 },
            { type: 'H', x: 150, y: 70 },
            { type: 'H', x: 60, y: 140 },
            { type: 'H', x: 140, y: 140 }
        ]
    },
    {
        id: 5,
        name: 'حمض الهيدروكلوريك',
        formula: 'HCl',
        description: 'ركب جزيء حمض الهيدروكلوريك باستخدام ذرة هيدروجين وذرة كلور',
        atoms: { H: 1, Cl: 1 },
        difficulty: 1,
        points: 100,
        hint: 'جزيء بسيط من ذرتين فقط',
        structure: [
            { type: 'H', x: 70, y: 100 },
            { type: 'Cl', x: 130, y: 100 }
        ]
    },
    {
        id: 6,
        name: 'بيروكسيد الهيدروجين',
        formula: 'H₂O₂',
        description: 'ركب جزيء بيروكسيد الهيدروجين (ماء الأكسجين)',
        atoms: { H: 2, O: 2 },
        difficulty: 2,
        points: 200,
        hint: 'ذرتين أكسجين في المنتصف وهيدروجين على كل جانب',
        structure: [
            { type: 'O', x: 80, y: 100 },
            { type: 'O', x: 120, y: 100 },
            { type: 'H', x: 50, y: 80 },
            { type: 'H', x: 150, y: 120 }
        ]
    }
];

// Atom Types
const atomTypes = {
    H: { name: 'هيدروجين', symbol: 'H', class: 'hydrogen', color: '#29b6f6' },
    O: { name: 'أكسجين', symbol: 'O', class: 'oxygen', color: '#e53935' },
    C: { name: 'كربون', symbol: 'C', class: 'carbon', color: '#212121' },
    N: { name: 'نيتروجين', symbol: 'N', class: 'nitrogen', color: '#3949ab' },
    Cl: { name: 'كلور', symbol: 'Cl', class: 'chlorine', color: '#43a047' },
    S: { name: 'كبريت', symbol: 'S', class: 'sulfur', color: '#fdd835' }
};

// Initialize Game
function initGame() {
    updateScoreBoard();
    loadChallenge(gameState.level - 1);
    createAtomsPool();
    setupEventListeners();
}

// Update Score Board
function updateScoreBoard() {
    document.getElementById('level').textContent = gameState.level;
    document.getElementById('score').textContent = gameState.score;
    document.getElementById('attempts').textContent = gameState.attempts;
}

// Load Challenge
function loadChallenge(index) {
    if (index >= molecules.length) {
        showVictoryModal();
        return;
    }

    gameState.currentChallenge = molecules[index];
    const challenge = gameState.currentChallenge;

    document.getElementById('target-molecule-name').textContent = challenge.name;
    document.getElementById('target-molecule-formula').textContent = challenge.formula;
    document.getElementById('molecule-description').textContent = challenge.description;

    drawTargetMolecule();
    createAtomsPool();
}

// Draw Target Molecule on Canvas
function drawTargetMolecule() {
    const canvas = document.getElementById('target-canvas');
    const ctx = canvas.getContext('2d');
    const challenge = gameState.currentChallenge;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw bonds
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 3;

    if (challenge.structure.length > 1) {
        const center = challenge.structure[0];
        for (let i = 1; i < challenge.structure.length; i++) {
            ctx.beginPath();
            ctx.moveTo(center.x, center.y);
            ctx.lineTo(challenge.structure[i].x, challenge.structure[i].y);
            ctx.stroke();
        }
    }

    // Draw atoms
    challenge.structure.forEach(atom => {
        const atomType = atomTypes[atom.type];

        // Draw atom circle
        ctx.fillStyle = atomType.color;
        ctx.beginPath();
        ctx.arc(atom.x, atom.y, 25, 0, 2 * Math.PI);
        ctx.fill();

        // Draw atom shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.beginPath();
        ctx.arc(atom.x + 2, atom.y + 2, 25, 0, 2 * Math.PI);
        ctx.fill();

        // Draw atom circle again (on top of shadow)
        ctx.fillStyle = atomType.color;
        ctx.beginPath();
        ctx.arc(atom.x, atom.y, 25, 0, 2 * Math.PI);
        ctx.fill();

        // Draw atom symbol
        ctx.fillStyle = 'white';
        ctx.font = 'bold 20px Cairo';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(atomType.symbol, atom.x, atom.y);
    });
}

// Create Atoms Pool
function createAtomsPool() {
    const container = document.getElementById('atoms-container');
    container.innerHTML = '';

    if (!gameState.currentChallenge) return;

    const requiredAtoms = gameState.currentChallenge.atoms;

    // Add 2 extra atoms of each type for flexibility
    Object.keys(requiredAtoms).forEach(atomSymbol => {
        const count = requiredAtoms[atomSymbol] + 2;
        for (let i = 0; i < count; i++) {
            createAtom(atomSymbol, container);
        }
    });
}

// Create Atom Element
function createAtom(symbol, container) {
    const atomType = atomTypes[symbol];
    const atom = document.createElement('div');
    atom.className = `atom ${atomType.class}`;
    atom.draggable = true;
    atom.dataset.type = symbol;

    atom.innerHTML = `
        <div class="atom-symbol">${atomType.symbol}</div>
        <div class="atom-name">${atomType.name}</div>
    `;

    atom.addEventListener('dragstart', handleDragStart);
    atom.addEventListener('dragend', handleDragEnd);

    container.appendChild(atom);
}

// Drag and Drop Functions
let draggedElement = null;

function handleDragStart(e) {
    draggedElement = e.target.closest('.atom');
    draggedElement.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData('text/html', draggedElement.innerHTML);
}

function handleDragEnd(e) {
    if (draggedElement) {
        draggedElement.classList.remove('dragging');
    }
}

// Setup Event Listeners
function setupEventListeners() {
    const workspace = document.getElementById('workspace');

    // Workspace drop events
    workspace.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    });

    workspace.addEventListener('drop', (e) => {
        e.preventDefault();
        if (draggedElement) {
            const clone = draggedElement.cloneNode(true);
            clone.draggable = true;
            clone.addEventListener('dragstart', handleDragStart);
            clone.addEventListener('dragend', handleDragEnd);
            clone.addEventListener('click', removeAtomFromWorkspace);

            workspace.appendChild(clone);
            workspace.classList.add('has-atoms');

            updateWorkspaceState();
        }
    });

    // Button events
    document.getElementById('check-btn').addEventListener('click', checkMolecule);
    document.getElementById('reset-btn').addEventListener('click', resetWorkspace);
    document.getElementById('hint-btn').addEventListener('click', showHint);
    document.getElementById('next-level-btn').addEventListener('click', nextLevel);

    // Modal close
    document.querySelector('.close-modal').addEventListener('click', closeModal);
}

// Remove Atom from Workspace
function removeAtomFromWorkspace(e) {
    const atom = e.currentTarget;
    atom.classList.add('removing');
    setTimeout(() => {
        atom.remove();
        updateWorkspaceState();
        const workspace = document.getElementById('workspace');
        if (workspace.children.length === 1) { // Only hint text left
            workspace.classList.remove('has-atoms');
        }
    }, 300);
}

// Update Workspace State
function updateWorkspaceState() {
    const workspace = document.getElementById('workspace');
    const atoms = workspace.querySelectorAll('.atom');

    gameState.workspaceAtoms = Array.from(atoms).map(atom => ({
        type: atom.dataset.type
    }));
}

// Check Molecule
function checkMolecule() {
    const challenge = gameState.currentChallenge;
    const workspaceAtoms = gameState.workspaceAtoms;

    // Count atoms in workspace
    const atomCount = {};
    workspaceAtoms.forEach(atom => {
        atomCount[atom.type] = (atomCount[atom.type] || 0) + 1;
    });

    // Check if counts match
    const requiredAtoms = challenge.atoms;
    let isCorrect = true;

    // Check all required atoms are present
    for (let atomType in requiredAtoms) {
        if (atomCount[atomType] !== requiredAtoms[atomType]) {
            isCorrect = false;
            break;
        }
    }

    // Check no extra atoms
    for (let atomType in atomCount) {
        if (!requiredAtoms[atomType] || atomCount[atomType] !== requiredAtoms[atomType]) {
            isCorrect = false;
            break;
        }
    }

    if (isCorrect) {
        handleCorrectAnswer();
    } else {
        handleWrongAnswer();
    }
}

// Handle Correct Answer
function handleCorrectAnswer() {
    gameState.score += gameState.currentChallenge.points;
    updateScoreBoard();

    showFeedback(
        true,
        'أحسنت! 🎉',
        `لقد ركبت ${gameState.currentChallenge.name} بشكل صحيح!\nحصلت على ${gameState.currentChallenge.points} نقطة!`
    );

    // Add celebration effect
    const workspace = document.getElementById('workspace');
    workspace.querySelectorAll('.atom').forEach(atom => {
        atom.classList.add('correct-placement');
    });
}

// Handle Wrong Answer
function handleWrongAnswer() {
    gameState.attempts--;
    updateScoreBoard();

    const workspace = document.getElementById('workspace');
    workspace.classList.add('error');
    setTimeout(() => workspace.classList.remove('error'), 500);

    if (gameState.attempts <= 0) {
        showFeedback(
            false,
            'للأسف! ❌',
            `لم تتمكن من تركيب ${gameState.currentChallenge.name} بشكل صحيح.\nالإجابة الصحيحة: ${gameState.currentChallenge.formula}\n\nجرب المستوى التالي!`
        );
        gameState.attempts = 3;
    } else {
        alert(`❌ تركيب خاطئ!\nتبقى لديك ${gameState.attempts} محاولات`);
    }
}

// Show Feedback Modal
function showFeedback(isSuccess, title, message) {
    const modal = document.getElementById('feedback-modal');
    const icon = modal.querySelector('.feedback-icon');

    document.getElementById('feedback-title').textContent = title;
    document.getElementById('feedback-message').textContent = message;

    icon.textContent = isSuccess ? '🎉' : '💪';

    modal.classList.add('active');
}

// Close Modal
function closeModal() {
    document.getElementById('feedback-modal').classList.remove('active');
}

// Next Level
function nextLevel() {
    closeModal();
    gameState.level++;
    gameState.attempts = 3;
    updateScoreBoard();
    resetWorkspace();
    loadChallenge(gameState.level - 1);
}

// Reset Workspace
function resetWorkspace() {
    const workspace = document.getElementById('workspace');
    const atoms = workspace.querySelectorAll('.atom');
    atoms.forEach(atom => atom.remove());
    workspace.classList.remove('has-atoms');
    gameState.workspaceAtoms = [];
}

// Show Hint
function showHint() {
    if (gameState.score >= 50) {
        gameState.score -= 50;
        updateScoreBoard();
        alert(`💡 تلميح:\n\n${gameState.currentChallenge.hint}`);
    } else {
        alert('تحتاج إلى 50 نقطة على الأقل لاستخدام التلميح!');
    }
}

// Show Victory Modal
function showVictoryModal() {
    showFeedback(
        true,
        'مبروك! 🏆',
        `لقد أنهيت جميع المستويات!\nمجموع نقاطك: ${gameState.score}\n\nأنت الآن خبير في تركيب الجزيئات الكيميائية!`
    );
    document.getElementById('next-level-btn').textContent = 'ابدأ من جديد';
    document.getElementById('next-level-btn').onclick = () => {
        location.reload();
    };
}

// Start Game on Page Load
window.addEventListener('DOMContentLoaded', initGame);
