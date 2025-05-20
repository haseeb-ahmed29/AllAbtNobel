const winnersData = {
    physics: [
        {
            name: "Albert Einstein",
            image: "./images/Albert.jpg",
            description: "Albert Einstein was awarded the Nobel Prize in Physics in 1921 (presented in 1922) for his explanation of the photoelectric effect, which demonstrated that light interacts with matter as discrete packets of energy (quanta). This work was pivotal in the development of quantum mechanics. Einstein's broader contributions, including the theory of relativity and the famous equation E=mc², revolutionized modern physics and our understanding of space, time, and energy."
        },
        {
            name: "Niels Bohr",
            image: "./images/Niels Bohr.jpg",
            description: "Niels Bohr received the Nobel Prize in Physics in 1922 for his groundbreaking work on atomic structure and quantum theory. His Bohr model of the atom, which introduced quantized energy levels for electrons, laid the foundation for modern atomic physics. Bohr's work on the interaction of light with atoms, including the Bohr effect in biochemistry, significantly advanced our understanding of atomic and molecular behavior."
        },
        {
            name: "Max Planck",
            image: "./images/Max planck.jpg",
            description: "Max Planck won the Nobel Prize in Physics in 1918 for his discovery of energy quanta, which introduced the concept that energy is emitted or absorbed in discrete packets. His work on black-body radiation and the Planck constant formed the cornerstone of quantum mechanics, fundamentally altering our understanding of physical processes at the atomic scale and influencing countless scientific advancements."
        },
        {
            name: "Richard P. Feynman",
            image: "./images/richard.png",
            description: "Richard P. Feynman was awarded the Nobel Prize in Physics in 1965 for his contributions to quantum electrodynamics (QED), which describes how light and matter interact. His development of Feynman diagrams and the Feynman–Leibniz formula simplified complex calculations in particle physics. Feynman's engaging teaching and popular science books, like 'Surely You're Joking, Mr. Feynman!', made him a beloved figure in science."
        },
        {
            name: "Marie Curie",
            image: "./images/marie curie.webp",
            description: "Marie Curie won the Nobel Prize in Physics in 1903, shared with her husband Pierre Curie and Henri Becquerel, for their pioneering research on radioactivity. As the first woman to receive a Nobel Prize, her work on spontaneous radiation laid the groundwork for modern nuclear physics and medical applications, including cancer treatments. Curie's dedication to science under challenging conditions remains inspirational."
        },
        {
            name: "Peter Higgs",
            image: "./images/Peter-Higgs.webp",
            description: "Peter Higgs received the Nobel Prize in Physics in 2013, shared with François Englert, for the theoretical prediction of the Higgs boson, a particle that explains the origin of mass in the universe. Their work on the Higgs mechanism, proposed in the 1960s, was confirmed by the particle's discovery at CERN in 2012, completing a critical piece of the Standard Model of particle physics."
        }
    ],
    chemistry: [
        {
            name: "Marie Curie",
            image: "./images/marie curie.webp",
            description: "Marie Curie was awarded the Nobel Prize in Chemistry in 1911 for her discovery of the elements radium and polonium, and her extensive research on radioactivity. Her meticulous isolation of these elements from pitchblende and her studies on their chemical properties advanced the field of chemistry and opened new avenues for medical research, particularly in radiology."
        },
        {
            name: "Ahmed Zewail",
            image: "./images/Ahmed Zewail.jpg",
            description: "Ahmed Zewail won the Nobel Prize in Chemistry in 1999 for his pioneering work in femtochemistry, which uses ultrafast laser techniques to observe chemical reactions on the timescale of femtoseconds. His ability to capture the motion of atoms during reactions provided unprecedented insights into molecular dynamics, revolutionizing the study of chemical processes."
        },
        {
            name: "Dorothy Hodgkin",
            image: "./images/Dorothy Hodgkin.jpg",
            description: "Dorothy Hodgkin received the Nobel Prize in Chemistry in 1964 for her development of X-ray crystallography techniques to determine the structures of complex biochemical molecules, including penicillin and vitamin B12. Her work enabled significant advances in biochemistry and medicine, and as one of the few women Nobel laureates in science, she inspired generations of researchers."
        },
        {
            name: "Robert H. Grubbs",
            image: "./images/Robert Grubbs.webp",
            description: "Robert H. Grubbs won the Nobel Prize in Chemistry in 2005, shared with Yves Chauvin and Richard R. Schrock, for developing the metathesis method in organic synthesis. This catalytic process allows for the efficient rearrangement of carbon-carbon bonds, transforming the synthesis of pharmaceuticals, plastics, and other materials with wide industrial applications."
        },
        {
            name: "Benjamin List",
            image: "./images/Benjamin List.jpg",
            description: "Benjamin List was awarded the Nobel Prize in Chemistry in 2021, shared with David W.C. MacMillan, for developing asymmetric organocatalysis. This innovative approach uses small organic molecules as catalysts to produce chiral molecules with high precision, significantly impacting pharmaceutical development and green chemistry by offering efficient, environmentally friendly synthesis methods."
        },
        {
            name: "Emmanuelle Charpentier & Jennifer Doudna",
            image: "./images/Emmanuelle Charpentier & Jennifer Doudna.png",
            description: "Emmanuelle Charpentier and Jennifer Doudna won the Nobel Prize in Chemistry in 2020 for their development of CRISPR-Cas9, a precise gene-editing technology. By harnessing a bacterial defense mechanism, they created a tool to edit DNA with unprecedented accuracy, revolutionizing genetic research, agriculture, and medicine, with potential to treat genetic disorders."
        }
    ],
    medicine: [
        {
            name: "Alexander Fleming",
            image: "./images/Alexander Fleming.webp",
            description: "Alexander Fleming was awarded the Nobel Prize in Physiology or Medicine in 1945, shared with Ernst Chain and Howard Florey, for the discovery of penicillin, the first antibiotic. His observation of mold inhibiting bacterial growth transformed medicine, enabling the treatment of bacterial infections and saving countless lives during and after World War II."
        },
        {
            name: "James Watson & Francis Crick",
            image: "./images/James Watson & Francis Crick.jpg",
            description: "James Watson and Francis Crick, along with Maurice Wilkins, received the Nobel Prize in Physiology or Medicine in 1962 for discovering the double helix structure of DNA. Their model, based on X-ray diffraction data, revealed how genetic information is stored and replicated, laying the foundation for molecular biology and genomics."
        },
        {
            name: "Tu Youyou",
            image: "./images/Tu Youyou.jpg",
            description: "Tu Youyou won the Nobel Prize in Physiology or Medicine in 2015 for her discovery of artemisinin, a highly effective antimalarial drug. Inspired by traditional Chinese medicine, her work led to a treatment that has saved millions of lives, particularly in developing countries, demonstrating the value of integrating traditional and modern scientific approaches."
        },
        {
            name: "Harvey J. Alter, Michael Houghton & Charles M. Rice",
            image: "./images/Harvey J. Alter, Michael Houghton & Charles M. Rice.jpeg",
            description: "Harvey J. Alter, Michael Houghton, and Charles M. Rice were jointly awarded the Nobel Prize in Physiology or Medicine in 2020 for their discovery of the Hepatitis C virus. Their work identified the cause of chronic hepatitis, enabling diagnostic tests and treatments that have prevented millions of deaths from liver disease and cancer."
        },
        {
            name: "Svante Pääbo",
            image: "./images/Svante Pääbo.jpg",
            description: "Svante Pääbo received the Nobel Prize in Physiology or Medicine in 2022 for his pioneering research on the genomes of extinct hominins, including Neanderthals and Denisovans. His work revealed genetic contributions to modern humans and advanced our understanding of human evolution, bridging anthropology and molecular biology."
        },
        {
            name: "Elizabeth Blackburn",
            image: "./images/elizabeth_blackburn.jpg",
            description: "Elizabeth Blackburn was awarded the Nobel Prize in Physiology or Medicine in 2009 (shared with Carol Greider and Jack Szostak) for the discovery of how chromosomes are protected by telomeres and the enzyme telomerase. Their work revealed fundamental mechanisms in cellular aging and has profound implications for cancer research and understanding age-related diseases."
        }
    ],
    literature: [
        {
            name: "Rabindranath Tagore",
            image: "./images/Rabindranath Tagore.jpg",
            description: "Rabindranath Tagore won the Nobel Prize in Literature in 1913, the first non-European laureate, for his collection of poems, Gitanjali, celebrated for its lyrical beauty and spiritual depth. A prolific poet, novelist, and playwright, Tagore's works reshaped Bengali literature and influenced global literary thought, promoting universal human values."
        },
        {
            name: "Gabriel García Márquez",
            image: "./images/Gabriel García Márquez.jpg",
            description: "Gabriel García Márquez was awarded the Nobel Prize in Literature in 1982 for his novels and short stories, which blend magical realism with historical and social themes. Works like *One Hundred Years of Solitude* created a vivid, imaginative world, influencing Latin American literature and earning him global acclaim."
        },
        {
            name: "Ernest Hemingway",
            image: "./images/Ernest Hemingway.jpeg",
            description: "Ernest Hemingway received the Nobel Prize in Literature in 1954 for his concise, powerful narrative style, exemplified in *The Old Man and the Sea*. His works, including *A Farewell to Arms* and *For Whom the Bell Tolls*, explore themes of courage, loss, and human struggle, shaping modern American literature."
        },
        {
            name: "Toni Morrison",
            image: "./images/Toni Morrison.jpeg",
            description: "Toni Morrison won the Nobel Prize in Literature in 1993 for her novels that blend poetic prose with deep explorations of African American identity and history. Works like *Beloved* and *Song of Solomon* offer profound insights into race, gender, and humanity, cementing her legacy as a literary giant."
        },
        {
            name: "Kazuo Ishiguro",
            image: "./images/Kazuo Ishiguro.jpg",
            description: "Kazuo Ishiguro received the Nobel Prize in Literature in 2017 for his emotionally resonant novels, such as *The Remains of the Day* and *Never Let Me Go*. His subtle storytelling explores memory, identity, and the human condition, earning him recognition as one of the most distinctive voices in contemporary literature."
        },
        {
            name: "Bob Dylan",
            image: "./images/Bob Dylan.jpg",
            description: "Bob Dylan was awarded the Nobel Prize in Literature in 2016 for creating new poetic expressions within the American song tradition. His lyrics, in songs like *Blowin' in the Wind* and *Like a Rolling Stone*, combine social commentary with poetic artistry, influencing music and literature across generations."
        }
    ],
    peace: [
        {
            name: "Mother Teresa",
            image: "./images/Mother Teresa.jpg",
            description: "Mother Teresa received the Nobel Peace Prize in 1979 for her humanitarian work with the Missionaries of Charity in Calcutta, India. Her selfless dedication to serving the poorest of the poor, including orphans and the sick, inspired global efforts to alleviate suffering and promote dignity for all."
        },
        {
            name: "Malala Yousafzai",
            image: "./images/malala.jpg",
            description: "Malala Yousafzai was awarded the Nobel Peace Prize in 2014, at age 17, for her courageous advocacy for girls' education in Pakistan, despite surviving an assassination attempt by the Taliban. Her global activism through the Malala Fund continues to champion education rights, making her a symbol of resilience and hope."
        },
        {
            name: "Martin Luther King Jr.",
            image: "./images/Martin Luther King Jr.jpg",
            description: "Martin Luther King Jr. won the Nobel Peace Prize in 1964 for his nonviolent leadership in the American Civil Rights Movement. His iconic *I Have a Dream* speech and tireless fight against racial segregation and inequality inspired global movements for justice and equality, leaving a lasting legacy."
        },
        {
            name: "Nelson Mandela",
            image: "./images/Nelson Mandela.webp",
            description: "Nelson Mandela received the Nobel Peace Prize in 1993, shared with F.W. de Klerk, for their efforts to dismantle apartheid in South Africa and establish a democratic, multiracial government. Mandela's 27 years in prison and subsequent leadership as South Africa's first Black president exemplified reconciliation and unity."
        },
        {
            name: "Barack Obama",
            image: "./images/Barack Obama.jpg",
            description: "Barack Obama was awarded the Nobel Peace Prize in 2009 for his efforts to strengthen international diplomacy and promote global cooperation. As U.S. President, his initiatives on nuclear disarmament, climate change, and multilateral engagement aimed to foster peace and address global challenges, sparking both praise and debate."
        },
        {
            name: "International Campaign to Ban Landmines (ICBL)",
            image: "./images/International Campaign to Ban Landmines (ICBL).webp",
            description: "The International Campaign to Ban Landmines (ICBL) received the Nobel Peace Prize in 1997 for its global advocacy to ban anti-personnel landmines. Led by Jody Williams, the ICBL's efforts led to the Ottawa Treaty, signed by over 160 countries, saving countless lives by reducing the threat of landmines."
        }
    ]
};

// 1. MOBILE MENU TOGGLE
document.addEventListener('DOMContentLoaded', function() {
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const overlay = document.querySelector('.overlay');

menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
});

overlay.addEventListener('click', function() {
    menuToggle.classList.remove('active');
    nav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
});
});

// Dropdown functionality for mobile
const dropdownToggle = document.querySelector('.dropdown > a');
if (dropdownToggle) {
dropdownToggle.addEventListener('click', function(e) {
if (window.innerWidth <= 768) { // Only for mobile
e.preventDefault();
const dropdownMenu = this.nextElementSibling;
dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}
});
}

// 3. GENERATE WINNER CARDS
function generateCards(containerId, winners) {
const container = document.getElementById(containerId);
if (!container) return;

winners.forEach((winner) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${winner.image}" alt="${winner.name}" loading="lazy">
        <h2>${winner.name}</h2>
        <p>${winner.description.slice(0, 100)}...</p>
        <button class="show-more-btn">Show More</button>
    `;
    
    card.querySelector('.show-more-btn').addEventListener('click', () => showModal(winner));
    container.appendChild(card);
});
}

// 4. MODAL FUNCTIONALITY
function showModal(winner) {
const modal = document.getElementById('winnerModal');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalDescription = document.getElementById('modalDescription');
const downloadBtn = document.getElementById('downloadPdfBtn');
const closeBtn = document.querySelector('.close-btn');

modalImage.src = winner.image || '';
modalImage.alt = winner.name || 'No image available';
modalName.textContent = winner.name || 'Unknown Winner';
modalDescription.textContent = winner.description || 'No description available.';

modal.classList.add('show');
document.body.style.overflow = 'hidden';

// Mobile scroll fix
if (window.innerWidth <= 768) modal.scrollTop = 0;

// PDF Download
downloadBtn.onclick = () => generatePDF(winner);

// Close modal
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.style.overflow = '';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
});
}

// 5. PDF GENERATION
function generatePDF(winner) {
const { jsPDF } = window.jspdf;
const doc = new jsPDF();
const pageWidth = 210; // A4 width in mm
const margin = 20;
const maxWidth = pageWidth - 2 * margin;
const lineHeight = 7;

// Title
doc.setFont("times", "bold");
doc.setFontSize(20);
doc.text(winner.name || 'Unknown Winner', margin, 20);

// Image
const img = new Image();
img.crossOrigin = "Anonymous";
img.src = winner.image;

img.onload = function() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    const imgData = canvas.toDataURL('image/jpeg');
    const imgProps = doc.getImageProperties(imgData);
    const pdfWidth = maxWidth;
    const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;
    
    doc.addImage(imgData, 'JPEG', margin, 30, pdfWidth, imgHeight);
    
    // Description
    doc.setFont("times", "normal");
    doc.setFontSize(12);
    const splitText = doc.splitTextToSize(winner.description || 'No description available.', maxWidth);
    doc.text(splitText, margin, 30 + imgHeight + 10);
    
    doc.save(`${winner.name.replace(/[^a-zA-Z0-9]/g, '_')}_Nobel_Prize.pdf`);
};

img.onerror = function() {
    // Fallback if image fails to load
    doc.setFont("times", "normal");
    doc.setFontSize(12);
    const splitText = doc.splitTextToSize(winner.description || 'No description available.', maxWidth);
    doc.text(splitText, margin, 30);
    doc.save(`${winner.name.replace(/[^a-zA-Z0-9]/g, '_')}_Nobel_Prize.pdf`);
};
}

// 6. INITIALIZE PAGE
document.addEventListener('DOMContentLoaded', function() {
// Generate all cards
generateCards("physics-cards-container", winnersData.physics);
generateCards("chemistry-cards-container", winnersData.chemistry);
generateCards("medicine-cards-container", winnersData.medicine);
generateCards("literature-cards-container", winnersData.literature);
generateCards("peace-cards-container", winnersData.peace);

// Close menu when clicking nav links (except dropdown parent)
document.querySelectorAll('nav ul li:not(.dropdown) > a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.menu-toggle').classList.remove('active');
        document.querySelector('nav').classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
        document.body.style.overflow = '';
    });
});
});