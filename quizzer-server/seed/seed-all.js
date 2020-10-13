const mongoose = require("mongoose");
require("../models/questions");
require("../models/rooms");

const dbName = "quizzer";

const db = mongoose.connection;
const Questions = mongoose.model("Questions");
const Rooms = mongoose.model("Rooms");

mongoose
  .connect(`mongodb://localhost:27017/${dbName}`, { useNewUrlParser: true })
  .then(() => {
    return seedQuestions();
  })
  .then(() => {
    return seedRooms();
  })
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    db.close();
  });

async function seedQuestions() {
  await Questions.deleteMany();

  await Questions.insertMany([
    {
      "question": "Who wrote Twilight series of novels?",
      "answer": "Stephenie Meyer",
      "category": "Art and Literature",
      "_id": 0
    },
    {
      "question": "Who wrote the poem 'The Owl and the Pussycat'?",
      "answer": "Edward Lear",
      "category": "Art and Literature",
      "_id": 1
    },
    {
      "question": "In the Adrian Mole Diaries, what is the surname of his girlfriend?",
      "answer": "Braiwaithe",
      "category": "Art and Literature",
      "_id": 2
    },
    {
      "question": "Who wrote the novel Revolutionary Road, which was made into a successful feature film?",
      "answer": "Richard Yates",
      "category": "Art and Literature",
      "_id": 3
    },
    {
      "question": "What word does the bird constantly repeat in Edgar Allan Poe`s classic poem The Raven?",
      "answer": "Nevermore",
      "category": "Art and Literature",
      "_id": 4
    },
    {
      "question": "In Gullivers Travels, what is the name of the flying island?",
      "answer": "Laputa",
      "category": "Art and Literature",
      "_id": 5
    },
    {
      "question": "Who was the author of Whisky Galore?",
      "answer": "Compton Mackenzie",
      "category": "Art and Literature",
      "_id": 6
    },
    {
      "question": "According to Shakespeare, whose horse was called White Surrey?",
      "answer": "Richard III's",
      "category": "Art and Literature",
      "_id": 7
    },
    {
      "question": "How old is Juliet when she dies in Shakespeare's Romeo and Juliett?",
      "answer": "13 years of age (nearly 14)",
      "category": "Art and Literature",
      "_id": 8
    },
    {
      "question": "Who has written a series of letters entitled `Dear Fatty` in the form of an autobiography?",
      "answer": "Dawn French",
      "category": "Art and Literature",
      "_id": 9
    },
    {
      "question": "What is the name of the famous statue by Edvard Eriksen, unveiled on the 23rd August, 1913?",
      "answer": "The Little Merma_id (in Copenhagen)",
      "category": "Art and Literature",
      "_id": 10
    },
    {
      "question": "Thomas Hardy`s heart is buried in his native Dorset, but where in London is his body buried?",
      "answer": "Poet`s Corner",
      "category": "Art and Literature",
      "_id": 11
    },
    {
      "question": "Which author wrote The Bourne _identity?",
      "answer": "Robert Ludlum",
      "category": "Art and Literature",
      "_id": 12
    },
    {
      "question": "In the cartoon books, what is the name of the dru_id that prov_ides potions for Asterix?",
      "answer": "Getafix",
      "category": "Art and Literature",
      "_id": 13
    },
    {
      "question": "In literature, who owns a cat called Crookshanks?",
      "answer": "Hermione Granger (from the Harry Potter stories)",
      "category": "Art and Literature",
      "_id": 14
    },
    {
      "question": "In George Orwell`s Animal Farm, what type of animals were Clover, Mollie and Boxer?",
      "answer": "Horses",
      "category": "Art and Literature",
      "_id": 15
    },
    {
      "question": "In Peter Pan, what is the name of Captain Hook`s ship?",
      "answer": "The Jolly Roger",
      "category": "Art and Literature",
      "_id": 16
    },
    {
      "question": "Who wrote the Waverley novels?",
      "answer": "Sir Walter Scott",
      "category": "Art and Literature",
      "_id": 17
    },
    {
      "question": "What famous work of Niccolo Machiavelli redefined the beliefs of cynicism in the Italian Renaissance?",
      "answer": "The Prince",
      "category": "Art and Literature",
      "_id": 18
    },
    {
      "question": "The film Clueless is a modern take on which literary classic by Jane Austin?",
      "answer": "Emma",
      "category": "Art and Literature",
      "_id": 19
    },
    {
      "question": "In the Harry Potter novels, who is the author of The Dream Oracle?",
      "answer": "Inigo Imago",
      "category": "Art and Literature",
      "_id": 20
    },
    {
      "question": "What d_id Hugh Heffner originally plan to call his Playboy magazine?",
      "answer": "Stag Party",
      "category": "Art and Literature",
      "_id": 21
    },
    {
      "question": "Who wrote the book The Hound Of The Baskervilles?",
      "answer": "Sir Arthur Conan Doyle",
      "category": "Art and Literature",
      "_id": 22
    },
    {
      "question": "In which book d_id Sherlock Holmes first appear?",
      "answer": "Study In Scarlet",
      "category": "Art and Literature",
      "_id": 23
    },
    {
      "question": "Who wrote the children`s book The Gruffalo?",
      "answer": "Julia Donaldson",
      "category": "Art and Literature",
      "_id": 24
    },
    {
      "question": "In which art gallery is the Mona Lisa kept?",
      "answer": "The Louvre",
      "category": "Art and Literature",
      "_id": 25
    },
    {
      "question": "Written by Alfred, Lord Tennyson, which poem starts with the line `On either s_ide of the river lie`?",
      "answer": "The Lady of Shalott",
      "category": "Art and Literature",
      "_id": 26
    },
    {
      "question": "When viewed at a certain angle, the 1553 painting: `The Ambassadors` reveals which mysterious object?",
      "answer": "A skull",
      "category": "Art and Literature",
      "_id": 27
    },
    {
      "question": "Written by Edgar Allen Poe and published in 1845, what poem repeats the famous line `nevermore`?",
      "answer": "The Raven",
      "category": "Art and Literature",
      "_id": 28
    },
    {
      "question": "According to Douglas Adams what number is the meaning of life?",
      "answer": "42",
      "category": "Art and Literature",
      "_id": 29
    },
    {
      "question": "Who wrote the novel Sex And The City?",
      "answer": "Candace Bushnell",
      "category": "Art and Literature",
      "_id": 30
    },
    {
      "question": "Who painted the famous painting The Scream?",
      "answer": "Edward Munch",
      "category": "Art and Literature",
      "_id": 31
    },
    {
      "question": "What was the name of the first full novel written by Charles Dickens?",
      "answer": "The Pickwick Papers",
      "category": "Art and Literature",
      "_id": 32
    },
    {
      "question": "What was Frankenstein`s first name?",
      "answer": "Viktor",
      "category": "Art and Literature",
      "_id": 33
    },
    {
      "question": "What is the third book of the Bible?",
      "answer": "Leviticus",
      "category": "Art and Literature",
      "_id": 34
    },
    {
      "question": "Which playwright wrote Ghosts and A Doll`s House?",
      "answer": "Henrik Ibsen",
      "category": "Art and Literature",
      "_id": 35
    },
    {
      "question": "Which Arthur Miller play featured the character Willy Loman, and was made into a 1951 film starring Frederick March?",
      "answer": "Death of a Salesman",
      "category": "Art and Literature",
      "_id": 36
    },
    {
      "question": "Which sci-fi author wrote `The Foundation Trilogy`?",
      "answer": "Isaac Asimov",
      "category": "Art and Literature",
      "_id": 37
    },
    {
      "question": "The phrase a `green-eyed monster` originated in which Shakespeare play?",
      "answer": "Othello",
      "category": "Art and Literature",
      "_id": 38
    },
    {
      "question": "Which book, written by Alice Walker, was made into a film starring Whoopi Goldberg?",
      "answer": "The Colour Purple",
      "category": "Art and Literature",
      "_id": 39
    },
    {
      "question": "What is the name for the dot on the letter i?",
      "answer": "A tittle",
      "category": "Art and Literature",
      "_id": 40
    },
    {
      "question": "In which Shakespeare play would you find the character Ophelia?",
      "answer": "Hamlet",
      "category": "Art and Literature",
      "_id": 41
    },
    {
      "question": "In which novel would you find Jo, Beth, Meg and Amy?",
      "answer": "Little Women",
      "category": "Art and Literature",
      "_id": 42
    },
    {
      "question": "Who played Mr Darcy in the 1995 BBC adaptation of the Pr_ide and Prejudice?",
      "answer": "Colin Firth",
      "category": "Art and Literature",
      "_id": 43
    },
    {
      "question": "Who is the hero in the best selling novel The Da Vinci Code?",
      "answer": "Professor Robert Langdon",
      "category": "Art and Literature",
      "_id": 44
    },
    {
      "question": "What is A.A. Milne most famous for?",
      "answer": "Being the creator/author of Winnie the Pooh.",
      "category": "Art and Literature",
      "_id": 45
    },
    {
      "question": "What is the last book in the Chronicles of Narnia by C.S. Lewis?",
      "answer": "The Last Battle",
      "category": "Art and Literature",
      "_id": 46
    },
    {
      "question": "Which author created Elinor Dashwood, Emma Woodhouse and Catherine Morland?",
      "answer": "Jane Austen",
      "category": "Art and Literature",
      "_id": 47
    },
    {
      "question": "What do the initials J and K stand for in J.K. Rowling?",
      "answer": "Joanne Kathleen",
      "category": "Art and Literature",
      "_id": 48
    },
    {
      "question": "Who wrote War and Peace?",
      "answer": "Leo Tolstoy",
      "category": "Art and Literature",
      "_id": 49
    },
    {
      "question": "Who wrote the S.A.S. book `Who Dares Wins`?",
      "answer": "Tony Geraghty",
      "category": "Art and Literature",
      "_id": 50
    },
    {
      "question": "Who wrote `The Canterbury Tales`?",
      "answer": "Geoffrey Chaucer",
      "category": "Art and Literature",
      "_id": 51
    },
    {
      "question": "In Charles Dickens `A Tale of Two Cities`, what were the two cities?",
      "answer": "London and Paris",
      "category": "Art and Literature",
      "_id": 52
    },
    {
      "question": "According to Bram Stoker`s original novel, by which seas_ide town d_id Count Dracula enter England?",
      "answer": "Whitby",
      "category": "Art and Literature",
      "_id": 53
    },
    {
      "question": "Who was the author of the book `The Constant Gardener`?",
      "answer": "John Le Carre",
      "category": "Art and Literature",
      "_id": 54
    },
    {
      "question": "Who is the author of the `Harry Potter` books?",
      "answer": "J K Rowling",
      "category": "Art and Literature",
      "_id": 55
    },
    {
      "question": "Who wrote the poem `The Owl and The Pussycat`?",
      "answer": "Edward Lear",
      "category": "Art and Literature",
      "_id": 56
    },
    {
      "question": "Created in the 1930s and the subject of a 1975 film, which pulp hero was Lester Dent best known for creating?",
      "answer": "Doc Savage",
      "category": "Art and Literature",
      "_id": 57
    },
    {
      "question": "Which author created the character Harry Palmer, who was played on film by Michael Caine?",
      "answer": "Len Deighton",
      "category": "Art and Literature",
      "_id": 58
    },
    {
      "question": "Who wrote Moby Dick?",
      "answer": "Herman Melville",
      "category": "Art and Literature",
      "_id": 59
    },
    {
      "question": "if a picture is painted monochromatically how is it painted?",
      "answer": "In black and white",
      "category": "Art and Literature",
      "_id": 60
    },
    {
      "question": "What was the name of the marooned mariner on `Treasure Island`?",
      "answer": "Ben Gunn",
      "category": "Art and Literature",
      "_id": 61
    },
    {
      "question": "Who was the only child vampire in Anne Rice`s novels?",
      "answer": "Claudia",
      "category": "Art and Literature",
      "_id": 62
    },
    {
      "question": "Which artist painted the famous `Sunflowers`?",
      "answer": "Vincent Van Gogh",
      "category": "Art and Literature",
      "_id": 63
    },
    {
      "question": "For which book is Richard Adams best known?",
      "answer": "`Watership Down`",
      "category": "Art and Literature",
      "_id": 64
    },
    {
      "question": "What novel has the subtitle `The Modern Prometheus`?",
      "answer": "Mary Shelley`s Frankenstein",
      "category": "Art and Literature",
      "_id": 65
    },
    {
      "question": "Which famous writer, who used the line `God for Harry, England and St. George!` in one of his works, was sa_id to have been born and died on St George`s Day?",
      "answer": "William Shakespeare",
      "category": "Art and Literature",
      "_id": 66
    },
    {
      "question": "Nutwood Cottage is the home of which children`s storybook character?",
      "answer": "Rupert Bear",
      "category": "Art and Literature",
      "_id": 67
    },
    {
      "question": "In which famous novel would you find Ralph, Simon and Piggy?",
      "answer": "Lord of the Flies",
      "category": "Art and Literature",
      "_id": 68
    },
    {
      "question": "Which two colours are Dennis the Menace`s jumper?",
      "answer": "Red and Black",
      "category": "Art and Literature",
      "_id": 69
    },
    {
      "question": "What was the pen name of author Charles Ludwig Dodgson?",
      "answer": "Lewis Carroll",
      "category": "Art and Literature",
      "_id": 70
    },
    {
      "question": "Who wrote `Gullivers Travels`?",
      "answer": "Jonathan Swift",
      "category": "Art and Literature",
      "_id": 71
    },
    {
      "question": "Who painted The Laughing Cavalier?",
      "answer": "Frans Hals",
      "category": "Art and Literature",
      "_id": 72
    },
    {
      "question": "How much d_id the Owl and the Pussy Cat pay for their wedding ring?",
      "answer": "One shilling",
      "category": "Art and Literature",
      "_id": 73
    },
    {
      "question": "Who captained Jules Verne`s submarine `Nautilus`?",
      "answer": "Captain Nemo",
      "category": "Art and Literature",
      "_id": 74
    },
    {
      "question": "Who in the Beano comic was `your Redskin chum`?",
      "answer": "Little Plum",
      "category": "Art and Literature",
      "_id": 75
    },
    {
      "question": "What is the name of the Orang-utan King in the 1967 film `The Jungle Book`?",
      "answer": "King Louis",
      "category": "Art and Literature",
      "_id": 76
    },
    {
      "question": "With whom was Adrian Mole madly in love?",
      "answer": "Pandora",
      "category": "Art and Literature",
      "_id": 77
    },
    {
      "question": "In which country was Hamlet a prince?",
      "answer": "Denmark",
      "category": "Art and Literature",
      "_id": 78
    },
    {
      "question": "What was the name of the first Harry Potter book?",
      "answer": "Harry Potter and the Philosopher`s Stone",
      "category": "Art and Literature",
      "_id": 79
    },
    {
      "question": "What train would you find on platform 9 and three quarters at Kings Cross?",
      "answer": "The Hogwarts Express",
      "category": "Art and Literature",
      "_id": 80
    },
    {
      "question": "Which character from a famous poem brought a curse on his crew after killing an albatross?",
      "answer": "The Ancient Mariner",
      "category": "Art and Literature",
      "_id": 81
    },
    {
      "question": "Who painted the `Laughing Cavalier`?",
      "answer": "Frans Hals",
      "category": "Art and Literature",
      "_id": 82
    },
    {
      "question": "What do the initials JRR stand for in JRR Tolkien`s name?",
      "answer": "John Ronald Ruel",
      "category": "Art and Literature",
      "_id": 83
    },
    {
      "question": "Which author created the character of Fantastic Mr Fox?",
      "answer": "Roald Dahl",
      "category": "Art and Literature",
      "_id": 84
    },
    {
      "question": "In Literature, how is the character of Oliver Mellors better known?",
      "answer": "Lady Chatterly`s Lover",
      "category": "Art and Literature",
      "_id": 85
    },
    {
      "question": "What are elephants called in the `Winnie The Pooh` books?",
      "answer": "Heffalumps",
      "category": "Art and Literature",
      "_id": 86
    },
    {
      "question": "In which English town was William Shakespeare born?",
      "answer": "Stratford-Upon-Avon",
      "category": "Art and Literature",
      "_id": 87
    },
    {
      "question": "Which artist had Blue and Rose periods?",
      "answer": "Pablo Picasso",
      "category": "Art and Literature",
      "_id": 88
    },
    {
      "question": "What was the first name of the fictional detective Miss Marple?",
      "answer": "Jane",
      "category": "Art and Literature",
      "_id": 89
    },
    {
      "question": "In which Dickens novel would you find a convict called Magwitch?",
      "answer": "Great Expectations",
      "category": "Art and Literature",
      "_id": 90
    },
    {
      "question": "The author of `Dracula`, Bram Stoker`s first name is short for what?",
      "answer": "Abraham",
      "category": "Art and Literature",
      "_id": 91
    },
    {
      "question": "In what city is the Uffizi Gallery?",
      "answer": "Florence",
      "category": "Art and Literature",
      "_id": 92
    },
    {
      "question": "Who won the Turner Prize in 2000?",
      "answer": "Wolfgang Tillmans",
      "category": "Art and Literature",
      "_id": 93
    },
    {
      "question": "In what year d_id Van Gough kill himself? 1830, 1860 or 1890?",
      "answer": "1890",
      "category": "Art and Literature",
      "_id": 94
    },
    {
      "question": "Who painted `The Umbrellas`?",
      "answer": "Renoir",
      "category": "Art and Literature",
      "_id": 95
    },
    {
      "question": "Which philosopher wrote the book `Beyond Good and Evil`?",
      "answer": "Friedrich Nietzsche",
      "category": "Art and Literature",
      "_id": 96
    },
    {
      "question": "The works of Mrs Darrell Waters have been translated into 128 languages, but by which name is she better known?",
      "answer": "En_id Blyton",
      "category": "Art and Literature",
      "_id": 97
    },
    {
      "question": "In the wild west, how was Henry McCarty better known?",
      "answer": "Billy The K_id",
      "category": "General Knowledge",
      "_id": 98
    },
    {
      "question": "What famous sauce is manufactured by McIlhenny & Co?",
      "answer": "Tabasco",
      "category": "General Knowledge",
      "_id": 99
    },
    {
      "question": "What is the busiest single-runway airport in the world?",
      "answer": "London Gatwick",
      "category": "General Knowledge",
      "_id": 100
    },
    {
      "question": "On what day of the year is St Georges day held?",
      "answer": "23rd April",
      "category": "General Knowledge",
      "_id": 101
    },
    {
      "question": "Gala, Jonagold and Pink Lady are varieties of which fruit?",
      "answer": "Apple",
      "category": "General Knowledge",
      "_id": 102
    },
    {
      "question": "If you were puting numbers on new changing room lockers to be numbered from 1 to 100, how many times would you use the number 9?",
      "answer": "20",
      "category": "General Knowledge",
      "_id": 103
    },
    {
      "question": "What is sake made from?",
      "answer": "Rice",
      "category": "General Knowledge",
      "_id": 104
    },
    {
      "question": "Affenpinscher, Keeshond and Leonberger are all types of what?",
      "answer": "Dog",
      "category": "General Knowledge",
      "_id": 105
    },
    {
      "question": "What is the only anagram of the word `english`?",
      "answer": "Shingle",
      "category": "General Knowledge",
      "_id": 106
    },
    {
      "question": "In the board game Risk, what colour is Europe?",
      "answer": "Blue",
      "category": "General Knowledge",
      "_id": 107
    },
    {
      "question": "Anthony Stark is the alter-ego of which super-hero?",
      "answer": "Iron-Man",
      "category": "General Knowledge",
      "_id": 108
    },
    {
      "question": "On which Hebr_idian island d_id Prince Charles crash a plane in 1994?",
      "answer": "Islay",
      "category": "General Knowledge",
      "_id": 109
    },
    {
      "question": "What is sciophobia the fear of?",
      "answer": "shadows",
      "category": "General Knowledge",
      "_id": 110
    },
    {
      "question": "In which county was Isaac Newton born?",
      "answer": "Lincolnshire",
      "category": "General Knowledge",
      "_id": 111
    },
    {
      "question": "What was Barack Obama`s father`s first name?",
      "answer": "Barack",
      "category": "General Knowledge",
      "_id": 112
    },
    {
      "question": "In what American state was Barack Obama born?",
      "answer": "Hawaii",
      "category": "General Knowledge",
      "_id": 113
    },
    {
      "question": "How many stones d_id Dav_id take for his fight with Goliath? One, Five or Fifteen?",
      "answer": "Five",
      "category": "General Knowledge",
      "_id": 114
    },
    {
      "question": "In what year was Barack Obama born?",
      "answer": "1961",
      "category": "General Knowledge",
      "_id": 115
    },
    {
      "question": "Who d_id Ted Turner, the media tycoon, marry in 1991?",
      "answer": "Jane Fonda",
      "category": "General Knowledge",
      "_id": 116
    },
    {
      "question": "What type of material is produced in a ginnery?",
      "answer": "Cotton",
      "category": "General Knowledge",
      "_id": 117
    },
    {
      "question": "What does digamy mean?",
      "answer": "A second legal marriage after the death or divorce of the first husband or wife",
      "category": "General Knowledge",
      "_id": 118
    },
    {
      "question": "What state does Sarah Palin represent as its governor?",
      "answer": "Alaska",
      "category": "General Knowledge",
      "_id": 119
    },
    {
      "question": "What U.S. state d_id Barack Obama become senator of in 2005?",
      "answer": "Illinois",
      "category": "General Knowledge",
      "_id": 120
    },
    {
      "question": "If eating Cambr_idge No 5s,Wellands or Bedford Winter Harvests what would you be eating?",
      "answer": "Brussel Sprouts",
      "category": "General Knowledge",
      "_id": 121
    },
    {
      "question": "In which year d_id Royal Mail introduce self adhesive stamps? 2001, 2003 or 2005?",
      "answer": "2001",
      "category": "General Knowledge",
      "_id": 122
    },
    {
      "question": "In a standard set of playing cards which is the only king without a moustache?",
      "answer": "The king of hearts",
      "category": "General Knowledge",
      "_id": 123
    },
    {
      "question": "What is the speed limit on a German motorway?",
      "answer": "There is no limit",
      "category": "General Knowledge",
      "_id": 124
    },
    {
      "question": "Which fruit contains the most calories?",
      "answer": "Avocado",
      "category": "General Knowledge",
      "_id": 125
    },
    {
      "question": "What does a somnambulist do?",
      "answer": "Sleepwalks",
      "category": "General Knowledge",
      "_id": 126
    },
    {
      "question": "How old was the title character in the novel Lolita?",
      "answer": "12",
      "category": "General Knowledge",
      "_id": 127
    },
    {
      "question": "Which state is home to the Joshua Tree National Park?",
      "answer": "California",
      "category": "General Knowledge",
      "_id": 128
    },
    {
      "question": "What numeric term describes perfect eyesight and a form of cricket?",
      "answer": "20/20",
      "category": "General Knowledge",
      "_id": 129
    },
    {
      "question": "What does the word `pop` refer to in Pop Goes The Weasel?",
      "answer": "To pawn (weasel was a shoemakers tool)",
      "category": "General Knowledge",
      "_id": 130
    },
    {
      "question": "In heraldry, what colour is gules?",
      "answer": "Red",
      "category": "General Knowledge",
      "_id": 131
    },
    {
      "question": "How many lions are depicted on the royal standard?",
      "answer": "Seven (one represents Scotland)",
      "category": "General Knowledge",
      "_id": 132
    },
    {
      "question": "On what occasions would the royal standard be flown at half mast?",
      "answer": "Never because on the passing of a monarch, his or her descendant immediately accedes to the throne.",
      "category": "General Knowledge",
      "_id": 133
    },
    {
      "question": "Energy firm British Gas is owned by which company?",
      "answer": "Centrica",
      "category": "General Knowledge",
      "_id": 134
    },
    {
      "question": "In the game Cluedo, which room can be accessed via the secret passageway from the Study?",
      "answer": "The kitchen",
      "category": "General Knowledge",
      "_id": 135
    },
    {
      "question": "Which three fruits are combined to make the drink Vimto?",
      "answer": "Grape, blackcurrant and raspberry",
      "category": "General Knowledge",
      "_id": 136
    },
    {
      "question": "According the the Bible how many of each type of animal d_id Moses take on the Ark?",
      "answer": "None (Noah d_id)",
      "category": "General Knowledge",
      "_id": 137
    },
    {
      "question": "Which is the only USA state that has no letters in common with its state capital?",
      "answer": "South Dakota (Pierre is the capital)",
      "category": "General Knowledge",
      "_id": 138
    },
    {
      "question": "What building is pictured on a bottle of HP sauce?",
      "answer": "Houses of Parliament / Palace of Westminster",
      "category": "General Knowledge",
      "_id": 139
    },
    {
      "question": "Which type of pasta`s name translates literally as `little worms`?",
      "answer": "Vermicelli",
      "category": "General Knowledge",
      "_id": 140
    },
    {
      "question": "In Germany it is called `blutwurst`; in France, `boudin noir`. What is it most commonly called in England?",
      "answer": "Black pudding",
      "category": "General Knowledge",
      "_id": 141
    },
    {
      "question": "What was Margaret Thatcher`s ma_iden name?",
      "answer": "Roberts",
      "category": "General Knowledge",
      "_id": 142
    },
    {
      "question": "What is the purpose of the black stripe on a school crossing warden`s `lollipop`?",
      "answer": "To write in chalk the registration number of traffic offenders",
      "category": "General Knowledge",
      "_id": 143
    },
    {
      "question": "In Britain, what is the only road sign to be on an inverted triangle?",
      "answer": "Give Way",
      "category": "General Knowledge",
      "_id": 144
    },
    {
      "question": "In Britain what shape is the road sign `Stop`?",
      "answer": "Octagonal",
      "category": "General Knowledge",
      "_id": 145
    },
    {
      "question": "Under which Pres_ident d_id the United States invade the Caribbean island of Grenada?",
      "answer": "Ronald Reagan",
      "category": "General Knowledge",
      "_id": 146
    },
    {
      "question": "What breed of spaniel has been selected as Best in Show more times than any other?",
      "answer": "Cocker Spaniel (7 times)",
      "category": "General Knowledge",
      "_id": 147
    },
    {
      "question": "Which letter of the alphabet appears only once in the names of all English and Scottish league football teams and not at all in the names of the elements in the Periodic Table?",
      "answer": "J (appears in St Johnstone)",
      "category": "General Knowledge",
      "_id": 148
    },
    {
      "question": "Which is the largest country in the world with only one time zone?",
      "answer": "China (It actually spans 5 zones)",
      "category": "General Knowledge",
      "_id": 149
    },
    {
      "question": "How many pips are there on the Greenwich Time Signal?",
      "answer": "6 (5 short and 1 long)",
      "category": "General Knowledge",
      "_id": 150
    },
    {
      "question": "What is the dot on the letter `i` called?",
      "answer": "A tittle",
      "category": "General Knowledge",
      "_id": 151
    },
    {
      "question": "What is the name of the pan in which you make paella?",
      "answer": "Paella (Paella is the word for `frying pan` in Valencian)",
      "category": "General Knowledge",
      "_id": 152
    },
    {
      "question": "How many dots are there in total on a pair of dice?",
      "answer": "42",
      "category": "General Knowledge",
      "_id": 153
    },
    {
      "question": "What South American capital city has a name that means `our lady of peace`?",
      "answer": "La Paz (the capital of Bolivia)",
      "category": "General Knowledge",
      "_id": 154
    },
    {
      "question": "What nationality is the singer Feist?",
      "answer": "Canadian",
      "category": "General Knowledge",
      "_id": 155
    },
    {
      "question": "Which football player has cost the most money in accumulated transfer fees during his career?",
      "answer": "Nicolas Anelka (7 Transfers Ã‚Â£85 million)",
      "category": "General Knowledge",
      "_id": 156
    },
    {
      "question": "What `amazing` name was the most popular name given to baby girls in England and Wales in 2007?",
      "answer": "Grace",
      "category": "General Knowledge",
      "_id": 157
    },
    {
      "question": "Who sang Walking In The Air in the original version of the Snowman?",
      "answer": "Peter Auty",
      "category": "General Knowledge",
      "_id": 158
    },
    {
      "question": "What do Germans do with a `handy`?",
      "answer": "Make a phone call with it (it is the German name for a mobile phone)",
      "category": "General Knowledge",
      "_id": 159
    },
    {
      "question": "Barwick Green is the name of the title music to which show?",
      "answer": "The Archers",
      "category": "General Knowledge",
      "_id": 160
    },
    {
      "question": "In the board game Cleudo, whose murder has to be solved?",
      "answer": "Dr Black`s",
      "category": "General Knowledge",
      "_id": 161
    },
    {
      "question": "If you walked one mile south, one mile west, and then one mile north, and ended up where you started, where would you be?",
      "answer": "The North Pole",
      "category": "General Knowledge",
      "_id": 162
    },
    {
      "question": "Which well known brand`s secret ingredient is codenamed x7?",
      "answer": "Coca-cola`s",
      "category": "General Knowledge",
      "_id": 163
    },
    {
      "question": "The Savoy Grill, the Boxwood CafÃƒÂ© at the Berkeley Hotel and Maze are all restaurants owned by which famous chef?",
      "answer": "Gordon Ramsay",
      "category": "General Knowledge",
      "_id": 164
    },
    {
      "question": "In which city were the 1940 Olympic Games scheduled to take place before being cancelled due to war?",
      "answer": "Tokyo",
      "category": "General Knowledge",
      "_id": 165
    },
    {
      "question": "What sport was at the centre of Death In The Afternoon by Ernest Hemmingway?",
      "answer": "Bullfighting in Spain",
      "category": "General Knowledge",
      "_id": 166
    },
    {
      "question": "Which famous marionette accompanied Annette Mills on her piano?",
      "answer": "Muffin the Mule",
      "category": "General Knowledge",
      "_id": 167
    },
    {
      "question": "What condition has the medical name of bruxism?",
      "answer": "Grinding of the teeth",
      "category": "General Knowledge",
      "_id": 168
    },
    {
      "question": "What can`t rats do that make them very vulnerable to poison?",
      "answer": "They physically can`t vomit",
      "category": "General Knowledge",
      "_id": 169
    },
    {
      "question": "What does a CB radio enthusiast refer to as a `pregnant roller skate`?",
      "answer": "A Volkswagen Beetle",
      "category": "General Knowledge",
      "_id": 170
    },
    {
      "question": "What is a swozzle used for in the field of entertainment?",
      "answer": "It is a small gadget used in the mouth to make Punch and Judy-like sounds",
      "category": "General Knowledge",
      "_id": 171
    },
    {
      "question": "What is a spurtle used for?",
      "answer": "It's a Scottish traditional spoon to stir the oats when making porr_idge",
      "category": "General Knowledge",
      "_id": 172
    },
    {
      "question": "Who was the wife of Odin and goddess of marriage, the home and motherhood?",
      "answer": "Frigg (Norse mythology)",
      "category": "General Knowledge",
      "_id": 173
    },
    {
      "question": "Which the actor who played `the Ugly` in The Good, The Bad And The Ugly?",
      "answer": "Eli Wallach",
      "category": "General Knowledge",
      "_id": 174
    },
    {
      "question": "Who wrote the opera The Girl Of The Golden West?",
      "answer": "Giacome Puccini",
      "category": "General Knowledge",
      "_id": 175
    },
    {
      "question": "Henry VIII is buried alongs_ide which of his wives?",
      "answer": "Jane Seymour",
      "category": "General Knowledge",
      "_id": 176
    },
    {
      "question": "In which city would you find Canada`s largest Stock Exchange?",
      "answer": "Toronto",
      "category": "General Knowledge",
      "_id": 177
    },
    {
      "question": "What is a tittle?",
      "answer": "A small diacritic mark like the dot above a letter `i` or `j`",
      "category": "General Knowledge",
      "_id": 178
    },
    {
      "question": "By what name is acetylsalicylic ac_id more commonly known?",
      "answer": "Aspirin",
      "category": "General Knowledge",
      "_id": 179
    },
    {
      "question": "A sheet of A4 paper is 210 mm w_ide, but how long is it?",
      "answer": "297 mm",
      "category": "General Knowledge",
      "_id": 180
    },
    {
      "question": "What is `Dannebrog`? The name of the Danish flag, an ancient coin, or a spicy fruit loaf?",
      "answer": "The name of the Danish flag",
      "category": "General Knowledge",
      "_id": 181
    },
    {
      "question": "Which make of car is named after it`s intended market - the U.S.A ?",
      "answer": "Lexus (stands for Luxury Export United States)",
      "category": "General Knowledge",
      "_id": 182
    },
    {
      "question": "`Woman Hitler` is an anagram of which relative?",
      "answer": "Mother-in-law",
      "category": "General Knowledge",
      "_id": 183
    },
    {
      "question": "In a game of chess, what is the only piece able to jump over other pieces?",
      "answer": "Knight",
      "category": "General Knowledge",
      "_id": 184
    },
    {
      "question": "What is the square root of 169?",
      "answer": "13",
      "category": "General Knowledge",
      "_id": 185
    },
    {
      "question": "In a game of chess, which piece is worth more - a rook or a knight?",
      "answer": "Rook",
      "category": "General Knowledge",
      "_id": 186
    },
    {
      "question": "Chronophobia is the fear of what?",
      "answer": "Time",
      "category": "General Knowledge",
      "_id": 187
    },
    {
      "question": "According to the lyrics of the song by the Weather Girls, it will start raining men at just about what time?",
      "answer": "Half past ten",
      "category": "General Knowledge",
      "_id": 188
    },
    {
      "question": "According to the old proverb all roads lead to which capital city?",
      "answer": "Rome",
      "category": "General Knowledge",
      "_id": 189
    },
    {
      "question": "Olympus Mons is the largest volcano known to man. Where is it?",
      "answer": "Mars",
      "category": "General Knowledge",
      "_id": 190
    },
    {
      "question": "The last Nobel Prize to be introduced was in which subject?",
      "answer": "Economics",
      "category": "General Knowledge",
      "_id": 191
    },
    {
      "question": "Phasmaphobia is the fear of what?",
      "answer": "Ghosts",
      "category": "General Knowledge",
      "_id": 192
    },
    {
      "question": "The name of which Italian cheese means `recooked`?",
      "answer": "Ricotta",
      "category": "General Knowledge",
      "_id": 193
    },
    {
      "question": "What is the name of the currency used in Poland?",
      "answer": "Zloty",
      "category": "General Knowledge",
      "_id": 194
    },
    {
      "question": "Which is the oldest of the royal parks in London?",
      "answer": "St James`s Park",
      "category": "General Knowledge",
      "_id": 195
    },
    {
      "question": "What colour would you associate with the traditional gemstone for September?",
      "answer": "Blue (sapphire)",
      "category": "General Knowledge",
      "_id": 196
    },
    {
      "question": "From which language does the word `mythology` come?",
      "answer": "Greek (meaning story-telling)",
      "category": "General Knowledge",
      "_id": 197
    },
    {
      "question": "What is the capital of India?",
      "answer": "New delhi",
      "category": "Geography",
      "_id": 198
    },
    {
      "question": "In which city is the European Parliament based?",
      "answer": "Strasbourg",
      "category": "Geography",
      "_id": 199
    },
    {
      "question": "The highest temperature ever recorded outs_ide in the shade was recorded in Azizah, in Africa. In which country is this city located?",
      "answer": "Libya",
      "category": "Geography",
      "_id": 200
    },
    {
      "question": "What is the largest fresh water lake in North America?",
      "answer": "Lake Superior",
      "category": "Geography",
      "_id": 201
    },
    {
      "question": "Which South American country was named after the Italian city of Venice?",
      "answer": "Venezuela",
      "category": "Geography",
      "_id": 202
    },
    {
      "question": "In which country is the highest mountain in South America?",
      "answer": "Argentina",
      "category": "Geography",
      "_id": 203
    },
    {
      "question": "How many emirates make up the United Arab Emirates?",
      "answer": "7",
      "category": "Geography",
      "_id": 204
    },
    {
      "question": "Known as the Rio Grande in the USA, what is it called in Mexico?",
      "answer": "Rio Bravo",
      "category": "Geography",
      "_id": 205
    },
    {
      "question": "Fort Knox lies in which American state?",
      "answer": "Kentucky",
      "category": "Geography",
      "_id": 206
    },
    {
      "question": "Tokelau is a dependency of which country?",
      "answer": "New Zealand",
      "category": "Geography",
      "_id": 207
    },
    {
      "question": "A Scottish mountain must be at least how many feet high to be called a Munro?",
      "answer": "3,000",
      "category": "Geography",
      "_id": 208
    },
    {
      "question": "Kosciusko is the highest mountain in which country?",
      "answer": "Australia",
      "category": "Geography",
      "_id": 209
    },
    {
      "question": "Which shipping forecast area is to the directly north of Ireland?",
      "answer": "Malin",
      "category": "Geography",
      "_id": 210
    },
    {
      "question": "Name the river that flows through the city of Albuquerque in the USA.",
      "answer": "Rio Grande",
      "category": "Geography",
      "_id": 211
    },
    {
      "question": "On which s_ide of the road do people drive in Japan?",
      "answer": "The left s_ide",
      "category": "Geography",
      "_id": 212
    },
    {
      "question": "Winnepeg is the capital of which Canadian province?",
      "answer": "Manitoba",
      "category": "Geography",
      "_id": 213
    },
    {
      "question": "The name of which European capital city is derived from the names of two towns on either bank of its main river?",
      "answer": "Budapest (from Buda and Pest)",
      "category": "Geography",
      "_id": 214
    },
    {
      "question": "In which European country would you find the Troodos mountain range?",
      "answer": "Cyprus",
      "category": "Geography",
      "_id": 215
    },
    {
      "question": "A country historically known as Abyssinia, what is the modern name for it?",
      "answer": "Ethiopia",
      "category": "Geography",
      "_id": 216
    },
    {
      "question": "Three countries have both an Atlantic and a Mediterranean coast. France and Spain are two, but what is the other?",
      "answer": "Morocco",
      "category": "Geography",
      "_id": 217
    },
    {
      "question": "How many states of the United States of America have a Pacific coast?",
      "answer": "5 (California, Oregon, Washington, Alaska, Hawaii)",
      "category": "Geography",
      "_id": 218
    },
    {
      "question": "What is the name of the sea that separates New Zealand and Australia?",
      "answer": "Tasman Sea",
      "category": "Geography",
      "_id": 219
    },
    {
      "question": "What is the only national capital that borders two different countries?",
      "answer": "Bratislava",
      "category": "Geography",
      "_id": 220
    },
    {
      "question": "Which South American country has borders with Columbia and Peru?",
      "answer": "Ecuador",
      "category": "Geography",
      "_id": 221
    },
    {
      "question": "On which planet is the solar system`s highest volcano?",
      "answer": "Mars (Olympus Mons)",
      "category": "Geography",
      "_id": 222
    },
    {
      "question": "What is the modern-day name for the country formerly known as Kampuchea?",
      "answer": "Cambodia",
      "category": "Geography",
      "_id": 223
    },
    {
      "question": "What is the modern-day name for the country formerly known as Upper Volta?",
      "answer": "Burkina Faso",
      "category": "Geography",
      "_id": 224
    },
    {
      "question": "What country was formerly known as Persia?",
      "answer": "Iran",
      "category": "Geography",
      "_id": 225
    },
    {
      "question": "What is the higest mountain that is not in a mountain range?",
      "answer": "Mount Kilimanjaro",
      "category": "Geography",
      "_id": 226
    },
    {
      "question": "What is the capital city of Tasmania?",
      "answer": "Hobart",
      "category": "Geography",
      "_id": 227
    },
    {
      "question": "What is the capital of the Caribbean island of Grenada?",
      "answer": "St. Georges",
      "category": "Geography",
      "_id": 228
    },
    {
      "question": "What country has the largest coastline?",
      "answer": "Canada",
      "category": "Geography",
      "_id": 229
    },
    {
      "question": "Which country`s national flag has the most colours?",
      "answer": "South Africa`s",
      "category": "Geography",
      "_id": 230
    },
    {
      "question": "What is the name of the dam on the Zambia - Zimbabwe border?",
      "answer": "Kariba",
      "category": "Geography",
      "_id": 231
    },
    {
      "question": "Also the name of an English city, Harare, the capital of Zimbabwe was known as what until 1987?",
      "answer": "Salisbury",
      "category": "Geography",
      "_id": 232
    },
    {
      "question": "Which two countries are double-landlocked (i.e. surrounded only by other landlocked countries)?",
      "answer": "Lichtenstein and Uzbekistan",
      "category": "Geography",
      "_id": 233
    },
    {
      "question": "The world`s smallest independant country since 1929 has a birth rate of zero. What is it called?",
      "answer": "The Vatican City",
      "category": "Geography",
      "_id": 234
    },
    {
      "question": "What is the capital city of the American state of Kansas?",
      "answer": "Topeka",
      "category": "Geography",
      "_id": 235
    },
    {
      "question": "What is the capital city of Botswana?",
      "answer": "Gabarone",
      "category": "Geography",
      "_id": 236
    },
    {
      "question": "What is the world`s northernmost capital city?",
      "answer": "Reykjavik",
      "category": "Geography",
      "_id": 237
    },
    {
      "question": "Which of the Great Lakes touches Chicago?",
      "answer": "Lake Michigan",
      "category": "Geography",
      "_id": 238
    },
    {
      "question": "Which tree appears on the flag of Lebannon?",
      "answer": "The Cedar",
      "category": "Geography",
      "_id": 239
    },
    {
      "question": "In which African country is Mount Kilimanjaro?",
      "answer": "Tanzania",
      "category": "Geography",
      "_id": 240
    },
    {
      "question": "What is the capital of Mauritius?",
      "answer": "Port Louis",
      "category": "Geography",
      "_id": 241
    },
    {
      "question": "Which island near Hong Kong is famous for gambling and motor racing?",
      "answer": "Macau",
      "category": "Geography",
      "_id": 242
    },
    {
      "question": "In which North Amercan city is there a neighbourhood known as Hell`s Kitchen?",
      "answer": "New York",
      "category": "Geography",
      "_id": 243
    },
    {
      "question": "In which present day city is the remains of Carthage?",
      "answer": "Tunis",
      "category": "Geography",
      "_id": 244
    },
    {
      "question": "On which group of Scottish islands would you find the neolithic village of Skara Brae?",
      "answer": "The Orkneys",
      "category": "Geography",
      "_id": 245
    },
    {
      "question": "In which country would you find the Barossa Valley?",
      "answer": "Australia (it is a wine producing region)",
      "category": "Geography",
      "_id": 246
    },
    {
      "question": "Still in use today, which country`s flag is the oldest in the world?",
      "answer": "Denmark`s",
      "category": "Geography",
      "_id": 247
    },
    {
      "question": "To which country does the territory of Christmas Island belong?",
      "answer": "Australia",
      "category": "Geography",
      "_id": 248
    },
    {
      "question": "What is the capital of Ghana?",
      "answer": "Accra",
      "category": "Geography",
      "_id": 249
    },
    {
      "question": "What is often referred to as the oil capital of Norway?",
      "answer": "Stavanger",
      "category": "Geography",
      "_id": 250
    },
    {
      "question": "On which Scottish river does Inverness stand?",
      "answer": "The river Ness",
      "category": "Geography",
      "_id": 251
    },
    {
      "question": "What is the third largest city in the US?",
      "answer": "Chicago",
      "category": "Geography",
      "_id": 252
    },
    {
      "question": "What is the deepest lake in the world?",
      "answer": "Lake Baikal",
      "category": "Geography",
      "_id": 253
    },
    {
      "question": "In which country would you find the Mojave Desert?",
      "answer": "USA",
      "category": "Geography",
      "_id": 254
    },
    {
      "question": "What is the capital of Saudi Arabia?",
      "answer": "Riyadh",
      "category": "Geography",
      "_id": 255
    },
    {
      "question": "What is the capital of Iran?",
      "answer": "Tehran",
      "category": "Geography",
      "_id": 256
    },
    {
      "question": "What is the capital of the Philippines?",
      "answer": "Manila",
      "category": "Geography",
      "_id": 257
    },
    {
      "question": "Which two South American countries are landlocked?",
      "answer": "Bolivia and Paraguay",
      "category": "Geography",
      "_id": 258
    },
    {
      "question": "New York City lies at the mouth of which river?",
      "answer": "Hudson",
      "category": "Geography",
      "_id": 259
    },
    {
      "question": "In which Australian state of territory will you find the Adela_ide river?",
      "answer": "Northern Territory",
      "category": "Geography",
      "_id": 260
    },
    {
      "question": "What connects the end of the M4 and the end of the Suez Canal?",
      "answer": "Abraham (Pont Abraham and Port Abraham)",
      "category": "Geography",
      "_id": 261
    },
    {
      "question": "In which Australian State or Territory would you find the Adela_ide river?",
      "answer": "Nothern Territory",
      "category": "Geography",
      "_id": 262
    },
    {
      "question": "What is a more common name for the Aurora Borealis?",
      "answer": "The Northern Lights",
      "category": "Geography",
      "_id": 263
    },
    {
      "question": "Which country contains the largest number of active volcanoes?",
      "answer": "Indonesia",
      "category": "Geography",
      "_id": 264
    },
    {
      "question": "What is the capital of Libya?",
      "answer": "Tripoli",
      "category": "Geography",
      "_id": 265
    },
    {
      "question": "What is the name of the largest lake in South America?",
      "answer": "Titicaca",
      "category": "Geography",
      "_id": 266
    },
    {
      "question": "Which country was previously called the Republic of Upper Volta?",
      "answer": "Burkina Faso",
      "category": "Geography",
      "_id": 267
    },
    {
      "question": "What is the name of Amsterdam`s main airport?",
      "answer": "Schiphol",
      "category": "Geography",
      "_id": 268
    },
    {
      "question": "Which river runs through Budapest?",
      "answer": "The Danube",
      "category": "Geography",
      "_id": 269
    },
    {
      "question": "Name the two major feeder rivers to the Nile.",
      "answer": "The Blue and White Niles",
      "category": "Geography",
      "_id": 270
    },
    {
      "question": "What is the most populous country in Africa?",
      "answer": "Nigeria",
      "category": "Geography",
      "_id": 271
    },
    {
      "question": "Name the four American States that start with the letter `I`.",
      "answer": "_idaho, Illinois, Indiana and Iowa.",
      "category": "Geography",
      "_id": 272
    },
    {
      "question": "Which two European capital cities are closest together?",
      "answer": "Vienna and Bratislava",
      "category": "Geography",
      "_id": 273
    },
    {
      "question": "What is the capital of Tajikistan?",
      "answer": "Dushanbe",
      "category": "Geography",
      "_id": 274
    },
    {
      "question": "What is the name of the plain that was once the chief industrial region of the USSR?",
      "answer": "Oka Don Plain",
      "category": "Geography",
      "_id": 275
    },
    {
      "question": "The Red River forms the border between Texas and which other American state?",
      "answer": "Oklahoma",
      "category": "Geography",
      "_id": 276
    },
    {
      "question": "Which country is sometimes referred to as the Dead Heart of Africa?",
      "answer": "Chad",
      "category": "Geography",
      "_id": 277
    },
    {
      "question": "Which is the only US state not to have a straight line in its borders?",
      "answer": "Hawaii",
      "category": "Geography",
      "_id": 278
    },
    {
      "question": "Which country has a birth rate of zero?",
      "answer": "Vatican City",
      "category": "Geography",
      "_id": 279
    },
    {
      "question": "Mount Everest is located on the border between which two countries?",
      "answer": "Nepal and Tibet",
      "category": "Geography",
      "_id": 280
    },
    {
      "question": "Which mountain`s name means `shining mountain` in Swahili?",
      "answer": "Kilimanjaro",
      "category": "Geography",
      "_id": 281
    },
    {
      "question": "What American state has the capital Cheyenne?",
      "answer": "Wyoming",
      "category": "Geography",
      "_id": 282
    },
    {
      "question": "What number is Britain in a list of the largest islands in the world? 4th, 8th or 15th?",
      "answer": "8th",
      "category": "Geography",
      "_id": 283
    },
    {
      "question": "What is the capital of Cyprus?",
      "answer": "Nicosia",
      "category": "Geography",
      "_id": 284
    },
    {
      "question": "K2, the world`s second highest mountain, is in which country?",
      "answer": "Pakistan",
      "category": "Geography",
      "_id": 285
    },
    {
      "question": "What is the capital city of Greenland?",
      "answer": "Nuuk",
      "category": "Geography",
      "_id": 286
    },
    {
      "question": "What is the only monosyllabic American state name?",
      "answer": "Maine",
      "category": "Geography",
      "_id": 287
    },
    {
      "question": "Which flag depicts the image of an eagle devouring a snake?",
      "answer": "Mexico",
      "category": "Geography",
      "_id": 288
    },
    {
      "question": "What is the name of the parliament of the Isle of Man?",
      "answer": "Tynwald",
      "category": "Geography",
      "_id": 289
    },
    {
      "question": "Where is the deepest location on Earth?",
      "answer": "The bottom of the Mariana Trench in the Pacific Ocean",
      "category": "Geography",
      "_id": 290
    },
    {
      "question": "Name the capital cities of the three Baltic States?",
      "answer": "Tallinn (Estonia), Riga (Latvia) and Vilnius (Lithunia)",
      "category": "Geography",
      "_id": 291
    },
    {
      "question": "At the intersection of which four American states would you find the \"Four Corners\"?",
      "answer": "Arizona, Utah, Colorado and New Mexico",
      "category": "Geography",
      "_id": 292
    },
    {
      "question": "What is the name of the extinct volcano which overlooks the city of Edinburgh?",
      "answer": "Arthur`s seat",
      "category": "Geography",
      "_id": 293
    },
    {
      "question": "What is the southern hemisphere equivalent of the Aurora Borealis, also known as the Northern Lights?",
      "answer": "Aurora Australis",
      "category": "Geography",
      "_id": 294
    },
    {
      "question": "In America, what is the state capital of Ohio?",
      "answer": "Columbus",
      "category": "Geography",
      "_id": 295
    },
    {
      "question": "What is the largest of the five Great Lakes in North America?",
      "answer": "Lake Superior",
      "category": "Geography",
      "_id": 296
    },
    {
      "question": "Located in Russia near the border with Georgia, what is the highest mountain in Europe?",
      "answer": "Mount Elbrus",
      "category": "Geography",
      "_id": 297
    },
    {
      "question": "Which famous group performed the first ever song on Top Of The Pops in 1964?",
      "answer": "The Rolling Stones",
      "category": "Music",
      "_id": 298
    },
    {
      "question": "Which band has released albums titled Word Gets Around, Just Enough Education To Perform and Pull The Pin?",
      "answer": "Stereophonics",
      "category": "Music",
      "_id": 299
    },
    {
      "question": "Which supermodel is seen pole dancing in the White Stripes v_ideo for the song I Just Don`t Know What To Do With Myself?",
      "answer": "Kate Moss",
      "category": "Music",
      "_id": 300
    },
    {
      "question": "Which Beatle led the way across the zebra crossing on the Abbey Road album cover?",
      "answer": "John Lennon",
      "category": "Music",
      "_id": 301
    },
    {
      "question": "Which world famous musician was born Farrokh Bulsara in Zanzibar in 1946?",
      "answer": "Freddie Mercury",
      "category": "Music",
      "_id": 302
    },
    {
      "question": "Which group formed in 1977 and named themselves after their financial status at that time?",
      "answer": "Dire Straits",
      "category": "Music",
      "_id": 303
    },
    {
      "question": "What was the title of Bob the Builder`s second UK number one hit single?",
      "answer": "Mambo No 5",
      "category": "Music",
      "_id": 304
    },
    {
      "question": "Which supermaket is mentioned in Chas and Dave`s song Rabbit?",
      "answer": "Sainsbury`s",
      "category": "Music",
      "_id": 305
    },
    {
      "question": "Which singer had hits with Rubber Ball and The Night Has A Thousand Eyes?",
      "answer": "Bobby Vee",
      "category": "Music",
      "_id": 306
    },
    {
      "question": "Which country d_id Celine Dion represent when singing in the Eurovision Song Contest in 1988?",
      "answer": "Switzerland",
      "category": "Music",
      "_id": 307
    },
    {
      "question": "What group with a palindromic name had a hit single that was also a palindrome?",
      "answer": "ABBA (with SOS)",
      "category": "Music",
      "_id": 308
    },
    {
      "question": "Which artist released an album and movie under the same title of Get Rich Or Die Tryin`?",
      "answer": "50 Cent",
      "category": "Music",
      "_id": 309
    },
    {
      "question": "Which US rapper died on September 13th 1996 after being shot in a drive-by shooting after watchin Mike Tysons comeback fight 7 days earlier?",
      "answer": "Tupac Shakur",
      "category": "Music",
      "_id": 310
    },
    {
      "question": "Who wrote the Sinead O`Connor hit Nothing Compares 2 U?",
      "answer": "Prince",
      "category": "Music",
      "_id": 311
    },
    {
      "question": "Which pop singer d_id Debbie Rowe marry?",
      "answer": "Michael Jackson",
      "category": "Music",
      "_id": 312
    },
    {
      "question": "The pop groups Ace Of Base and The Cardigans both hail from which country?",
      "answer": "Sweden",
      "category": "Music",
      "_id": 313
    },
    {
      "question": "In musical notes, which is bigger - a crotchet or a semibreve?",
      "answer": "Semibreve",
      "category": "Music",
      "_id": 314
    },
    {
      "question": "Which British female singer had a 2006 hit with `Rehab`?",
      "answer": "Amy Winehouse",
      "category": "Music",
      "_id": 315
    },
    {
      "question": "Which Barbadian singer stayed ten weeks at number 1 with `Umbrella`?",
      "answer": "Rihanna",
      "category": "Music",
      "_id": 316
    },
    {
      "question": "What nationality was Mozart?",
      "answer": "Austrian",
      "category": "Music",
      "_id": 317
    },
    {
      "question": "Which boy`s name was the title of the debut album released by Amy Winehouse?",
      "answer": "Frank",
      "category": "Music",
      "_id": 318
    },
    {
      "question": "Which singer had a string of hits in the 1970s and is often referred to as the `Queen of Disco`?",
      "answer": "Donna Summer",
      "category": "Music",
      "_id": 319
    },
    {
      "question": "Who had a number one hit single in 1964 with `Little Red Rooster`?",
      "answer": "The Rolling Stones",
      "category": "Music",
      "_id": 320
    },
    {
      "question": "Which group had a number one album in 1979 with Regatta De Blanc?",
      "answer": "The Police",
      "category": "Music",
      "_id": 321
    },
    {
      "question": "In 1963, which band became the first to reach number one with their first three singles?",
      "answer": "Gerry and the Pacemakers",
      "category": "Music",
      "_id": 322
    },
    {
      "question": "By what name is Schubert`s Symphony No. 8 better known?",
      "answer": "Unfinished Symphony",
      "category": "Music",
      "_id": 323
    },
    {
      "question": "By what name is singer Pauline Matthews better known?",
      "answer": "Kiki Dee",
      "category": "Music",
      "_id": 324
    },
    {
      "question": "What is the common link between The Dave Clark 5, Fat Larry`s Band and Harold Melvin and the Blue Notes?",
      "answer": "All three are named after their drummer",
      "category": "Music",
      "_id": 325
    },
    {
      "question": "George Bernard Shaw`s play `Pygmalion` was adapted to become which musical?",
      "answer": "My Fair Lady",
      "category": "Music",
      "_id": 326
    },
    {
      "question": "Which band had hits with `Linger` and `Dreams`?",
      "answer": "The Cranberries",
      "category": "Music",
      "_id": 327
    },
    {
      "question": "How is the double act of Dav_id Peacock and Charles Hodges better known?",
      "answer": "Chas `n` Dave",
      "category": "Music",
      "_id": 328
    },
    {
      "question": "In music, which band consists of Billy Gibbons, Dusty Hill and Frank Beard?",
      "answer": "ZZ Top",
      "category": "Music",
      "_id": 329
    },
    {
      "question": "Formed in 1976, which famous band consists of Paul Hewson, Dave Evans, Adam Clayton and Larry Mullen, Jr?",
      "answer": "U2 (Paul Hewson is 'Bono', Dave Evans is 'The Edge')",
      "category": "Music",
      "_id": 330
    },
    {
      "question": "Which well known band was formed in 1973 by brothers Angus and Malcolm Young?",
      "answer": "AC/DC",
      "category": "Music",
      "_id": 331
    },
    {
      "question": "Who had a hit with `La Bamba` in 1987?",
      "answer": "Los Lobos",
      "category": "Music",
      "_id": 332
    },
    {
      "question": "Who had a hit single in 1974 with `The Streak`?",
      "answer": "Ray Stevens",
      "category": "Music",
      "_id": 333
    },
    {
      "question": "Who had a hit single in 1981 with `Romeo And Juliet`?",
      "answer": "Dire Straits",
      "category": "Music",
      "_id": 334
    },
    {
      "question": "What was the name of Billy J. Kramer`s backing group in the 1960s?",
      "answer": "The Dakotas",
      "category": "Music",
      "_id": 335
    },
    {
      "question": "Who had a hit single in 1961 with `Runaway`?",
      "answer": "Del Shannon",
      "category": "Music",
      "_id": 336
    },
    {
      "question": "Who was the lead singer of The Four Seasons in the 1960s and 1970s?",
      "answer": "Frankie Valli",
      "category": "Music",
      "_id": 337
    },
    {
      "question": "Which pop band had a hit single with `Open Your Heart` in 1981?",
      "answer": "The Human League",
      "category": "Music",
      "_id": 338
    },
    {
      "question": "Which band had a hit with `He Ain't Heavy, He`s My Brother` in both 1969 and 1988?",
      "answer": "The Hollies",
      "category": "Music",
      "_id": 339
    },
    {
      "question": "Who had a hit in 1985 with `One More Night`?",
      "answer": "Phil Collins",
      "category": "Music",
      "_id": 340
    },
    {
      "question": "Who had a hit single with `Crocodile Rock` in 1972?",
      "answer": "Elton John",
      "category": "Music",
      "_id": 341
    },
    {
      "question": "Who had a hit in 1982 with `Maneater`?",
      "answer": "Hall And Oates",
      "category": "Music",
      "_id": 342
    },
    {
      "question": "Who had a hit with a cover version of Frankie Laine`s hit single `I Believe` in 1996?",
      "answer": "Robson And Jerome",
      "category": "Music",
      "_id": 343
    },
    {
      "question": "Who had a hit with `24 Hours From Tulsa` in 1963?",
      "answer": "Gene Pitney",
      "category": "Music",
      "_id": 344
    },
    {
      "question": "Which band had a hit with `Too Shy` in 1983?",
      "answer": "Kajagoogoo",
      "category": "Music",
      "_id": 345
    },
    {
      "question": "Who sang the TV theme tune to `Rawh_ide`?",
      "answer": "Frankie Laine",
      "category": "Music",
      "_id": 346
    },
    {
      "question": "Which Zager and Evans hit single of 1969 had the words Exordium and Terminus in brackets in the title?",
      "answer": "In the year 2525",
      "category": "Music",
      "_id": 347
    },
    {
      "question": "Which famous comedian made a record called `please mister custer` in 1960?",
      "answer": "Charlie Drake",
      "category": "Music",
      "_id": 348
    },
    {
      "question": "What was the first song played on Radio One on 30 September 1967?",
      "answer": "`Flowers in the Rain` by the Move",
      "category": "Music",
      "_id": 349
    },
    {
      "question": "Which 1980 Splodgenessabounds hit gives its name to the title of a BBC comedy series?",
      "answer": "Two Pints of Lager and a Packet of Crisps, Please!",
      "category": "Music",
      "_id": 350
    },
    {
      "question": "Which group had a hit record in the 1970s, the 1980s and the 1990s and each time they had a completely different line up?",
      "answer": "The England World Cup Squad",
      "category": "Music",
      "_id": 351
    },
    {
      "question": "Which instrument was Dizzy Gillespie famous for playing?",
      "answer": "The trumpet",
      "category": "Music",
      "_id": 352
    },
    {
      "question": "Who sang lead vocals on Australian group Python Lee Jackson`s 1972 hit `In a broken dream`?",
      "answer": "Rod Stewart",
      "category": "Music",
      "_id": 353
    },
    {
      "question": "Which singer won the Eurovision Song Contest for Ireland in 1980 and 1987?",
      "answer": "Johnny Logan",
      "category": "Music",
      "_id": 354
    },
    {
      "question": "What is the name of the clockwork device used by musicians to measure time?",
      "answer": "Metronome",
      "category": "Music",
      "_id": 355
    },
    {
      "question": "The song `Killing Me Softly With His Song` was written about which American singer-songwriter?",
      "answer": "Don McLean",
      "category": "Music",
      "_id": 356
    },
    {
      "question": "What was Culture Club`s first number one in the UK?",
      "answer": "Do You Really Want To Hurt Me?",
      "category": "Music",
      "_id": 357
    },
    {
      "question": "Which famous pop star was christened Charles Westover?",
      "answer": "Del Shannon",
      "category": "Music",
      "_id": 358
    },
    {
      "question": "The town of Titipu in Japan, the Tower of London and Venice in Italy. What is the musical connection?",
      "answer": "They`re all settings for Gilbert and Sullivan operas",
      "category": "Music",
      "_id": 359
    },
    {
      "question": "Which pop band named itself after an American firetruck?",
      "answer": "REO Speedwagon",
      "category": "Music",
      "_id": 360
    },
    {
      "question": "The original Live A_id concerts were held at Wembly and Philadelphia on 13th July in which year?",
      "answer": "1985",
      "category": "Music",
      "_id": 361
    },
    {
      "question": "Whay song d_id Whitney Houston record for the 1984 Los Angeles Olympics?",
      "answer": "One Moment In Time",
      "category": "Music",
      "_id": 362
    },
    {
      "question": "`Flowers In The Rain` holds the distinction of being the very first record played on Radio One, but who performed it?",
      "answer": "The Move",
      "category": "Music",
      "_id": 363
    },
    {
      "question": "Who sang the first line of the USA for Africa`s `We Are The World`?",
      "answer": "Lionel Richie",
      "category": "Music",
      "_id": 364
    },
    {
      "question": "Which American soul singer`s dad played football for Glasgow Celtic ?",
      "answer": "Gil Scott-Heron",
      "category": "Music",
      "_id": 365
    },
    {
      "question": "Which Paul released his first single `I Confess` when he was 14 and had written over 200 songs by the time he was 21?",
      "answer": "Paul Anka",
      "category": "Music",
      "_id": 366
    },
    {
      "question": "What was the common title of 3 different songs released by 3 different artists that all entered the Top 20 UK charts in 1985?",
      "answer": "`The Power Of Love` (by Huey Lewis and the News, Frankie Goes To Hollywood and Jennifer Rush)",
      "category": "Music",
      "_id": 367
    },
    {
      "question": "What was the title of Elvis Presley`s first British number 1?",
      "answer": "All Shook Up",
      "category": "Music",
      "_id": 368
    },
    {
      "question": "Which artist has had number one singles in the UK as a solo artist, as part of a duo, as part of a trio, as part of a quartet and as part of a group with more than four members?",
      "answer": "Sir Paul McCartney",
      "category": "Music",
      "_id": 369
    },
    {
      "question": "Alex Band and Aaron Kamin make up which band?",
      "answer": "The Calling",
      "category": "Music",
      "_id": 370
    },
    {
      "question": "In 1976, which single was knocked from the number one spot by a single whose title was contained in the lyrics to the first single?",
      "answer": "Bohemian Rhapsody by Queen (being replaced by Mamma Mia by Abba)",
      "category": "Music",
      "_id": 371
    },
    {
      "question": "By what name is singer Paul Hewson better known?",
      "answer": "Bono",
      "category": "Music",
      "_id": 372
    },
    {
      "question": "Which Beatles album cover features five `Beatles`?",
      "answer": "Abbey road (there`s a Volkswagen Beetle in the back ground!)",
      "category": "Music",
      "_id": 373
    },
    {
      "question": "Who sang the theme tune to the film `The Neverending Story`?",
      "answer": "Limahl",
      "category": "Music",
      "_id": 374
    },
    {
      "question": "In which year d_id Elvis Presley die?",
      "answer": "1977",
      "category": "Music",
      "_id": 375
    },
    {
      "question": "Justin Timberlake was formerly a vocalist for which band?",
      "answer": "N Sync",
      "category": "Music",
      "_id": 376
    },
    {
      "question": "Which band a 70s hit with `Son of my father`?",
      "answer": "Chicory Tip",
      "category": "Music",
      "_id": 377
    },
    {
      "question": "Who was lead singer for 70s glam rock band `The Sweet`?",
      "answer": "Brian Connelly",
      "category": "Music",
      "_id": 378
    },
    {
      "question": "`No Sleep Till Brooklyn` was a hit single for which group in 1987?",
      "answer": "Beastie Boys",
      "category": "Music",
      "_id": 379
    },
    {
      "question": "Which band does Rocky Gray play the drums for?",
      "answer": "Evanescence",
      "category": "Music",
      "_id": 380
    },
    {
      "question": "What was the original name of Cliff Richard`s backing group `The Shadows` before they realised there was already an American group with the same name?",
      "answer": "The Drifters",
      "category": "Music",
      "_id": 381
    },
    {
      "question": "As of September 2005 there are two albums from the 1990s that are in the top ten albums of all time and both are by solo female artists. Who are they?",
      "answer": "Whitney Houston and Shania Twain",
      "category": "Music",
      "_id": 382
    },
    {
      "question": "Who had a 1983 hit with `Too Shy`?",
      "answer": "Kajagoogoo",
      "category": "Music",
      "_id": 383
    },
    {
      "question": "Which real-life Russian d_id Boney M sing about in 1978?",
      "answer": "Rasputin",
      "category": "Music",
      "_id": 384
    },
    {
      "question": "Who had a hit in 1984 with `99 Red Balloons`?",
      "answer": "Nena",
      "category": "Music",
      "_id": 385
    },
    {
      "question": "Which world famous star is a member of the band `30 odd foot of grunts`?",
      "answer": "Russel Crowe",
      "category": "Music",
      "_id": 386
    },
    {
      "question": "Which heavy metal band had a UK number hit in January 1991 and what was the name of the song?",
      "answer": "Iron Ma_iden with `Bring Your Daughter To The Slaughter`",
      "category": "Music",
      "_id": 387
    },
    {
      "question": "What is the name of Iron Ma_idens mascot who appears on their album covers and who has also featured in a v_ideo game?",
      "answer": "Eddie",
      "category": "Music",
      "_id": 388
    },
    {
      "question": "Who had a hit single with `Werewolves Of London`?",
      "answer": "Warren Zevon",
      "category": "Music",
      "_id": 389
    },
    {
      "question": "How many number 1 singles d_id Kim Wilde and her dad Marty have between them?",
      "answer": "0",
      "category": "Music",
      "_id": 390
    },
    {
      "question": "How many grooves are on one s_ide of an LP record?",
      "answer": "1",
      "category": "Music",
      "_id": 391
    },
    {
      "question": "Which 1980s pop star`s autobiography is entitled `Take It Like A Man`?",
      "answer": "Boy George (George O`Dowd)",
      "category": "Music",
      "_id": 392
    },
    {
      "question": "What is Paul McCartney`s m_iddle name?",
      "answer": "Paul",
      "category": "Music",
      "_id": 393
    },
    {
      "question": "Who wrote the music and lyrics to the musical `Anything Goes`?",
      "answer": "Cole Porter",
      "category": "Music",
      "_id": 394
    },
    {
      "question": "How many times are the words `Hey Jude` mentioned in the Beatles song of the same name? 14, 24 or 34?",
      "answer": "24",
      "category": "Music",
      "_id": 395
    },
    {
      "question": "What do the songs `Killer` by Adamski, `Parano_id Andro_id` by Radiohead and `True Faith` by New Order have in common?",
      "answer": "The song titles aren`t mentioned in the lyrics",
      "category": "Music",
      "_id": 396
    },
    {
      "question": "For what is Michael Eavis best known in the music world?",
      "answer": "The Glastonbury Festival",
      "category": "Music",
      "_id": 397
    },
    {
      "question": "Which country had a secret police force known as the Tonton Macoute?",
      "answer": "Haiti",
      "category": "History",
      "_id": 398
    },
    {
      "question": "What was the 1st human invention that broke the sound barrier?",
      "answer": "The whip",
      "category": "History",
      "_id": 399
    },
    {
      "question": "What name was given to the Samuri code of honour?",
      "answer": "Bush_ido",
      "category": "History",
      "_id": 400
    },
    {
      "question": "What was the third last state to join the USA?",
      "answer": "Arizona",
      "category": "History",
      "_id": 401
    },
    {
      "question": "Which King of England was crowned on Christmas Day?",
      "answer": "William the Conqueror / William I (in 1066)",
      "category": "History",
      "_id": 402
    },
    {
      "question": "Who was Queen for just nine days in 1553?",
      "answer": "Lady Jane Grey",
      "category": "History",
      "_id": 403
    },
    {
      "question": "What was the name of the rocket used by Yuri Gagarin for the first manned space flight?",
      "answer": "Vostok 1",
      "category": "History",
      "_id": 404
    },
    {
      "question": "Who overthrew King _idris in 1969?",
      "answer": "Colonel Gaddafi (in Libya)",
      "category": "History",
      "_id": 405
    },
    {
      "question": "Who was assassinated by Nathuram Godse in 1948?",
      "answer": "Mahatma Ghandi",
      "category": "History",
      "_id": 406
    },
    {
      "question": "Which monarch held her nerve in the Bedchamber Crisis?",
      "answer": "Queen Victoria",
      "category": "History",
      "_id": 407
    },
    {
      "question": "Who had a two ounce stone cut from his bladder in 1658?",
      "answer": "Samuel Pepys",
      "category": "History",
      "_id": 408
    },
    {
      "question": "What was the name of King Henry VIII`s older brother?",
      "answer": "Arthur (died in 1502 whilst still heir presumptive)",
      "category": "History",
      "_id": 409
    },
    {
      "question": "Which three letters d_id SOS replace as a Morse mayday signal?",
      "answer": "CQD - CQ was a general call to all ships and D signalled Distress",
      "category": "History",
      "_id": 410
    },
    {
      "question": "In a competition in 1829, what beat Cycloped, Novelty, Perseverance and Sans Pareil?",
      "answer": "Stephenson's Rocket (Rainhill Trials)",
      "category": "History",
      "_id": 411
    },
    {
      "question": "In which British city d_id the Peterloo massacre take place in 1819?",
      "answer": "Manchester",
      "category": "History",
      "_id": 412
    },
    {
      "question": "Who was British Prime Minister on V-J Day?",
      "answer": "Clement Attlee",
      "category": "History",
      "_id": 413
    },
    {
      "question": "Who was known as the Ma_id of Orleans?",
      "answer": "Joan of Arc",
      "category": "History",
      "_id": 414
    },
    {
      "question": "During World War II, how was William Joyce better known?",
      "answer": "Lord Haw-Haw",
      "category": "History",
      "_id": 415
    },
    {
      "question": "What is the name of the canoeist who famously faked his own death when he disappeared in 2002?",
      "answer": "John Darwin",
      "category": "History",
      "_id": 416
    },
    {
      "question": "Who assassinated John Lennon?",
      "answer": "Mark Chapman",
      "category": "History",
      "_id": 417
    },
    {
      "question": "Which comedian was the first person in Britain to make a call on a mobile phone?",
      "answer": "Ernie Wise (on New Years Day 1985)",
      "category": "History",
      "_id": 418
    },
    {
      "question": "What is significant about the death of Ruth Ellis in 1955?",
      "answer": "She was the last woman to be executed in Britain",
      "category": "History",
      "_id": 419
    },
    {
      "question": "Who succeeded Dav_id Steel as leader of the Liberal Democrats?",
      "answer": "Paddy Ashdown",
      "category": "History",
      "_id": 420
    },
    {
      "question": "In what year was the Great Train Robbery?",
      "answer": "1963",
      "category": "History",
      "_id": 421
    },
    {
      "question": "What were lost by King John, melted down by Oliver Cromwell and almost stolen by Thomas Blood?",
      "answer": "The Crown Jewels",
      "category": "History",
      "_id": 422
    },
    {
      "question": "To which country d_id Tanzania belong before becoming a British mandate?",
      "answer": "Germany",
      "category": "History",
      "_id": 423
    },
    {
      "question": "By what name was Helen Porter Mitchell better known?",
      "answer": "Dame Nellie Melba",
      "category": "History",
      "_id": 424
    },
    {
      "question": "The 1812 Overture was written to celebrate the defeat of Napoleon in which city?",
      "answer": "Moscow",
      "category": "History",
      "_id": 425
    },
    {
      "question": "Who was the last Governor of Hong Kong?",
      "answer": "Chris Pattern",
      "category": "History",
      "_id": 426
    },
    {
      "question": "Which Prime Minister made Jeffrey Archer a life peer?",
      "answer": "John Major",
      "category": "History",
      "_id": 427
    },
    {
      "question": "In which city was Terry Waite k_idnapped?",
      "answer": "Beirut",
      "category": "History",
      "_id": 428
    },
    {
      "question": "What was the original name of the Royal Air Force?",
      "answer": "Royal Flying Corps",
      "category": "History",
      "_id": 429
    },
    {
      "question": "Which rebellion was defeated at the Battle of Sedgemoor in 1685?",
      "answer": "The Monmouth Rebellion",
      "category": "History",
      "_id": 430
    },
    {
      "question": "Between them, the six wives of HenryVIII were of three different nationalities. English, Spanish and what other?",
      "answer": "German (Ann of Cleves)",
      "category": "History",
      "_id": 431
    },
    {
      "question": "Which famous sailor was born in 1758 at Burnham Thorpe in Norfolk?",
      "answer": "Horatio Nelson.",
      "category": "History",
      "_id": 432
    },
    {
      "question": "The doomed ship Titanic had two sister ships. What were their names?",
      "answer": "Brittanic and Olympic",
      "category": "History",
      "_id": 433
    },
    {
      "question": "Was the West German currency introduced in East Germany before or after re-unification in 1990?",
      "answer": "Before",
      "category": "History",
      "_id": 434
    },
    {
      "question": "Who was the command module pilot for Apollo 11 in 1969?",
      "answer": "Michael Collins",
      "category": "History",
      "_id": 435
    },
    {
      "question": "Who was the third man to walk on the moon?",
      "answer": "Charles `Pete` Conrad",
      "category": "History",
      "_id": 436
    },
    {
      "question": "In which city were the 1916 Olympic Games scheduled to take place before being cancelled due to the war?",
      "answer": "Berlin",
      "category": "History",
      "_id": 437
    },
    {
      "question": "In which century d_id the Mary Rose sink?",
      "answer": "16th",
      "category": "History",
      "_id": 438
    },
    {
      "question": "How old was Prince Charles when he was invested as Prince of Wales?",
      "answer": "20 (1st July 1969)",
      "category": "History",
      "_id": 439
    },
    {
      "question": "Who was the second pres_ident of the United States of America?",
      "answer": "John Adams",
      "category": "History",
      "_id": 440
    },
    {
      "question": "Who appeared on a World War I recruitment poster above the words `Your country needs YOU`?",
      "answer": "Lord Kitchener",
      "category": "History",
      "_id": 441
    },
    {
      "question": "How many wives d_id Henry VIII have?",
      "answer": "6",
      "category": "History",
      "_id": 442
    },
    {
      "question": "In which city was the Titanic built?",
      "answer": "Belfast",
      "category": "History",
      "_id": 443
    },
    {
      "question": "What was Blackbeard's origanal name?",
      "answer": "Edward Teach",
      "category": "History",
      "_id": 444
    },
    {
      "question": "With what d_id the CIA reputedly try to assassinate F_idel Castro?",
      "answer": "An exploding cigar",
      "category": "History",
      "_id": 445
    },
    {
      "question": "What was the profession of Wyatt Earp`s s_idekick Doc Hol_iday?",
      "answer": "Dentist",
      "category": "History",
      "_id": 446
    },
    {
      "question": "In terms of land area, what was the largest empire of all time?",
      "answer": "The British Empire",
      "category": "History",
      "_id": 447
    },
    {
      "question": "Genghis Khan founded which empire?",
      "answer": "Mongol empire",
      "category": "History",
      "_id": 448
    },
    {
      "question": "During the Great Plague, what was painted on the front doors of plague-r_idden houses?",
      "answer": "Red crosses",
      "category": "History",
      "_id": 449
    },
    {
      "question": "Where d_id the peaceful Velvet Revolution take place in 1989?",
      "answer": "Czechoslovakia",
      "category": "History",
      "_id": 450
    },
    {
      "question": "Who invented the ball-point pen?",
      "answer": "Laszlo Biro",
      "category": "History",
      "_id": 451
    },
    {
      "question": "When the UN was established in 1945, what d_id it replace?",
      "answer": "The League of Nations",
      "category": "History",
      "_id": 452
    },
    {
      "question": "Who is the only US pres_ident to have served more than two terms in office?",
      "answer": "Franklin D Roosevelt",
      "category": "History",
      "_id": 453
    },
    {
      "question": "By what name is Edward Teach better known?",
      "answer": "Blackbeard",
      "category": "History",
      "_id": 454
    },
    {
      "question": "Which was the first European country to issue banknotes?",
      "answer": "Sweden",
      "category": "History",
      "_id": 455
    },
    {
      "question": "Which famous Greek was a student of Plato and teacher to Alexander the Great?",
      "answer": "Aristotle",
      "category": "History",
      "_id": 456
    },
    {
      "question": "In Egyptian mythology, who was the God of embalming who also watched over the dead?",
      "answer": "Anubis",
      "category": "History",
      "_id": 457
    },
    {
      "question": "In Roman mythology, who was the ruler of the Gods?",
      "answer": "Jupiter",
      "category": "History",
      "_id": 458
    },
    {
      "question": "In Greek mythology, which King was the son of Laius and Jocasta?",
      "answer": "Oedipus",
      "category": "History",
      "_id": 459
    },
    {
      "question": "In Norse mythology, what name was given to the female warriors who carried the bodies of heroes from the battlefield to feast in Valhalla?",
      "answer": "Valkyrie",
      "category": "History",
      "_id": 460
    },
    {
      "question": "What was the name of the first artificial satellite sent into space?",
      "answer": "Sputnik 1",
      "category": "History",
      "_id": 461
    },
    {
      "question": "Who invented the hot air balloon?",
      "answer": "The Montgolfier brothers",
      "category": "History",
      "_id": 462
    },
    {
      "question": "In what year d_id the United States enter the First World War?",
      "answer": "1917",
      "category": "History",
      "_id": 463
    },
    {
      "question": "In which decade d_id America last have four pres_idents? 1850s, 1880s or 1910s?",
      "answer": "1880s",
      "category": "History",
      "_id": 464
    },
    {
      "question": "Who was the first person to sail around the world?",
      "answer": "Ferdinand Magellan",
      "category": "History",
      "_id": 465
    },
    {
      "question": "Which US pres_ident was the first to res_ide in the White House?",
      "answer": "John Adams",
      "category": "History",
      "_id": 466
    },
    {
      "question": "What was the name of the Duke of Wellingtons horse at the Battle of Waterloo?",
      "answer": "Copenhagen",
      "category": "History",
      "_id": 467
    },
    {
      "question": "Which Carthaginian general led his army across the Alps with a contingent of elephants?",
      "answer": "Hannibal",
      "category": "History",
      "_id": 468
    },
    {
      "question": "What Viking is sa_id to have discovered America?",
      "answer": "Eric the Red",
      "category": "History",
      "_id": 469
    },
    {
      "question": "Other than Scapa Flow, where was much of the British fleet protected during World War 2?",
      "answer": "Loch Ewe",
      "category": "History",
      "_id": 470
    },
    {
      "question": "What was Ghandi`s real first name?",
      "answer": "Mohandas",
      "category": "History",
      "_id": 471
    },
    {
      "question": "Who is the only British Prime Minister to be born overseas?",
      "answer": "Andrew Bonar Law",
      "category": "History",
      "_id": 472
    },
    {
      "question": "Before becoming Pres_ident of the United States, George W Bush was govenor of which state?",
      "answer": "Texas",
      "category": "History",
      "_id": 473
    },
    {
      "question": "Who was the oldest to be elected pres_ident of the United States?",
      "answer": "Ronald Reagan",
      "category": "History",
      "_id": 474
    },
    {
      "question": "Who was the first US pres_ident to die whilst in office?",
      "answer": "William Harrison",
      "category": "History",
      "_id": 475
    },
    {
      "question": "Who was pres_ident of the United States during the brief Spanish-American war?",
      "answer": "William McKinley",
      "category": "History",
      "_id": 476
    },
    {
      "question": "What yellow fossilised resin was used as jewellery by the Greeks and Romans?",
      "answer": "Amber",
      "category": "History",
      "_id": 477
    },
    {
      "question": "Who invented the piano?",
      "answer": "Bartolomeo Cristofori",
      "category": "History",
      "_id": 478
    },
    {
      "question": "Who d_id Clementine Ogilvy Hozier marry in 1908?",
      "answer": "Winston Churchill",
      "category": "History",
      "_id": 479
    },
    {
      "question": "Which achievement links Arthur Martin-Leake, Noel Chavasse and Charles Upham?",
      "answer": "The only people to be awarded two Victoria Crosses?",
      "category": "History",
      "_id": 480
    },
    {
      "question": "In which year d_id the English Civil War start?",
      "answer": "1642",
      "category": "History",
      "_id": 481
    },
    {
      "question": "Colonel James Doolittle led the first bombing ra_id on which city during World War II?",
      "answer": "Tokyo",
      "category": "History",
      "_id": 482
    },
    {
      "question": "Born in 1599, who coined the phrase `warts and all` while sitting for a portrait?",
      "answer": "Oliver Cromwell",
      "category": "History",
      "_id": 483
    },
    {
      "question": "When Eugene Cernan and Harrison Schmitt were the last people to walk on the moon, what number was their Apollo mission?",
      "answer": "XVII (17)",
      "category": "History",
      "_id": 484
    },
    {
      "question": "Which World War II action had the code name Operation Chastise?",
      "answer": "The Dambusters Ra_id",
      "category": "History",
      "_id": 485
    },
    {
      "question": "In which war were the most Victoria Crosses awarded?",
      "answer": "First World War",
      "category": "History",
      "_id": 486
    },
    {
      "question": "What was the operational squadron number of the Dambusters?",
      "answer": "617 Squadron",
      "category": "History",
      "_id": 487
    },
    {
      "question": "Before Tony Blair, who was the previous leader of the Labour Party to win a general election?",
      "answer": "Harold Wilson",
      "category": "History",
      "_id": 488
    },
    {
      "question": "Who is the only British Prime Minister to be assassinated?",
      "answer": "Spencer Perceval (in 1812)",
      "category": "History",
      "_id": 489
    },
    {
      "question": "Which country has been ruled by the Grimaldi dynasty for over 700 years?",
      "answer": "Monaco",
      "category": "History",
      "_id": 490
    },
    {
      "question": "What was the name of Lord Nelson`s mistress?",
      "answer": "Emma Hamilton",
      "category": "History",
      "_id": 491
    },
    {
      "question": "Which famous leader once sa_id `I`m still at the crease, but the bowling is more hostile these days`?",
      "answer": "Margaret Thatcher",
      "category": "History",
      "_id": 492
    },
    {
      "question": "What name was given to the Chinese peasant uprising of 1900?",
      "answer": "Boxer Rebellion",
      "category": "History",
      "_id": 493
    },
    {
      "question": "What was the name of England`s wartime code breaking station?",
      "answer": "Bletchley Park",
      "category": "History",
      "_id": 494
    },
    {
      "question": "What was the name of Napoleon`s first wife?",
      "answer": "Josephine",
      "category": "History",
      "_id": 495
    },
    {
      "question": "What is the significance of the dates August 9th 1902, June 23rd 1911, May 12th 1937 and June 2nd 1953?",
      "answer": "They`re Coronation dates",
      "category": "History",
      "_id": 496
    },
    {
      "question": "Which volcano caused the destruction of Pompeii?",
      "answer": "Vesuvius",
      "category": "History",
      "_id": 497
    },
    {
      "question": "Which Apollo moon mission was the first to carry a lunar rover vehicle?",
      "answer": "Apollo 15",
      "category": "Science and Nature",
      "_id": 498
    },
    {
      "question": "The scientific unit LUMEN is used in the measurement of what?",
      "answer": "Light",
      "category": "Science and Nature",
      "_id": 499
    },
    {
      "question": "Which organ of the body is affected by Bright's Disease?",
      "answer": "K_idney",
      "category": "Science and Nature",
      "_id": 500
    },
    {
      "question": "What is the boiling point of water using the scientific kelvin scale of temperature measurement",
      "answer": "373k - kelvins",
      "category": "Science and Nature",
      "_id": 501
    },
    {
      "question": "What is the lightest metal under standard conditions?",
      "answer": "Lithium",
      "category": "Science and Nature",
      "_id": 502
    },
    {
      "question": "How many surfaces does a Mobius strip have?",
      "answer": "One",
      "category": "Science and Nature",
      "_id": 503
    },
    {
      "question": "How many wings does a bee have?",
      "answer": "Four",
      "category": "Science and Nature",
      "_id": 504
    },
    {
      "question": "What is the collective noun for a group of moles?",
      "answer": "A labour",
      "category": "Science and Nature",
      "_id": 505
    },
    {
      "question": "Which breed of dog has breeds called Welsh, Scottish and Irish?",
      "answer": "Terrier",
      "category": "Science and Nature",
      "_id": 506
    },
    {
      "question": "What is the common name for the medical condition epistaxis?",
      "answer": "Nose bleed",
      "category": "Science and Nature",
      "_id": 507
    },
    {
      "question": "How is the chaparral cock, a ground cuckoo native of Mexico, better known?",
      "answer": "The Roadrunner",
      "category": "Science and Nature",
      "_id": 508
    },
    {
      "question": "What sort of creature is a cassowary?",
      "answer": "A (flightless) bird",
      "category": "Science and Nature",
      "_id": 509
    },
    {
      "question": "What is made using soda, lime and silica?",
      "answer": "Glass",
      "category": "Science and Nature",
      "_id": 510
    },
    {
      "question": "Who created Wikipedia on the World W_ide Web?",
      "answer": "Jimmy Wales",
      "category": "Science and Nature",
      "_id": 511
    },
    {
      "question": "Common, Water and Pygmy are types of which British mammal?",
      "answer": "Shrew",
      "category": "Science and Nature",
      "_id": 512
    },
    {
      "question": "Where in the human body would you find the Islets of Langerhans?",
      "answer": "The pancreas",
      "category": "Science and Nature",
      "_id": 513
    },
    {
      "question": "What is the only bone in the human body that is not attached to any other bone?",
      "answer": "The hyo_id",
      "category": "Science and Nature",
      "_id": 514
    },
    {
      "question": "What mineral has the lowest number on the Mohs scale?",
      "answer": "Talc",
      "category": "Science and Nature",
      "_id": 515
    },
    {
      "question": "What mineral has the highest number on the Mohs scale?",
      "answer": "Diamond",
      "category": "Science and Nature",
      "_id": 516
    },
    {
      "question": "What is the more common name for the medical condition of periorbital hematoma?",
      "answer": "Black eye",
      "category": "Science and Nature",
      "_id": 517
    },
    {
      "question": "What is the common name for the liqu_id secreted by your lacrimal glands?",
      "answer": "Tears",
      "category": "Science and Nature",
      "_id": 518
    },
    {
      "question": "Who discovered the element Oxygen?",
      "answer": "Joseph Priestley",
      "category": "Science and Nature",
      "_id": 519
    },
    {
      "question": "What is the collective name for a group of sea cucumbers?",
      "answer": "A pickle",
      "category": "Science and Nature",
      "_id": 520
    },
    {
      "question": "Where in the body would you find an astrocyte?",
      "answer": "The brain",
      "category": "Science and Nature",
      "_id": 521
    },
    {
      "question": "What is measured on the Mohs scale?",
      "answer": "The hardness of minerals",
      "category": "Science and Nature",
      "_id": 522
    },
    {
      "question": "What are Grey Dagger, Forester and Dingy Footman species of?",
      "answer": "Moths",
      "category": "Science and Nature",
      "_id": 523
    },
    {
      "question": "Which type of animals find their way home using magnetism?",
      "answer": "Molluscs",
      "category": "Science and Nature",
      "_id": 524
    },
    {
      "question": "What was the name of Yuri Gagarin`s space ship?",
      "answer": "Vostok 1",
      "category": "Science and Nature",
      "_id": 525
    },
    {
      "question": "The word HENNA can be made using the periodic symbols of which three elements?",
      "answer": "(He) Helium (N) Nitrogen (Na) Sodium",
      "category": "Science and Nature",
      "_id": 526
    },
    {
      "question": "What is the more common name for the type of bear called the Ursus Maritimus?",
      "answer": "Polar bear",
      "category": "Science and Nature",
      "_id": 527
    },
    {
      "question": "What is the hardest natural substance?",
      "answer": "diamond",
      "category": "Science and Nature",
      "_id": 528
    },
    {
      "question": "Nephrology is the study of which internal organ?",
      "answer": "The k_idney",
      "category": "Science and Nature",
      "_id": 529
    },
    {
      "question": "Where on a horse do you find its poll?",
      "answer": "Between the ears",
      "category": "Science and Nature",
      "_id": 530
    },
    {
      "question": "What does MRSA stand for?",
      "answer": "Methicillin Resistant Staphyloccocus Aureus",
      "category": "Science and Nature",
      "_id": 531
    },
    {
      "question": "Which sp_ider gets its name from when the female sometimes eats the male after mating?",
      "answer": "Black W_idow Sp_ider",
      "category": "Science and Nature",
      "_id": 532
    },
    {
      "question": "What is ylang-ylang - a herb or a flower?",
      "answer": "Flower",
      "category": "Science and Nature",
      "_id": 533
    },
    {
      "question": "Where in the human body would you find Island of Reils?",
      "answer": "The brain",
      "category": "Science and Nature",
      "_id": 534
    },
    {
      "question": "What is the hardest natural substance?",
      "answer": "Diamond",
      "category": "Science and Nature",
      "_id": 535
    },
    {
      "question": "What is the process called in which birds lose their feathers?",
      "answer": "Moulting",
      "category": "Science and Nature",
      "_id": 536
    },
    {
      "question": "What is the only bird that is capable of seeing the colour blue?",
      "answer": "The owl",
      "category": "Science and Nature",
      "_id": 537
    },
    {
      "question": "What is the only animal that cannot jump?",
      "answer": "Elephant",
      "category": "Science and Nature",
      "_id": 538
    },
    {
      "question": "From the Sun, what is the name of the nearest star?",
      "answer": "Proxima Centauri",
      "category": "Science and Nature",
      "_id": 539
    },
    {
      "question": "In computing what does the abbreviation U.S.B. stand for?",
      "answer": "Universal Serial Bus",
      "category": "Science and Nature",
      "_id": 540
    },
    {
      "question": "What does the information technology term RAM stand for?",
      "answer": "Random Access Memory",
      "category": "Science and Nature",
      "_id": 541
    },
    {
      "question": "What is the chemical symbol for Arsenic?",
      "answer": "As",
      "category": "Science and Nature",
      "_id": 542
    },
    {
      "question": "What is the largest internal human organ?",
      "answer": "The liver",
      "category": "Science and Nature",
      "_id": 543
    },
    {
      "question": "Used in satellite navigation, what do the initials in the term GPS stand for?",
      "answer": "Global Positioning System",
      "category": "Science and Nature",
      "_id": 544
    },
    {
      "question": "What is the main effect of vitamin K deficiency?",
      "answer": "Bleeding",
      "category": "Science and Nature",
      "_id": 545
    },
    {
      "question": "Little, Eurasian Eagle and Burrowing are all types of which species of bird?",
      "answer": "Owl",
      "category": "Science and Nature",
      "_id": 546
    },
    {
      "question": "What is the lightest chemical element?",
      "answer": "Hydrogen",
      "category": "Science and Nature",
      "_id": 547
    },
    {
      "question": "What is the collective term for a group of racoons?",
      "answer": "A nursery",
      "category": "Science and Nature",
      "_id": 548
    },
    {
      "question": "What is the collective term for a group of racehorses?",
      "answer": "A string of racehorses",
      "category": "Science and Nature",
      "_id": 549
    },
    {
      "question": "To the nearest whole number, what percentage of the Earth's atmosphere is nitrogen?",
      "answer": "78%",
      "category": "Science and Nature",
      "_id": 550
    },
    {
      "question": "In the world of the internet, what do the letters HTTP stand for?",
      "answer": "Hyper Text Transfer Protocol",
      "category": "Science and Nature",
      "_id": 551
    },
    {
      "question": "What gas do all fuels need in order to burn?",
      "answer": "Oxygen",
      "category": "Science and Nature",
      "_id": 552
    },
    {
      "question": "By what name is the Sodium Chlor_ide more commonly known?",
      "answer": "Salt",
      "category": "Science and Nature",
      "_id": 553
    },
    {
      "question": "Sand consists of silicon and what other element?",
      "answer": "Oxygen",
      "category": "Science and Nature",
      "_id": 554
    },
    {
      "question": "What is the brightest star in the northern hemisphere?",
      "answer": "Sirius",
      "category": "Science and Nature",
      "_id": 555
    },
    {
      "question": "Common, Arctic and Sooty are all varieties of which type of bird?",
      "answer": "Tern",
      "category": "Science and Nature",
      "_id": 556
    },
    {
      "question": "Worcester Black, Arlington Pippin and Bartlett are all varieties of which type of fruit?",
      "answer": "Pear",
      "category": "Science and Nature",
      "_id": 557
    },
    {
      "question": "Where in the human body would you find the scapho_id bone?",
      "answer": "In the wrist",
      "category": "Science and Nature",
      "_id": 558
    },
    {
      "question": "The does the chemical symbol Pb stand for?",
      "answer": "Lead",
      "category": "Science and Nature",
      "_id": 559
    },
    {
      "question": "How many stomachs does a cow have?",
      "answer": "Four",
      "category": "Science and Nature",
      "_id": 560
    },
    {
      "question": "Which bird lays the biggest egg in the world?",
      "answer": "The ostrich",
      "category": "Science and Nature",
      "_id": 561
    },
    {
      "question": "What is the name of the pouch in which marsupials carry their young?",
      "answer": "The marsupium",
      "category": "Science and Nature",
      "_id": 562
    },
    {
      "question": "What African animal kills the most people?",
      "answer": "The Crocodile",
      "category": "Science and Nature",
      "_id": 563
    },
    {
      "question": "Which bird can run the fastest?",
      "answer": "Ostrich",
      "category": "Science and Nature",
      "_id": 564
    },
    {
      "question": "What is the layer of the atmosphere closest to the earth`s surface called?",
      "answer": "The Troposphere",
      "category": "Science and Nature",
      "_id": 565
    },
    {
      "question": "What nuclear process takes place in an atomic bomb?",
      "answer": "Fission",
      "category": "Science and Nature",
      "_id": 566
    },
    {
      "question": "What is the only native North American marsupial?",
      "answer": "The Opossum",
      "category": "Science and Nature",
      "_id": 567
    },
    {
      "question": "Which leaves form the diet of the silkworm?",
      "answer": "Mulberry",
      "category": "Science and Nature",
      "_id": 568
    },
    {
      "question": "True or False: Sharks do not blink?",
      "answer": "True",
      "category": "Science and Nature",
      "_id": 569
    },
    {
      "question": "True or False: All polar bears are left-handed?",
      "answer": "True",
      "category": "Science and Nature",
      "_id": 570
    },
    {
      "question": "What is the condition of Nitrogen Embolism more commonly known as?",
      "answer": "The bends",
      "category": "Science and Nature",
      "_id": 571
    },
    {
      "question": "What is the more common name for the scapula?",
      "answer": "The shoulder blade",
      "category": "Science and Nature",
      "_id": 572
    },
    {
      "question": "Who invented a vaccination for smallpox?",
      "answer": "Edward Jenner",
      "category": "Science and Nature",
      "_id": 573
    },
    {
      "question": "An orch_idectomy is the surgical removal of what?",
      "answer": "Testicles",
      "category": "Science and Nature",
      "_id": 574
    },
    {
      "question": "What does LASER stand for?",
      "answer": "Light Amplification by Stimulated Emission of Radiation",
      "category": "Science and Nature",
      "_id": 575
    },
    {
      "question": "What does `http` stand for, as used in website addresses?",
      "answer": "Hyper Text Transfer Protocol",
      "category": "Science and Nature",
      "_id": 576
    },
    {
      "question": "What name is given to a cow that has not had a calf?",
      "answer": "A Heifer",
      "category": "Science and Nature",
      "_id": 577
    },
    {
      "question": "Which is the only vitaman not to be found in an egg?",
      "answer": "Vitamin C",
      "category": "Science and Nature",
      "_id": 578
    },
    {
      "question": "If a sow is a female pig, what is a male pig called?",
      "answer": "A boar",
      "category": "Science and Nature",
      "_id": 579
    },
    {
      "question": "Mount Wilson in California, S_iding Spring in Australia and Mauna Kea in Hawaii. What`s the scientific connection?",
      "answer": "They are astronomical observatories.",
      "category": "Science and Nature",
      "_id": 580
    },
    {
      "question": "How many claws does a house cat have?",
      "answer": "18",
      "category": "Science and Nature",
      "_id": 581
    },
    {
      "question": "If cats are `feline`, which animals are `ovine`?",
      "answer": "Sheep",
      "category": "Science and Nature",
      "_id": 582
    },
    {
      "question": "What is the name given to the green alkaline flu_id produced by the liver?",
      "answer": "Bile",
      "category": "Science and Nature",
      "_id": 583
    },
    {
      "question": "What word describes substances that can be broken down by biological action?",
      "answer": "Biodegradable",
      "category": "Science and Nature",
      "_id": 584
    },
    {
      "question": "What is the national flower of Austria?",
      "answer": "Edelweiss",
      "category": "Science and Nature",
      "_id": 585
    },
    {
      "question": "Where on the human body is the skin the thinnest?",
      "answer": "Eyel_ids",
      "category": "Science and Nature",
      "_id": 586
    },
    {
      "question": "The Sea Parrot is more usually known by which more common name?",
      "answer": "Puffin",
      "category": "Science and Nature",
      "_id": 587
    },
    {
      "question": "How many eyes does a bee have?",
      "answer": "5",
      "category": "Science and Nature",
      "_id": 588
    },
    {
      "question": "How many pairs of chromosomes are there in the human body?",
      "answer": "23",
      "category": "Science and Nature",
      "_id": 589
    },
    {
      "question": "What is the art of clipping hedges into various shapes called?",
      "answer": "Topiary",
      "category": "Science and Nature",
      "_id": 590
    },
    {
      "question": "What is the furthest planet from the sun?",
      "answer": "Pluto",
      "category": "Science and Nature",
      "_id": 591
    },
    {
      "question": "What is the tallest grass in the world?",
      "answer": "Bamboo",
      "category": "Science and Nature",
      "_id": 592
    },
    {
      "question": "What is the name of the first test tube baby born in 1978?",
      "answer": "Louise Brown",
      "category": "Science and Nature",
      "_id": 593
    },
    {
      "question": "How is the star Polaris better known?",
      "answer": "The North Star",
      "category": "Science and Nature",
      "_id": 594
    },
    {
      "question": "In the human body, what are you born with 23 pairs of?",
      "answer": "Chromosomes",
      "category": "Science and Nature",
      "_id": 595
    },
    {
      "question": "What is the only animal believed to hunt humans actively?",
      "answer": "Polar Bear",
      "category": "Science and Nature",
      "_id": 596
    },
    {
      "question": "What was the name of the second NASA probe to land on Mars?",
      "answer": "Opportunity",
      "category": "Science and Nature",
      "_id": 597
    },
    {
      "question": "Who lit the Olympic flame at the 1996 Atlanta Olympics?",
      "answer": "Muhammad Ali",
      "category": "Sport",
      "_id": 598
    },
    {
      "question": "What is the highest break that can be achieved in a game of snooker?",
      "answer": "155 (potting a free ball and then a black, followed by 15 reds, 15 blacks & all the colours)",
      "category": "Sport",
      "_id": 599
    },
    {
      "question": "What colour is the bullseye on a standard dartboard?",
      "answer": "Red",
      "category": "Sport",
      "_id": 600
    },
    {
      "question": "How many rounds are there in an Olympic boxing match?",
      "answer": "4",
      "category": "Sport",
      "_id": 601
    },
    {
      "question": "What is the only Central American country in which baseball, not soccer, is the people's favourite sport?",
      "answer": "Nicaragua",
      "category": "Sport",
      "_id": 602
    },
    {
      "question": "Charlotte Edwards led England`s women to World Cup glory in which sport in March 2009?",
      "answer": "Cricket",
      "category": "Sport",
      "_id": 603
    },
    {
      "question": "Who won the 2009 Rugby World Sevens Cup?",
      "answer": "Wales",
      "category": "Sport",
      "_id": 604
    },
    {
      "question": "Who is the only player to win a Champion`s League medal, the Premiership and the FA Cup, and to be relegated from the Premiership without going on to play in the Championship?",
      "answer": "Kanu",
      "category": "Sport",
      "_id": 605
    },
    {
      "question": "With which club d_id Dav_id Beckham make his football league debut?",
      "answer": "Preston North End",
      "category": "Sport",
      "_id": 606
    },
    {
      "question": "In what year and in what country was the first FIFA world cup held?",
      "answer": "1930, Uruguay",
      "category": "Sport",
      "_id": 607
    },
    {
      "question": "In which sport are the Thomas Cup, Uber Cup and Sudiman Cup tournaments played?",
      "answer": "Badminton",
      "category": "Sport",
      "_id": 608
    },
    {
      "question": "How many players make up an Australian rules football team?",
      "answer": "18",
      "category": "Sport",
      "_id": 609
    },
    {
      "question": "What is the only English league football team with no letters in common with the word `mackeral`?",
      "answer": "Swindon Town",
      "category": "Sport",
      "_id": 610
    },
    {
      "question": "In which event would you compete for the Borg Warner Cup?",
      "answer": "The Indianapolis 500",
      "category": "Sport",
      "_id": 611
    },
    {
      "question": "In the 1966 World Cup, matches were played at two London venues. Wembley was one, but what was the other?",
      "answer": "White City",
      "category": "Sport",
      "_id": 612
    },
    {
      "question": "Which category of sports men or women have been voted BBC Sports Personality of the Year the most times? Footballers, athletes or motor racing drivers?",
      "answer": "Athletes",
      "category": "Sport",
      "_id": 613
    },
    {
      "question": "When world boomerang throwing championships were held from 1981, which country won it in 12 out of the first 13 years?",
      "answer": "USA (Australia only won it once)",
      "category": "Sport",
      "_id": 614
    },
    {
      "question": "Which US city is home to sporting teams known as the Browns, the Cavaliers and the Indians?",
      "answer": "Cleveland (NFL, NBA and MLB teams)",
      "category": "Sport",
      "_id": 615
    },
    {
      "question": "After which sporting hero was Formula 1 driver Lewis Hamilton named?",
      "answer": "Carl Lewis",
      "category": "Sport",
      "_id": 616
    },
    {
      "question": "Name the athletes who carried Great Britain`s flag into the Beijing Olympic Stadium at the start and end of the 2008 Summer Olympics.",
      "answer": "Mark Foster (swimmer) and Chris Hoy (cyclist)",
      "category": "Sport",
      "_id": 617
    },
    {
      "question": "What official number Olympiad will London`s Olympic Games be in 2012?",
      "answer": "XXX (30) (They are sequentially numbered every 4 years since 1896 whether cancelled or not)",
      "category": "Sport",
      "_id": 618
    },
    {
      "question": "Which flower is the m_iddle name of footballer turned TV presenter Bob Wilson?",
      "answer": "Primrose",
      "category": "Sport",
      "_id": 619
    },
    {
      "question": "How is soccer superstar Ricardo Izecson dos Santos Leite better known?",
      "answer": "Kaka",
      "category": "Sport",
      "_id": 620
    },
    {
      "question": "What was unusual about the Formula One World Drivers' Championship awarded to Jochen Rindt in 1970?",
      "answer": "It was awarded posthumously (he died in practice for the Italian Grand Prix but already had enough points to win the season)",
      "category": "Sport",
      "_id": 621
    },
    {
      "question": "How many successive pots must a snooker player make to score a 147 break?",
      "answer": "36",
      "category": "Sport",
      "_id": 622
    },
    {
      "question": "Who were the first two teams to compete in an international cricket match?",
      "answer": "USA and Canada (1844)",
      "category": "Sport",
      "_id": 623
    },
    {
      "question": "What sized ball is a game of netball played with?",
      "answer": "Size 5",
      "category": "Sport",
      "_id": 624
    },
    {
      "question": "Who won the Rugby World Cup in 2007?",
      "answer": "South Africa",
      "category": "Sport",
      "_id": 625
    },
    {
      "question": "How much is a try worth in rugby league?",
      "answer": "4 points",
      "category": "Sport",
      "_id": 626
    },
    {
      "question": "In golf, what does a stimpmeter measure?",
      "answer": "The pace of the greens",
      "category": "Sport",
      "_id": 627
    },
    {
      "question": "Which soccer club`s supporters are known as the Toon Army?",
      "answer": "Newcastle Utd",
      "category": "Sport",
      "_id": 628
    },
    {
      "question": "What is the nickname of Grimsby Town Football Club?",
      "answer": "The Mariners",
      "category": "Sport",
      "_id": 629
    },
    {
      "question": "When Steve McClaren became Enland manager who replaced him at his Premiership club?",
      "answer": "Gareth Southgate (at M_iddlesbrough)",
      "category": "Sport",
      "_id": 630
    },
    {
      "question": "What was Mohammad Ali`s birth name?",
      "answer": "Cassius Clay",
      "category": "Sport",
      "_id": 631
    },
    {
      "question": "What was the nickname given to the famous boxing match between Mohammad Ali and Joe Frazier in1975?",
      "answer": "Thrilla in Manila",
      "category": "Sport",
      "_id": 632
    },
    {
      "question": "What is the maximum number of horses allowed to run in the Grand National?",
      "answer": "40",
      "category": "Sport",
      "_id": 633
    },
    {
      "question": "Which football team are known as the Rosso-nera or Rosso-Neri?",
      "answer": "AC Milan",
      "category": "Sport",
      "_id": 634
    },
    {
      "question": "Which two footall teams always play in a 2-5-3 formation?",
      "answer": "Table football teams",
      "category": "Sport",
      "_id": 635
    },
    {
      "question": "Which is the only horse to have won English, Scotish and Welsh Grand Nationals?",
      "answer": "Earth Summit",
      "category": "Sport",
      "_id": 636
    },
    {
      "question": "Why is Cardiff the only Welsh football team to have triangular corner flags?",
      "answer": "They are the only Welsh team to have won the F.A. cup",
      "category": "Sport",
      "_id": 637
    },
    {
      "question": "From which football club d_id Arsenal sign m_idfielder Cesc Fabregas?",
      "answer": "Barcelona",
      "category": "Sport",
      "_id": 638
    },
    {
      "question": "Which football team are nicknamed the Rams?",
      "answer": "Derby County",
      "category": "Sport",
      "_id": 639
    },
    {
      "question": "What colour are the 5 Olympic rings?",
      "answer": "Blue, Yellow, Black, Green & Red",
      "category": "Sport",
      "_id": 640
    },
    {
      "question": "Which animal is South African rugby union player Bryan Habana often compared to?",
      "answer": "Cheetah",
      "category": "Sport",
      "_id": 641
    },
    {
      "question": "Which rugby union team won the 2007 EDF energy cup?",
      "answer": "Leicester tigers",
      "category": "Sport",
      "_id": 642
    },
    {
      "question": "Who won the Golden Boot at the 1986 football World Cup?",
      "answer": "Gary Lineker",
      "category": "Sport",
      "_id": 643
    },
    {
      "question": "Which football team has the nickname of the Bluebirds?",
      "answer": "Cardiff City",
      "category": "Sport",
      "_id": 644
    },
    {
      "question": "How many faults does a competitor get if they knock a fence down in showjumping?",
      "answer": "Four",
      "category": "Sport",
      "_id": 645
    },
    {
      "question": "Which football team has the nickname of `the Blades`?",
      "answer": "Sheffield United",
      "category": "Sport",
      "_id": 646
    },
    {
      "question": "With which sport would you associate Nick Skelton?",
      "answer": "Show Jumping",
      "category": "Sport",
      "_id": 647
    },
    {
      "question": "Which 5 American Football teams in the NFL use a bird for their name?",
      "answer": "Philadelphia Eagles, Baltimore Ravens, Seattle Seahawks, Arizona Cardinals and Atlanta Falcons",
      "category": "Sport",
      "_id": 648
    },
    {
      "question": "Which South American country will host the 2014 FIFA World Cup?",
      "answer": "Brazil",
      "category": "Sport",
      "_id": 649
    },
    {
      "question": "Name four race courses in the UK that don`t have any of letters from the word `race` in their name?",
      "answer": "Plumpton, Ludlow, Goodwood and Huntingdon",
      "category": "Sport",
      "_id": 650
    },
    {
      "question": "As at 2008, how many modern Olympiads have taken place?",
      "answer": "28",
      "category": "Sport",
      "_id": 651
    },
    {
      "question": "With which sport do you associate the English seed merchant Samuel Ryder?",
      "answer": "Golf (he commissioned the Ryder Cup)",
      "category": "Sport",
      "_id": 652
    },
    {
      "question": "How many different scoring areas are there on a standard dart board?",
      "answer": "82",
      "category": "Sport",
      "_id": 653
    },
    {
      "question": "Which British boxer went the distance with Muhammad Ali?",
      "answer": "Joe Bugner",
      "category": "Sport",
      "_id": 654
    },
    {
      "question": "Who or what are the band Kaiser Chiefs named after?",
      "answer": "A South African football club",
      "category": "Sport",
      "_id": 655
    },
    {
      "question": "How many times has the host nation won the football World Cup?",
      "answer": "6 (Uruguay 1930, Italy 1934, England 1966, West Germany 1974, Argentina 1978, France 1998)",
      "category": "Sport",
      "_id": 656
    },
    {
      "question": "What is the diameter of a basketball hoop? 12 inches, 18 inches or 24 inches?",
      "answer": "18 inches",
      "category": "Sport",
      "_id": 657
    },
    {
      "question": "How many events are there in a decathlon?",
      "answer": "10",
      "category": "Sport",
      "_id": 658
    },
    {
      "question": "At which racecourse is the Derby and the Oaks traditionally run?",
      "answer": "Epsom",
      "category": "Sport",
      "_id": 659
    },
    {
      "question": "Wembley finally hosted an FA Cup fin 2007, but which two teams were the last to compete in the FA Cup final at the old Wembley?",
      "answer": "Chelsea and Aston Villa (in 2000)",
      "category": "Sport",
      "_id": 660
    },
    {
      "question": "In cycling, what colour jersey is awarded to the leader in a stage race of the Tour de France?",
      "answer": "Yellow",
      "category": "Sport",
      "_id": 661
    },
    {
      "question": "Cyril the Swan is the mascot for which football club?",
      "answer": "Swansea",
      "category": "Sport",
      "_id": 662
    },
    {
      "question": "Which Rugby League team has the nickname the Rams?",
      "answer": "Dewsbury",
      "category": "Sport",
      "_id": 663
    },
    {
      "question": "In which country are the first-class cricket s_ides United Bank and National Bank based?",
      "answer": "Pakistan",
      "category": "Sport",
      "_id": 664
    },
    {
      "question": "The Nursery End, the Pavilion End and St John`s Road are all linked with which sporting ground?",
      "answer": "Lords",
      "category": "Sport",
      "_id": 665
    },
    {
      "question": "Which is the only racecourse in Yorkshire not to host flat racing?",
      "answer": "Wetherby",
      "category": "Sport",
      "_id": 666
    },
    {
      "question": "In which sport may a match be dec_ide using the Duckworth Lewis method?",
      "answer": "Cricket (one day)",
      "category": "Sport",
      "_id": 667
    },
    {
      "question": "Who became the first footballer to receive a knighthood?",
      "answer": "Stanley Matthews",
      "category": "Sport",
      "_id": 668
    },
    {
      "question": "Which football team has its ground closest to the river Mersey?",
      "answer": "Stockport County",
      "category": "Sport",
      "_id": 669
    },
    {
      "question": "In horse racing, what betting odds are known as a `carpet`?",
      "answer": "3-1",
      "category": "Sport",
      "_id": 670
    },
    {
      "question": "Which rugby super league team have the nickname `Wolves`?",
      "answer": "Warrington",
      "category": "Sport",
      "_id": 671
    },
    {
      "question": "Sl_ider, sacrifice fly and R.B.I. are all terms used in which sport?",
      "answer": "Baseball",
      "category": "Sport",
      "_id": 672
    },
    {
      "question": "Which sport can`t you play left handed?",
      "answer": "Polo",
      "category": "Sport",
      "_id": 673
    },
    {
      "question": "Which English League club plays football at Irthlingborough?",
      "answer": "Rushen and Diamonds",
      "category": "Sport",
      "_id": 674
    },
    {
      "question": "Which British club plays football at York Street?",
      "answer": "Boston United",
      "category": "Sport",
      "_id": 675
    },
    {
      "question": "Who won the Golden boot at the 1974 football World Cup?",
      "answer": "Grzegorz Lato",
      "category": "Sport",
      "_id": 676
    },
    {
      "question": "As at 2006, how many times have Liverpool FC won the European Cup / Champions League?",
      "answer": "5",
      "category": "Sport",
      "_id": 677
    },
    {
      "question": "In 1744, which British golf course established the first golf club?",
      "answer": "Muirfield",
      "category": "Sport",
      "_id": 678
    },
    {
      "question": "What football club d_id Sir Matt Busby sign for at the age of 17?",
      "answer": "Manchester City",
      "category": "Sport",
      "_id": 679
    },
    {
      "question": "In which sport might you see the two teams defending goals of different sizes?",
      "answer": "Water Polo (the goal in the shallow end can be higher)",
      "category": "Sport",
      "_id": 680
    },
    {
      "question": "Name the footballer at club level who has played along s_ide Bobby Moore, Liam Brady and Alan Shearer?",
      "answer": "Tony Gale",
      "category": "Sport",
      "_id": 681
    },
    {
      "question": "Steve McLaren was manager of which football club immediately before being appointed England manager?",
      "answer": "M_iddlesbrough",
      "category": "Sport",
      "_id": 682
    },
    {
      "question": "Which Marquis of Queensbury formulated the rules of boxing? The 1st, 4th or 8th?",
      "answer": "8th",
      "category": "Sport",
      "_id": 683
    },
    {
      "question": "Which sport uses a piece of equipment that is 5 foot w_ide and 9 foot long?",
      "answer": "Table Tennis",
      "category": "Sport",
      "_id": 684
    },
    {
      "question": "As at 2006, who was the last european to win the Tour de France?",
      "answer": "Marco Pantani (in 1998)",
      "category": "Sport",
      "_id": 685
    },
    {
      "question": "At the end of the 2005/06 Premiership season, which football team had the stadium with the highest capacity?",
      "answer": "Manchester United (Old Trafford - 76,000)",
      "category": "Sport",
      "_id": 686
    },
    {
      "question": "In what sport do players take long and short corners?",
      "answer": "Hockey",
      "category": "Sport",
      "_id": 687
    },
    {
      "question": "Which player scored England`s first goal in the 2006 World Cup?",
      "answer": "Carlos Gamarra (own goal)",
      "category": "Sport",
      "_id": 688
    },
    {
      "question": "Durham County Cricket Club and M_iddlesbrough Football Club both have stadiums called what?",
      "answer": "The Rivers_ide",
      "category": "Sport",
      "_id": 689
    },
    {
      "question": "Who is the oldest man to score in the final stages of a World Cup and for which country?",
      "answer": "Roger Milla of Cameroon (He was 42 when he scored against Russia in 1994)",
      "category": "Sport",
      "_id": 690
    },
    {
      "question": "Who were the last team to be runners-up in 2 consecutive World Cups?",
      "answer": "West Germany (in 1982 and 1986)",
      "category": "Sport",
      "_id": 691
    },
    {
      "question": "Which 2 teams contested the only World Cup final to end 0-0 before penalties?",
      "answer": "Brazil and Italy (1994 in USA)",
      "category": "Sport",
      "_id": 692
    },
    {
      "question": "Which is the only non European country to host the World Cup more than once?",
      "answer": "Mexico (in 1970 and 1986)",
      "category": "Sport",
      "_id": 693
    },
    {
      "question": "Why was the 2006 Superbowl larger than usual?",
      "answer": "As it was the 40th Superbowl it was called `Superbowl XL`",
      "category": "Sport",
      "_id": 694
    },
    {
      "question": "Who became World Professional Snooker Champion for the first time in 2006?",
      "answer": "Graeme Dott",
      "category": "Sport",
      "_id": 695
    },
    {
      "question": "Between which two football teams was the first ever penalty shoot out to dec_ide a competitive match?",
      "answer": "Hull City and Manchester United",
      "category": "Sport",
      "_id": 696
    },
    {
      "question": "Which England footballer of the 1970s had the nickname Crazy Horse?",
      "answer": "Emlyn Hughes",
      "category": "Sport",
      "_id": 697
    },
    {
      "question": "What is the name of the cafe in Coronation Street?",
      "answer": "Roy's Rolls",
      "category": "Film and TV",
      "_id": 698
    },
    {
      "question": "By number of films made which country has the largest film industry?",
      "answer": "India",
      "category": "Film and TV",
      "_id": 699
    },
    {
      "question": "What song does the main character wake up to every morning in Groundhog Day?",
      "answer": "I Got You Babe (by Sonny and Cher)",
      "category": "Film and TV",
      "_id": 700
    },
    {
      "question": "Which Hasbro `action figure` got its name from a Robert Mitchum film?",
      "answer": "G.I. Joe",
      "category": "Film and TV",
      "_id": 701
    },
    {
      "question": "In the Star Wars films, which two actors played Obi Wan Kenobi?",
      "answer": "Alec Guiness and Ewan McGregor",
      "category": "Film and TV",
      "_id": 702
    },
    {
      "question": "Anyone Can Fall In Love was a chart hit set to the theme tune of which TV show?",
      "answer": "EastEnders",
      "category": "Film and TV",
      "_id": 703
    },
    {
      "question": "Who is the only character to appear in the first ever Coronation Street who is still in the show as at 2009?",
      "answer": "Ken Barlow",
      "category": "Film and TV",
      "_id": 704
    },
    {
      "question": "Who is the host of the TV show Q.I.?",
      "answer": "Stephen Fry",
      "category": "Film and TV",
      "_id": 705
    },
    {
      "question": "The film Black Hawk Down was loosely based on a true inc_ident that took place in 1993 in which country?",
      "answer": "Somalia - (two helicopters were shot down by rocket propelled grenades)",
      "category": "Film and TV",
      "_id": 706
    },
    {
      "question": "Which actress, born in 1916, had her legs insured by 20th Century Fox for one million dollars?",
      "answer": "Betty Grable",
      "category": "Film and TV",
      "_id": 707
    },
    {
      "question": "Velma Kelly and Roxie Hart are the protagonists of which Oscar winning movie?",
      "answer": "Chicago",
      "category": "Film and TV",
      "_id": 708
    },
    {
      "question": "As at 2009, what is the last Best Picture Oscar winning film to also win Best Actor and Best Actress Oscars?",
      "answer": "The Silence Of The Lambs",
      "category": "Film and TV",
      "_id": 709
    },
    {
      "question": "What is the name of Postman Pat`s pet cat?",
      "answer": "Jess",
      "category": "Film and TV",
      "_id": 710
    },
    {
      "question": "In which 1951 film d_id Fred Astaire appear to dance on the ceiling?",
      "answer": "Royal Wedding",
      "category": "Film and TV",
      "_id": 711
    },
    {
      "question": "Who played Jane opposite Johnny Weissmuller`s Tarzan in 1932?",
      "answer": "Maureen O`Sullivan in Tarzan The Ape Man",
      "category": "Film and TV",
      "_id": 712
    },
    {
      "question": "What was the breed of US detective Columbo`s dog?",
      "answer": "Basset hound",
      "category": "Film and TV",
      "_id": 713
    },
    {
      "question": "Inspector Morse actor John Thaw was married to which actress at the time of his death in 2001?",
      "answer": "Sheila Hancock",
      "category": "Film and TV",
      "_id": 714
    },
    {
      "question": "Which Scottish actress played the TV character Supergran?",
      "answer": "Gudrun Ure",
      "category": "Film and TV",
      "_id": 715
    },
    {
      "question": "In TV show Button Moon, what was the name of Mr Spoon`s daughter?",
      "answer": "Tina Teaspoon",
      "category": "Film and TV",
      "_id": 716
    },
    {
      "question": "In TV show Rentaghost, Sue Nicolls played which character?",
      "answer": "Nadia Popov",
      "category": "Film and TV",
      "_id": 717
    },
    {
      "question": "In the TV show Family Guy, what is the name of the Griffins` lecherous neighbour?",
      "answer": "Glenn Quagmire",
      "category": "Film and TV",
      "_id": 718
    },
    {
      "question": "What were the character names of the two hitmen in Pulp Fiction?",
      "answer": "Vincent Vega and Jules Winnfield",
      "category": "Film and TV",
      "_id": 719
    },
    {
      "question": "How many boxes are used in the UK version of Deal Or No Deal?",
      "answer": "22",
      "category": "Film and TV",
      "_id": 720
    },
    {
      "question": "Sicknote was the nickname of a character in which TV series?",
      "answer": "London`s Burning",
      "category": "Film and TV",
      "_id": 721
    },
    {
      "question": "Which was the first colour film to win aBest Picture Oscar?",
      "answer": "Gone With The Wind (in 1939)",
      "category": "Film and TV",
      "_id": 722
    },
    {
      "question": "What was the name of the banker who looked after Jed Clampett`s millions in The Beverly Hillbillies?",
      "answer": "Mr Drysdale",
      "category": "Film and TV",
      "_id": 723
    },
    {
      "question": "Who played the Prince Regent in Blackadder The Third?",
      "answer": "Hugh Laurie",
      "category": "Film and TV",
      "_id": 724
    },
    {
      "question": "Which comedy duo appeared in the last episode of The Sweeney?",
      "answer": "Morcambe and Wise",
      "category": "Film and TV",
      "_id": 725
    },
    {
      "question": "Who was Britain`s first black news reader?",
      "answer": "Trevor MacDonald",
      "category": "Film and TV",
      "_id": 726
    },
    {
      "question": "What is Doctor Who`s time box called?",
      "answer": "The Tardis",
      "category": "Film and TV",
      "_id": 727
    },
    {
      "question": "Which actor, who died on April 5th 2008, was originally cons_idered for the role of Chief Brody in the 1975 film Jaws?",
      "answer": "Charlton Heston",
      "category": "Film and TV",
      "_id": 728
    },
    {
      "question": "What is the first name of the character Lewis in the TV series of the same name?",
      "answer": "Robert",
      "category": "Film and TV",
      "_id": 729
    },
    {
      "question": "Name all of the seven dwarves in Disney`s Snow White And The Seven Dwarfs?",
      "answer": "Happy, Grumpy, Doc, Sleepy, Sneezy, Dopey and Bashful",
      "category": "Film and TV",
      "_id": 730
    },
    {
      "question": "The 1999 film 10 Things I Hate About You is based on which Shakespeare play?",
      "answer": "The Taming Of The Shrew",
      "category": "Film and TV",
      "_id": 731
    },
    {
      "question": "Who was the first American actor to be nominated for Emmy Awards for portraying the same character on 3 different shows?",
      "answer": "Kelsey Grammar (Cheers, Frasier and Wings)",
      "category": "Film and TV",
      "_id": 732
    },
    {
      "question": "In the three Bourne films starring Matt Damon what is Bourne`s first name?",
      "answer": "Jason",
      "category": "Film and TV",
      "_id": 733
    },
    {
      "question": "What were the first names of Riggs and Murtaugh in the Lethal Weapon films?",
      "answer": "Martin (Riggs) and Roger (Murtaugh)",
      "category": "Film and TV",
      "_id": 734
    },
    {
      "question": "What type of animal is at the centre of the film Racing Stripes?",
      "answer": "A zebra",
      "category": "Film and TV",
      "_id": 735
    },
    {
      "question": "Who played the role of Mr Freeze in the film Batman And Robin?",
      "answer": "Arnold Schwarzenegger",
      "category": "Film and TV",
      "_id": 736
    },
    {
      "question": "Which Carry On star died on the stage of the Sunderland Empire in 1976?",
      "answer": "S_id James",
      "category": "Film and TV",
      "_id": 737
    },
    {
      "question": "In which film d_id the song White Christmas first feature?",
      "answer": "Hol_iday Inn",
      "category": "Film and TV",
      "_id": 738
    },
    {
      "question": "Which TV character has sisters called Daisy and Rose?",
      "answer": "Hyacinth Bucket",
      "category": "Film and TV",
      "_id": 739
    },
    {
      "question": "What are the first names of the twin girls in Bart`s class in The Simpsons?",
      "answer": "Sherri and Teri",
      "category": "Film and TV",
      "_id": 740
    },
    {
      "question": "Which character has been played by Robert Donat, Kenneth More and Robert Powell in three versions of a British movie?",
      "answer": "Richard Hannay (in The 39 Steps)",
      "category": "Film and TV",
      "_id": 741
    },
    {
      "question": "In Stingray, what were the character names of the two female puppets?",
      "answer": "Marina and Atlanta",
      "category": "Film and TV",
      "_id": 742
    },
    {
      "question": "Who were the two voice artists of the cartoon characters Dangermouse and his s_idekick Penfold?",
      "answer": "Dav_id Jason and Terry Scott",
      "category": "Film and TV",
      "_id": 743
    },
    {
      "question": "In which Clint Eastwood film was the catchphrase `Go ahead, make my day` first used?",
      "answer": "Sudden Impact",
      "category": "Film and TV",
      "_id": 744
    },
    {
      "question": "Which film featured a parrot called Polynesia?",
      "answer": "Doctor Doolittle",
      "category": "Film and TV",
      "_id": 745
    },
    {
      "question": "In the TV show The Simpsons, how is the character of Robert Terwilliger normally known?",
      "answer": "S_ideshow Bob",
      "category": "Film and TV",
      "_id": 746
    },
    {
      "question": "If Scott is 1, Virgil is 2 and Alan is 3, who are 4 and 5?",
      "answer": "Gordon and John (Thunderbird pilots)",
      "category": "Film and TV",
      "_id": 747
    },
    {
      "question": "In which city is the film Trainspotting set?",
      "answer": "Edinburgh",
      "category": "Film and TV",
      "_id": 748
    },
    {
      "question": "Who directed the 1976 film Taxi Driver?",
      "answer": "Martin Scorsese",
      "category": "Film and TV",
      "_id": 749
    },
    {
      "question": "What is the name of the character played by Robert de Niro in the 1976 film Taxi Driver?",
      "answer": "Travis Bickle",
      "category": "Film and TV",
      "_id": 750
    },
    {
      "question": "What is the name of the sequel to the film American Graffiti?",
      "answer": "More American Graffiti",
      "category": "Film and TV",
      "_id": 751
    },
    {
      "question": "Roger Moore`s scenes in which Blake Edwards film were filmed during a break from shooting Octopussy?",
      "answer": "Curse of the Pink Panther",
      "category": "Film and TV",
      "_id": 752
    },
    {
      "question": "Who directed the 1985 film Back To The Future?",
      "answer": "Robert Zemeckis",
      "category": "Film and TV",
      "_id": 753
    },
    {
      "question": "Which famous 1927 film is based on the play Day Of Atonement by Samson Raphaelson?",
      "answer": "The Jazz singer",
      "category": "Film and TV",
      "_id": 754
    },
    {
      "question": "In 2007, which film topped the list of the American Film Institute`s top 100 films of all time?",
      "answer": "Citizen Kane",
      "category": "Film and TV",
      "_id": 755
    },
    {
      "question": "The film Trainspotting is from a novel by which author?",
      "answer": "Irvine Welsh",
      "category": "Film and TV",
      "_id": 756
    },
    {
      "question": "Which famous actor was born in 1916 with the real name of Issur Danielovitch Demsky?",
      "answer": "Kirk Douglas",
      "category": "Film and TV",
      "_id": 757
    },
    {
      "question": "Which actress, model and singer served 18 days in prison for tax evaxion in 1982?",
      "answer": "Sofia Loren",
      "category": "Film and TV",
      "_id": 758
    },
    {
      "question": "Which is the only dwarf that never speaks in Snow White And The Seven Dwarfs?",
      "answer": "Dopey",
      "category": "Film and TV",
      "_id": 759
    },
    {
      "question": "Who co-starred with her father in the 1959 film Tiger Bay?",
      "answer": "Hayley Mills",
      "category": "Film and TV",
      "_id": 760
    },
    {
      "question": "Which other TV soap, other than EastEnders, d_id Ross Kemp star in?",
      "answer": "Emmerdale",
      "category": "Film and TV",
      "_id": 761
    },
    {
      "question": "What colour are the shorts that Bart Simpson normally wears?",
      "answer": "Blue",
      "category": "Film and TV",
      "_id": 762
    },
    {
      "question": "Who played Annie Wilkes in the 1990 film `Misery`?",
      "answer": "Kathy Bates",
      "category": "Film and TV",
      "_id": 763
    },
    {
      "question": "Who is the presenter of the Weakest Link?",
      "answer": "Anne Robinson",
      "category": "Film and TV",
      "_id": 764
    },
    {
      "question": "What is the name of the second James Bond film?",
      "answer": "From Russia With Love",
      "category": "Film and TV",
      "_id": 765
    },
    {
      "question": "What was the name of the pub in Minder?",
      "answer": "The Winchester",
      "category": "Film and TV",
      "_id": 766
    },
    {
      "question": "What was the name of the car in the TV series The Dukes of Hazard?",
      "answer": "The General Lee",
      "category": "Film and TV",
      "_id": 767
    },
    {
      "question": "Who sang the theme tune to the TV series The Fall Guy?",
      "answer": "Lee Majors",
      "category": "Film and TV",
      "_id": 768
    },
    {
      "question": "What was the title of Orson Welles' last movie, in which he voiced a character called Unicron?",
      "answer": "Transformers: The Movie",
      "category": "Film and TV",
      "_id": 769
    },
    {
      "question": "What is the name of the housing estate where the Trotters live in Only Fools And Horses?",
      "answer": "Nelson Mandela House",
      "category": "Film and TV",
      "_id": 770
    },
    {
      "question": "In which city is the TV series Grey`s Anatomy set?",
      "answer": "Seattle",
      "category": "Film and TV",
      "_id": 771
    },
    {
      "question": "In the movie Aliens, what was the name of the cat?",
      "answer": "Jones",
      "category": "Film and TV",
      "_id": 772
    },
    {
      "question": "Which children`s television show featured the characters of George, Zippy and Bungle?",
      "answer": "Rainbow",
      "category": "Film and TV",
      "_id": 773
    },
    {
      "question": "Which 2005 Nobel prize-winning English playwright wrote the screenplay for the film The French Lieutenant`s Woman?",
      "answer": "Harold Pinter",
      "category": "Film and TV",
      "_id": 774
    },
    {
      "question": "Who starred in the title role of the film version of J B Priestley`s play An Inspector Calls?",
      "answer": "Alastair Sim",
      "category": "Film and TV",
      "_id": 775
    },
    {
      "question": "Which 1969 film was based on Barry Hines novel A Kestrel For A Knave?",
      "answer": "Kes",
      "category": "Film and TV",
      "_id": 776
    },
    {
      "question": "In the film `Breakfast at Tiffanys`, what is the name of Audrey Hepburn`s character`s cat ?",
      "answer": "Cat",
      "category": "Film and TV",
      "_id": 777
    },
    {
      "question": "What is Postman Pat`s surname?",
      "answer": "Clifton",
      "category": "Film and TV",
      "_id": 778
    },
    {
      "question": "In the film `Cannonball Run` what was the name of the super-hero played by Dom DeLuise?",
      "answer": "Captain Chaos",
      "category": "Film and TV",
      "_id": 779
    },
    {
      "question": "Who plays Billy Costigan in the 2006 Oscar winning film The Departed?",
      "answer": "Leonardo DiCaprio",
      "category": "Film and TV",
      "_id": 780
    },
    {
      "question": "In which film would you find the character of Caledon `Cal` Hockley?",
      "answer": "Titanic",
      "category": "Film and TV",
      "_id": 781
    },
    {
      "question": "Which Oscar winning actress played Stella Br_idger in the 2003 remake of the Italian Job?",
      "answer": "Charlize Theron",
      "category": "Film and TV",
      "_id": 782
    },
    {
      "question": "Who played Nathan Detroit in the 1955 film Guys and Dolls?",
      "answer": "Frank Sinatra",
      "category": "Film and TV",
      "_id": 783
    },
    {
      "question": "Charles Fleischer voiced the title character in which 1988 film?",
      "answer": "Who Framed Roger Rabbit?",
      "category": "Film and TV",
      "_id": 784
    },
    {
      "question": "Which Oscar winning screenplay writer also co-wrote the screenplay for the movie Superman 2?",
      "answer": "Mario Puzo",
      "category": "Film and TV",
      "_id": 785
    },
    {
      "question": "Which cast member of The Magnificent Seven had a scene from the film enacted at his wedding during filming?",
      "answer": "Yul Brynner",
      "category": "Film and TV",
      "_id": 786
    },
    {
      "question": "What was the name of the hol_iday camp in the TV sitcom `Hi-De-Hi`?",
      "answer": "Maplins",
      "category": "Film and TV",
      "_id": 787
    },
    {
      "question": "What was the name of the character played by Ronnie Barker in `Open All Hours`?",
      "answer": "Arkwright",
      "category": "Film and TV",
      "_id": 788
    },
    {
      "question": "Which 1959 Alfred Hitchcock film had the tagline `Its a deadly game of tag and Cary Grant is it!`?",
      "answer": "North by Northwest",
      "category": "Film and TV",
      "_id": 789
    },
    {
      "question": "In what year was Channel 4 launched?",
      "answer": "1982",
      "category": "Film and TV",
      "_id": 790
    },
    {
      "question": "The theme tune for `TFI Fr_iday` was taken from which 1960s TV series?",
      "answer": "Man in a Suitcase",
      "category": "Film and TV",
      "_id": 791
    },
    {
      "question": "Who prov_ides the voice of S_ideshow Bob in `The Simpsons`?",
      "answer": "Kelsey Grammer",
      "category": "Film and TV",
      "_id": 792
    },
    {
      "question": "I n the film `The Great Escape` what were the code names of the 3 tunnels?",
      "answer": "Tom, Dick and Harry",
      "category": "Film and TV",
      "_id": 793
    },
    {
      "question": "Which film character`s car had the registration number BMT214A?",
      "answer": "James Bond (the Aston Martin DB5)",
      "category": "Film and TV",
      "_id": 794
    },
    {
      "question": "Who directed The 2002 film `The Pianist`?",
      "answer": "Roman Polanski",
      "category": "Film and TV",
      "_id": 795
    },
    {
      "question": "What was the name of the baby of Wayne and Waynetta Slob in the Harry Enfield Show?",
      "answer": "Frogmella",
      "category": "Film and TV",
      "_id": 796
    },
    {
      "question": "What is Miss Piggy's Surname?",
      "answer": "Lee",
      "category": "Film and TV",
      "_id": 797
    }
  ]);
}

async function seedRooms() {
  await Rooms.deleteMany();

  await Rooms.insertMany([
    {
      _id: 1,
      teams: [
        {
          name: "Alpaca",
          roundPoints: 2,
          isApproved: true,
          answers: [
            {
              _id: 198,
              answer: "New Delhi",
              isCorrect: true,
              round: 1,
            },
            {
              _id: 199,
              answer: "Doge",
              isCorrect: true,
              round: 1,
            },
          ],
        },
        {
          name: "Koala",
          roundPoints: 5,
          isApproved: true,
          answers: [
            {
              _id: 198,
              answer: "New Delphi",
              isCorrect: false,
              round: 1
            },
          ],
        },
      ],
      rounds: [
        {
          _id: 123456,
          categories: ["Art and Literature","History","Science and Nature"],
          questions: [
            {
              _id: 198,
            },
            {
              _id: 199,
            }
          ],
        },
      ],
    },
  ]);
}