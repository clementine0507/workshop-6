let userInput;
        let poem = [];

        function setup() {
            createCanvas(400, 400);
            background(220);

            userInput = createInput();
            userInput.position(10, 10);

            let button = createButton('add your poem');
            button.position(userInput.x + userInput.width + 10, 10);
            button.mousePressed(newLine);
        }

        function newLine() {
            let userLine = userInput.value();
            userInput.value('');

            let words = RiTa.tokenize(userLine);
            let nouns = [];
            let nounIndices = [];

            for (let i = 0; i < words.length; i++) {
                let pos = RiTa.pos(words[i])[0];
                if (pos === 'nn') {
                    nouns.push(words[i]);
                    nounIndices.push(i);
                }
            }

            if (nouns.length === 0) {
                poem.push(userLine);
            } else {
                let randomIndex = floor(random(0, nounIndices.length));
                let randomNoun = RiTa.randomWord('nn');
                words[nounIndices[randomIndex]] = randomNoun;

                let modifiedLine = RiTa.untokenize(words);
                poem.push(modifiedLine);
            }

            background(220);
            for (let i = 0; i < poem.length; i++) {
                text(poem[i], 10, 50 + i * 20);
            }
        }