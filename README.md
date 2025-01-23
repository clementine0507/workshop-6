# workshop-6
## URL
### Notes
<img width="1385" alt="6bbd4d9001eaefe1e2d4dfdc4ea64ac" src="https://github.com/user-attachments/assets/d8acb1f5-1f77-4d1f-ac04-78a114e92658" />

In a similar way to CSV, it can be used to import fonts.

<img width="1314" alt="844a18f7748b40989be1de94f37c8dc" src="https://github.com/user-attachments/assets/106ccf6f-aff3-4ea0-a851-b7db3db83317" />

Rita is a coding toolkit for working with language. It can be used with different programming environments, one of which is P5JS. P5JS being a JavaScript library, but when we're working with P5, we can also use additional libraries.

<img width="1700" alt="f9951604cf7a64f00d2c79427da5eab" src="https://github.com/user-attachments/assets/076e80e6-e1ff-4fd5-b811-2baac985d252" />

we already have a sketch running, so we need to do is take this line of code, copy it and add it to the index dot HTML. 

![dd57d542353d783fd52267adfa8dcaa](https://github.com/user-attachments/assets/4b4ee0e5-8684-48f6-87b5-9f354cd3bb44)

#### coding 1.0
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

##### add new reference into coding 2.0
<img width="696" alt="993a44783d1259b33774117142dcef2" src="https://github.com/user-attachments/assets/49a81c9d-c92d-4dc2-915b-c75241efed1e" />

<img width="571" alt="1a1ede3eed5fbfb6fd42739912bda72" src="https://github.com/user-attachments/assets/c6fbe6d9-34d1-41af-8329-e103010cb46d" />

          let stressesList = [];

          let stresses = words.map(word => RiTa.stresses(word));

          stressesList.push(stresses.join(' ')); 
    
