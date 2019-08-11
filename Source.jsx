let json = {
    "tests":
    [
      {
      "title": "Объявление и инициализация переменных",
      "questions": 
      [
        {
          "question": "Выберите правильное объявление переменной x:",
          "answers":
          [
            "x = 0;",
            "{x};",
            "int x;",
            "x;"
          ],
          "correct":2
        },
        {
          "question": "Какой вариант правильно объявляет и иницилизирует переменную x?",
          "answers":
          [
            "int x = 0;",
            "int x => 0;",
            "int x(0);",
            "int x { 0 };"
          ],
          "correct":0
        },
        {
          "question": "В каком варианте имя переменной не вызывает ошибку компиляции?",
          "answers":
          [
            "int var;",
            "int 1var;",
            "int var$;",
            "int @var;"
          ],
          "correct":3
        },
        {
          "question": "Какой вариант правильно объявляет и иницилизирует переменные x, y, z?",
          "answers":
          [
          "int x = 0, int y = 0, int z = 0;",
          "int x = 0, y = 0, z = 0;",
          "int x, int y, int z = 0;",
          "int x, y, z = { 0, 0, 0 };"
          ],
          "correct":1
        },
        {
          "question": "В каком варианте ключевое слово var использовано верно?",
          "answers":
          [
          "var x = 0;",
          "var x;",
          "var x, y;",
          "var x = 0, y = 0;"
          ],
          "correct":0
        },
        {
          "question": "Какой вариант правильно объявляет и иницилизирует переменные x, y?",
          "answers":
          [
          "int x = 0; int y = x;",
          "int x = 0; int y = y;",
          "int x = 0, int y = y;",
          "int x = 0, y = x;"
          ],
          "correct":0
        },
        {
          "question": "В каком варианте имя переменной не вызывает ошибку компиляции?",
          "answers":
          [
          "int _a1;",
          "int 1a_;",
          "int _a$;",
          "int $a;"
          ],
          "correct":0
        },
        {
          "question": "Какой вариант правильно объявляет и иницилизирует переменные x, y, z?",
          "answers":
          [
          "int x = 0; int y = x; int z = y;",
          "int x = y; int y = x; int z = 0;",
          "int x = z; int y = x; int z = 0;",
          "int x = z; int y = 0; int z = x;"
          ],
          "correct":0
        },
        {
          "question": "Какое значение в результате получит x? int x = default(int);",
          "answers":
          [
          "0",
          "1",
          "2 147 483 647",
          "-2 147 483 648"
          ],
          "correct":0
        },
        {
          "question": "Какое значение в результате получит z? int x = 0; int y = x; x = 1; int z = y;",
          "answers":
          [
          "0",
          "1",
          "2 147 483 647",
          "-2 147 483 648"
          ],
          "correct":0
        }
      ]
      },
      {
        "title": "Арифметические операции",
        "questions": 
        [
          {
            "question": "Какой вариант правильно находит cумму x, y и присваивает результат z?",
            "answers":
            [
            "z = +(x  y);",
            "z = (x, y)+;",
            "z = x + y;",
            "z = { x + y };"
            ],
            "correct": 2
          },
          {
            "question": "Какой знак соответсвует операции деления?",
            "answers":
            [
              "\\",
              "|",
              ":",
              "/",
            ],
            "correct": 3
          },
          {
            "question": "Какой вариант правильно находит квадрат числа x и записывает результат в x?",
            "answers":
            [
              "x = x * x;",
              "x = x ^ 2;",
              "x = x . x;",
              "x = x ' 2;"
            ],
            "correct": 0
          },
          {
            "question": "В каком случае x меняет знак переменной?",
            "answers":
            [
              "x--;",
              "x = -x;",
              "x -= x;",
              "x =- x;"
            ],
            "correct": 1
          },
          {
            "question": "Какой знак соответсвует операции взятия остатка от деления?",
            "answers":
            [
              "%",
              "~",
              "&",
              "^"
            ],
            "correct": 0
          },
          {
            "question": "В каком случае переменная x увеличивается на 1?",
            "answers":
            [
              "x++;",
              "x += x + 1;",
              "x += (x + 1);",
              "x *= 1;"
            ],
            "correct": 0
          },
          {
            "question": "В каком случае значение переменной x не меняется?",
            "answers":
            [
              "x = x - x - x;",
              "x = x + x + x;",
              "x = x + x - x;",
              "x = (-x) - x - x;"
            ],
            "correct": 2
          },
          {
            "question": "Какое значения в результате принимает x? int x = 8 % 2;",
            "answers":
            [
              "1",
              "2",
              "0",
              "4"
            ],
            "correct": 2
          },
          {
            "question": "Какое значения в результате принимает x? int x = 5 / 2;",
            "answers":
            [
              "3",
              "2.5",
              "1",
              "2"
            ],
            "correct": 3
          }
        ]
      }
  ]
  };

function getInfoBar(props)
{
  return (
    <div>
      <p><a class="testTitle">{props.title}</a> | Вопрос: {currentQuestion + 1}/{props.questions.length}</p>
      <hr/>
    </div>
  );
}

function getTests(props)
{
currentQuestion = 0;
correctAnswers = 0;
const tests = props.tests.map((test, i) => <li><a class="testTitle" href={"javascript:onclick=renderQuestion(" + i + ");"}>{test.title}</a></li>);
  return (
  <div>
    <h2>
      Тесты по C#:
    </h2>
    <ol>
      {tests}
    </ol>
  </div>
  );
}

let currentQuestion = 0;
let correctAnswers = 0;
let currentCorrect = 0;

function getQuestion(props) {
const answers = props.question.answers.map((answer, i) => <p><input type="radio" name="answer" value={i} />{answer}</p>);
currentCorrect = props.question.correct;
  return (
  <form>
      <p>{props.question.question}</p>
      {answers}
      <hr/>
      <a class="next" href={"javascript:onclick=renderQuestion(" + props.testIndex + ");"}>Далее</a>
  </form>
  );
}

function renderQuestion(i) {

if (currentQuestion > 0)
{
    const checkedAnswer = Array.from(document.getElementsByName("answer")).find(r => r.checked);
    let correct = checkedAnswer.value == currentCorrect;
    if (correct)
    {
      correctAnswers++;
    }
    checkedAnswer.checked = false;
}

if (currentQuestion < json.tests[i].questions.length)
{
let infoBar = getInfoBar(json.tests[i]);
let question = getQuestion({question: json.tests[i].questions[currentQuestion], testIndex: i});
ReactDOM.render(
  <div>{infoBar}{question}</div>,
  document.getElementById('root')
);
currentQuestion++;
}
else
{
  
ReactDOM.render(
  <div>Результат: {correctAnswers} / {json.tests[i].questions.length} </div>,
  document.getElementById('root')
);
}
}

function renderTests() {
let tests = getTests(json);

ReactDOM.render(
  tests,
  document.getElementById('root')
);
}
renderTests();