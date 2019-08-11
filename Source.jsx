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
const answers = props.answers.map((answer, i) => <p><input type="radio" name="answer" value={i} />{answer}</p>);
currentCorrect = props.correct;
  return (
  <form>
      <p>{props.question}</p>
      {answers}
      <hr/>
      <a class="next" href={"javascript:onclick=renderQuestion(" + 0 + ");"}>Далее</a>
  </form>
  );
}

function renderQuestion(i) {

if (currentQuestion > 0)
{
    let correct = Array.from(document.getElementsByName("answer")).find(r => r.checked).value == currentCorrect;
    if (correct)
    {
      correctAnswers++;
    }
}

if (currentQuestion < json.tests[i].questions.length)
{
let infoBar = getInfoBar(json.tests[i]);
let question = getQuestion(json.tests[i].questions[currentQuestion]);
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