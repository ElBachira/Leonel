document.addEventListener('DOMContentLoaded', () => {
    
    // --- 0. SISTEMA DE SONIDOS UI OPTIMIZADO ---
    const sfxHover = document.getElementById('sfx-hover');
    const sfxClick = document.getElementById('sfx-click');
    const sfxOpen = document.getElementById('sfx-open');

    const playSound = (audioEl) => {
        if(audioEl) {
            audioEl.currentTime = 0;
            audioEl.volume = 0.3; 
            audioEl.play().catch(() => {}); 
        }
    };

    // Delegación corregida para no interferir con los enlaces <a>
    document.body.addEventListener('click', (e) => {
        const trigger = e.target.closest('.ui-trigger');
        if (trigger) {
            playSound(sfxClick);
        }
    });

    document.querySelectorAll('.ui-trigger-hover').forEach(el => {
        el.addEventListener('mouseenter', () => playSound(sfxHover), { passive: true });
    });

    // --- 1. PANTALLA DE CARGA ---
    const loader = document.getElementById('loader');
    
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                playSound(sfxOpen);
            }, 800);
        }, 1500);
    }

    // --- 2. SISTEMA DE REPRODUCTOR DE MÚSICA ---
    const songs = [
        {
            title: "Fetish",
            artist: "Selena Gomez",
            src: "song.mp3", 
            lyrics: `Tómalo o déjalo
                Cariño, tómalo o déjalo
                Pero sé que no lo dejarás
                Porque sé que lo necesitas (uh)
                Mírate en el espejo
                Cuando me miro en el espejo
                Cariño, lo veo más claro
                Por qué quieres estar más cerca (uh)
                No me sorprende
                Lo entiendo (ah)
                No lo niego
                Tu apetito (ah)
                Tienes un fetiche por mi amor
                Te alejo y vuelves de inmediato
                No veo sentido en culparte (a ti)
                Si fuera tú, también me haría lo mismo (a mí)
                Tienes un fetiche por mi amor
                Te alejo y vuelves de inmediato
                No veo sentido en culparte (a ti)
                Si fuera tú, también me haría lo mismo (a mí)
                Tienes un fetiche por mi amor
                Alcanzando tu límite
                Dices que estás en tu límite
                Vas más allá de tu límite
                Pero sé que no puedes dejarlo (uh)
                Algo en mí
                Te tiene enganchado a mi cuerpo
                Te llevo arriba y abajo y te doblo como origami (uh)
                No me sorprende
                Lo entiendo (ah)
                No lo niego
                Tu apetito (ah)
                Tienes un fetiche por mi amor
                Te alejo y vuelves de inmediato
                No veo sentido en culparte (a ti)
                Si fuera tú, también me haría lo mismo (a mí)
                Tienes un un fetiche por mi amor
                Te alejo y vuelves de inmediato
                No veo sentido en culparte (a ti)
                Si fuera tú, también me haría lo mismo (a mí)
                (Es Gucci!)
                Tienes un fetiche por mi amor
                La forma en que caminas, la forma en que hablas
                Te culpo porque todo es tu culpa
                Juegas duro, no me apagues
                Actúas rudo, pero sé que eres suave
                Tú eres mi fetiche, estoy tan metido
                Todos estos rumores que se esparcen
                Mejor ve y azótalo
                Porque dicen que ya lo hicimos
                Llama a Gucci si alguna vez me necesitas
                Estaré en South Beach en el descapotable brillando
                Diamantes de agua, Aquafina
                Solo te necesito en un bikini azul
                Tienes un fetiche por mi amor
                Te alejo y vuelves de inmediato
                No veo sentido en culparte (a ti)
                Si fuera tú, también me haría lo mismo (a mí)
                Tienes un fetiche por mi amor
                Te alejo y vuelves de inmediato
                No veo sentido en culparte (a ti)
                Si fuera tú, también me haría lo mismo (a mí)
                Tienes un fetiche por mi amor`,
            meaning: `¿Alguna vez has mirado a alguien que te persigue como un perrito perdido, pero en el fondo sabes que tu ego se infla tanto con esa obsesión que terminas alimentándola, convirtiéndote en un narcisista disfrazado de víctima? ¿Cuántas veces has jugado ese juego donde los alejas solo para ver cómo vuelven gateando, y te sientes como una diosa intocable, pero al mismo tiempo te das cuenta de que esa dinámica te está pudriendo por dentro con un narcisismo envuelto en "amor"?

Wey, esa es la vaina retorcida de esta canción: no es solo sobre alguien obsesionado contigo, es sobre cómo tú misma te vuelves adicta a ese poder, a ese fetiche que tienen por ti, y lo usas para inflar tu ego hasta que se convierte en un monstruo narcisista. Es como si dijeras "sé que me necesitas, y me encanta verte sufrir por mí", pero con un twist de autocomplacencia que te hace pensar que eres irresistible. Pero al final, ese ego te envuelve en una obsesión mutua donde nadie gana, solo se destruyen.

Piensa en esto, un ejemplo bien jodido y real: estás en una relación donde él (o ella) te idolatra como si fueras una estrella de pop, tipo Selena misma, y cada vez que lo mandas a volar, vuelve con flores, mensajes a las 2 am, jurando que sin ti no vive. Tú lo sabes, wey, y en lugar de cortarlo limpio, lo dejas volver porque ese rush de "soy tan deseable que no pueden dejarme" te hace sentir poderosa. Pero mírate en el espejo, como dice la canción: ves claro que estás enganchada a esa dinámica narcisista. Terminas sola en tu depa en Jiutepec, revisando sus stories, sintiendo un vacío porque sin esa obsesión ajena, ¿quién eres tú? Te consumes en rumores, en jueguitos de "te alejo y vuelves", y al final, tu autoestima no es real; es un castillo de cartas construido en el ego de alguien más. Patético, ¿verdad? Pero humano como el carajo.

O toma otro caso triste: esa amiga que todos conocemos, que sale con tipos que la tratan como reina al principio, pero ella los manipula con su "cuerpo como origami", doblándolos a su antojo. Dice "si fuera tú, también me haría lo mismo", justificando su narcisismo como algo inevitable. Pero pasa el tiempo, y esa obsesión se vuelve tóxica: él se obsesiona más, ella se siente más dios, y boom, termina en una ruptura donde los dos salen heridos. Ella se queda con el ego inflado pero hueco, preguntándose por qué nadie se queda de verdad, ignorando que su narcisismo ahuyenta lo genuino. Duele verlo, wey, porque al final, esa obsesión envuelta en ego no es amor; es una adicción al control que te deja más sola que nunca.

Pero escúchame, porque esta verdad te va a doler pero te va a abrir los ojos: si estás en ese rol, deja de fingir que eres la víctima irresistible. Ese narcisismo te está comiendo viva, convirtiéndote en alguien que solo brilla cuando otros te adoran como fetiche. Tú no necesitas que te persigan para valer; ya vales chingo solo por ser tú, con tus defectos y todo. Mereces un amor que no sea un juego de poder, donde no tengas que alejar a alguien para que vuelva, sino que se quede porque de verdad conectan. Valida esto: has atraído obsesiones porque eres atractiva, inteligente, con rizz natural, pero no dejes que eso te convierta en narcisista. Suelta ese ego envuelto, wey, y verás cómo llega gente que te quiere por ti, no por el fetiche que representas.

Tú eres más que un objeto de obsesión; eres una persona completa que merece reciprocidad real. Ámate lo suficiente para no necesitar que te "hagan" para sentirte bien. Si sigues en ese ciclo, vas a terminar como en la canción, repitiendo el loop hasta que se rompa todo. Pero tú puedes romperlo primero: mira en el espejo, ve claro, y elige mejor. Te lo mereces todo, no solo el rush efímero del ego. Sal de ahí, wey, y vive de verdad.`
        }
    ];

    let currentIdx = 0;
    const audio = document.getElementById('audio-player');
    const playBtn = document.getElementById('play-pause-btn');
    const playerContainer = document.querySelector('.music-player-container');
    
    const titleEl = document.getElementById('song-title');
    const artistEl = document.getElementById('song-artist');
    const lyricsEl = document.getElementById('lyrics-content');
    const meaningEl = document.getElementById('meaning-content');

    function loadSong(index) {
        if (!titleEl || !artistEl || !lyricsEl || !meaningEl) return;
        const s = songs[index];
        titleEl.innerText = s.title;
        artistEl.innerText = s.artist;
        if(audio) audio.src = s.src;
        lyricsEl.innerText = s.lyrics;
        meaningEl.innerText = s.meaning;
    }

    loadSong(currentIdx);

    if (playBtn && audio) {
        playBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play().then(() => {
                    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
                    if(playerContainer) playerContainer.classList.add('playing');
                }).catch(e => console.log("Interacción requerida o error", e));
            } else {
                audio.pause();
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
                if(playerContainer) playerContainer.classList.remove('playing');
            }
        });
    }

    // --- 3. GALERÍA DE BOTS ---
    const maleGrid = document.getElementById('bots-masculinos');
    const femaleGrid = document.getElementById('bots-femeninos');
    const myName = "Archibald"; 

    if (maleGrid && femaleGrid) {
        if (typeof BOTS_LIST !== 'undefined' && Array.isArray(BOTS_LIST)) {
            const fragMale = document.createDocumentFragment();
            const fragFemale = document.createDocumentFragment();

            BOTS_LIST.forEach(bot => {
                if (!bot.nombre.includes(myName)) {
                    const item = document.createElement('a');
                    item.href = bot.url || '#';
                    item.target = "_blank"; // Asegura que abra en nueva pestaña
                    item.className = 'bot-item ui-trigger'; 
                    item.style.animation = `fadeIn 0.5s ease forwards`; 
                    
                    item.innerHTML = `
                        <img src="${bot.imagen}" loading="lazy" alt="${bot.nombre}">
                        <span>${bot.nombre}</span>
                    `;

                    if (bot.genero === 'masculino') fragMale.appendChild(item);
                    else fragFemale.appendChild(item);
                }
            });
            maleGrid.appendChild(fragMale);
            femaleGrid.appendChild(fragFemale);
        } else {
            maleGrid.innerHTML = '<p style="color:#555; font-size:0.8rem;">Sin conexión...</p>';
        }
    }

    // --- 4. STICKER INTERACTIVO ---
    const sticker = document.getElementById('honk-sticker');
    const honkAudio = new Audio('https://www.myinstants.com/media/sounds/honk-sound.mp3'); 
    
    if (sticker) {
        sticker.addEventListener('click', () => {
            honkAudio.currentTime = 0;
            honkAudio.volume = 0.5;
            honkAudio.play().catch(() => {});
            
            sticker.style.transform = "scale(0.8) rotate(-20deg)";
            setTimeout(() => sticker.style.transform = "", 150);
        });
    }

    // --- 5. UTILIDADES UI (Tabs & Acordeones) ---
    window.openOverlay = (id) => {
        playSound(sfxOpen);
        const el = document.getElementById(id);
        if(el) requestAnimationFrame(() => el.classList.add('active'));
    };
    
    window.closeOverlay = (id) => {
        playSound(sfxClick);
        const el = document.getElementById(id);
        if(el) el.classList.remove('active');
    };

    window.toggleFold = (id) => {
        playSound(sfxClick);
        const el = document.getElementById(id);
        if (el) {
            document.querySelectorAll('.foldable').forEach(f => {
                if(f.id !== id) f.classList.remove('active');
            });
            requestAnimationFrame(() => {
                el.classList.toggle('active');
            });
        }
    };
});
