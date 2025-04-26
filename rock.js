<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Manipulation Exercise</title>
  <style>
    /* Basic styling */
    .container {
      margin: 20px;
      padding: 20px;
      border: 2px dashed #ccc;
    }
  </style>
</head>
<body>

  <div class="container" id="container"></div>

  <script>
    // Your JavaScript goes here!

    // Select the container
    const container = document.querySelector('#container');

    // 1. Create a <p> with red text
    const redParagraph = document.createElement('p');
    redParagraph.textContent = "Hey I'm red!";
    redParagraph.style.color = 'red';
    container.appendChild(redParagraph);

    // 2. Create an <h3> with blue text
    const blueH3 = document.createElement('h3');
    blueH3.textContent = "I'm a blue h3!";
    blueH3.style.color = 'blue';
    container.appendChild(blueH3);

    // 3. Create a <div> with black border and pink background
    const divBox = document.createElement('div');
    divBox.style.border = '1px solid black';
    divBox.style.backgroundColor = 'pink';

    // Inside the div:
    // - a new <h1>
    const insideH1 = document.createElement('h1');
    insideH1.textContent = "I'm in a div";

    // - a new <p>
    const insideP = document.createElement('p');
    insideP.textContent = "ME TOO!";

    // Append the <h1> and <p> to the div
    divBox.appendChild(insideH1);
    divBox.appendChild(insideP);

    // Then append the div to the container
    container.appendChild(divBox);

  </script>

</body>
</html>
