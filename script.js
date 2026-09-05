const moves = [
  { name: 'Neighborhood stroll', description: 'Take the long way and notice three new things.', icon: '👟', category: 'wander', color: '#ffd866' },
  { name: 'Photo walk', description: 'Hunt for tiny colors, funny shapes, or cool shadows.', icon: '📸', category: 'wander', color: '#94d9ff' },
  { name: 'Dance break', description: 'Put on one song and let your body choose the moves.', icon: '💃', category: 'music', color: '#ffb5ce' },
  { name: 'Kitchen karaoke', description: 'Sing along, sway along, and grab a snack after.', icon: '🎤', category: 'music', color: '#d7f46a' },
  { name: 'Room rave', description: 'Make a tiny dance floor between your bed and desk.', icon: '🪩', category: 'music', color: '#cbb7ff' },
  { name: 'Wiggle warm-up', description: 'Shake out your hands, shoulders, feet, and face.', icon: '🪇', category: 'music', color: '#ffd866' },
  { name: 'Big stretch', description: 'Reach up high, fold down low, breathe slowly.', icon: '🙆', category: 'stretch', color: '#94d9ff' },
  { name: 'Cozy yoga', description: 'Try a few gentle shapes in your comfiest clothes.', icon: '🧘', category: 'stretch', color: '#d7f46a' },
  { name: 'Animal stretches', description: 'Move like a cat, dog, snake, or sleepy bear.', icon: '🐈', category: 'stretch', color: '#ffb5ce' },
  { name: 'Balance minute', description: 'Stand on one foot while you brush your teeth.', icon: '🦩', category: 'stretch', color: '#ffd866' },
  { name: 'Bike cruise', description: 'Roll somewhere familiar and feel the breeze.', icon: '🚲', category: 'roll', color: '#94d9ff' },
  { name: 'Scooter spin', description: 'Take your scooter for a no-rush neighborhood loop.', icon: '🛴', category: 'roll', color: '#d7f46a' },
  { name: 'Skate & glide', description: 'Find a smooth patch and practice your favorite glide.', icon: '🛼', category: 'roll', color: '#ffb5ce' },
  { name: 'Roller disco', description: 'Add music and sparkle to your wheels.', icon: '✨', category: 'roll', color: '#cbb7ff' },
  { name: 'Sidewalk chalk', description: 'Draw a hopscotch or a path of silly instructions.', icon: '🖍️', category: 'outside', color: '#ffd866' },
  { name: 'Cloud watching', description: 'Lie back, stretch your legs, and name the shapes.', icon: '☁️', category: 'outside', color: '#94d9ff' },
  { name: 'Nature bingo', description: 'Find something fuzzy, crunchy, tiny, and bright.', icon: '🔎', category: 'outside', color: '#d7f46a' },
  { name: 'Garden helper', description: 'Water, plant, rake, or just explore the garden.', icon: '🌱', category: 'outside', color: '#bde9a5' },
  { name: 'Leaf collecting', description: 'Gather a few favorites and make a moving collage.', icon: '🍂', category: 'outside', color: '#ffb5ce' },
  { name: 'Picnic shuffle', description: 'Carry a blanket, find a spot, and wander while you wait.', icon: '🧺', category: 'outside', color: '#ffd866' },
  { name: 'Treasure hunt', description: 'Hide clues around the house or yard for someone to find.', icon: '🗺️', category: 'play', color: '#ffb5ce' },
  { name: 'Sock skating', description: 'Slide safely across a smooth floor like a superstar.', icon: '🧦', category: 'play', color: '#cbb7ff' },
  { name: 'Freeze dance', description: 'Dance until the music stops. Freeze like a statue.', icon: '🕺', category: 'play', color: '#94d9ff' },
  { name: 'Balloon bop', description: 'Keep a balloon in the air using any body part.', icon: '🎈', category: 'play', color: '#d7f46a' },
  { name: 'Obstacle doodle', description: 'Turn pillows, tape, and boxes into a wiggly course.', icon: '🧱', category: 'play', color: '#ffd866' },
  { name: 'Animal charades', description: 'Act out an animal and let your friends guess.', icon: '🦘', category: 'play', color: '#ffb5ce' },
  { name: 'Jump rope remix', description: 'Make up a rhythm, a rhyme, or a silly new trick.', icon: '➰', category: 'play', color: '#94d9ff' },
  { name: 'Bubble chase', description: 'Blow bubbles and catch the biggest one you can.', icon: '🫧', category: 'play', color: '#cbb7ff' },
  { name: 'Living room trail', description: 'Build a path around furniture and follow it twice.', icon: '🧭', category: 'wander', color: '#d7f46a' },
  { name: 'Errand adventure', description: 'Walk one small errand and take a curious detour.', icon: '🛍️', category: 'wander', color: '#ffd866' },
  { name: 'Pillow reset', description: 'Make a nest, breathe deep, and stretch where you land.', icon: '🛋️', category: 'stretch', color: '#ffb5ce' },
  { name: 'Freestyle footsteps', description: 'Make up a pattern: tap, step, clap, repeat.', icon: '👣', category: 'music', color: '#94d9ff' }
];

const grid = document.querySelector('#move-grid');
const emptyState = document.querySelector('#empty-state');
const count = document.querySelector('#move-count');

function renderMoves(filter = 'all') {
  const visibleMoves = filter === 'all' ? moves : moves.filter(move => move.category === filter);
  count.textContent = visibleMoves.length;
  emptyState.hidden = visibleMoves.length > 0;
  grid.innerHTML = visibleMoves.map((move, index) => `
    <article class="move-card" style="--card-color: ${move.color}; animation-delay: ${index * 35}ms" tabindex="0" role="button" aria-pressed="false" aria-label="${move.name}: ${move.description}" data-name="${move.name}">
      <div class="card-tag">${move.category.replace('-', ' ')}</div>
      <div class="move-icon" aria-hidden="true">${move.icon}</div>
      <h3 class="move-name">${move.name}</h3>
      <p class="move-description">${move.description}</p>
    </article>`).join('');

  grid.querySelectorAll('.move-card').forEach(card => {
    const choose = () => {
      grid.querySelectorAll('.move-card').forEach(other => other.classList.remove('is-picked'));
      grid.querySelectorAll('.move-card').forEach(other => other.setAttribute('aria-pressed', 'false'));
      card.classList.add('is-picked');
      card.setAttribute('aria-pressed', 'true');
    };
    card.addEventListener('click', choose);
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); choose(); }
    });
  });
}

document.querySelectorAll('.category').forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === 'surprise-button') return;
    document.querySelector('.category.is-active').classList.remove('is-active');
    button.classList.add('is-active');
    renderMoves(button.dataset.filter);
  });
});

document.querySelector('#surprise-button').addEventListener('click', () => {
  document.querySelector('.category.is-active').classList.remove('is-active');
  document.querySelector('[data-filter="all"]').classList.add('is-active');
  renderMoves();
  const cards = [...grid.querySelectorAll('.move-card')];
  const randomCard = cards[Math.floor(Math.random() * cards.length)];
  randomCard.click();
  randomCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

renderMoves();
