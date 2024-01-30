const skillsRequirements = ['HTML', 'CSS', 'JS', 'React', 'Vue', 'NodeJS'];
const skillsList = ['HTML', 'CSS', 'JS'];
const createCandidate = function (name = 'Name not provided', skills = []) {
  return {
    name,
    skills,
  };
};

const addRequirement = function (skill, listOfRequirements) {
  listOfRequirements.push(skill);
};

addRequirement('Angular', skillsRequirements);

const interview = function (candidate, requirements) {
  let result = 100;

  candidateCycle:
  for (let i = 0; i <= requirements.length; i += 1) {
    for (let r = 0; r <= candidate.skills.length; r += 1) {
      if (candidate.skills[r] === requirements[i]) continue candidateCycle;
      result = 0;
      break candidateCycle;
    }
  }

  return result;
};

// interview(candidate, skillsRequirements);

const planInterviews = function (candidates, req, scoreFunc) {
  const result = [];
  for (let i = 0; i < candidates.length; i += 1) {
    result.push({
      score: scoreFunc(candidates[i], req),
      candidate: candidates[i],
    });
  }
  return result;
};

const candidate1 = createCandidate('Cat', skillsList);
const candidate2 = createCandidate('Dog', skillsList);
const candidate3 = createCandidate('Sam', skillsList);
const candidates = [candidate1, candidate2, candidate3];

console.log(planInterviews(candidates, skillsRequirements, interview));
