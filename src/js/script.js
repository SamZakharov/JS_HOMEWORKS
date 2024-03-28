(function () {
  const modal = new bootstrap.Modal('[data-questionary-modal]');
  const form = document.querySelector('form[data-questionary-form]');
  const createAnswerBtn = document.querySelector('[data-create-answer]');
  const answersWrapper = document.querySelector('[data-generated-fields]');
  const answersList = [];

  const generateAnswerInput = (config) => {
    const label = document.createElement('label');
    label.className = 'd-block form-label';
    label.setAttribute('data-id', config.id);

    const div = document.createElement('div');
    div.className = 'mb-3';
    div.innerHTML = `Question answer ${config.id}`;

    const input = document.createElement('input');
    input.className = 'form-control';
    input.type = 'text';
    input.name = `${config.name}_${config.id}`;
    input.value = config.value;
    input.setAttribute('required', '');

    label.append(div);
    label.append(input);
    return label;
  };

  const createAnswerBtnHandler = (event) => {
    event.preventDefault();
    const answer = {
      id: answersList.length ? answersList.at(-1).id + 1 : 1,
      name: 'answer',
      value: '',
    };

    answersList.push(answer);
    const field = generateAnswerInput(answer);
    answersWrapper.append(field);

    if (answersList.length === 3) {
      createAnswerBtn.removeEventListener('click', createAnswerBtnHandler);
      createAnswerBtn.setAttribute('disabled', '');
    }
  };

  createAnswerBtn.addEventListener('click', createAnswerBtnHandler);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputs = event.target.querySelectorAll('input, textarea, select');
    const data = {
      answers: {},
      question: '',
    };

    inputs.forEach((input) => {
      if (input.name.includes('answer')) {
        data.answers[input.name] = input.value;
        return;
      }
      data.question = input.value;
    });
    const modalBody = document.querySelector('[data-questionary-modal] .modal-body');

    const answersList = Object.values(data.answers).reduce((acc, item) => {
      acc += `<li>${item}</li>`;
      return acc;
    }, '');

    const answers = `<ul>
       <li><b>Question: </b> ${data.question}</li>
       <li><b>Answers:</b></li>
       <li><ol>${answersList}</ol></li>
       </ul>`;

    modalBody.innerHTML = answers;

    modal.show();
  });
}());
