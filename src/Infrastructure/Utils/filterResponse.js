const filterResponse = (response, filters) => {

  let filteredQuestions = []
  let filterObjects = filters ? JSON.parse(filters) : [];
  
  if (filterObjects.length > 0) {
    for (const filter of filterObjects) {
      const filtered = response.questions.filter((q) => q.id === filter.id && compareValues(q, filter));
      
      if (filtered.length > 0) {
        filteredQuestions.push(filtered);
      }
    }
  } else {
    filteredQuestions = response.questions;
  }
  return filteredQuestions;
}

const compareValues = (question, filter) => {
  let questionValue = question.value;
  let filterValue = filter.value;

  if (question.type === 'DatePicker') {
    questionValue = new Date(questionValue);
    filterValue = new Date(filterValue);
  } else if (!isNaN(Number(questionValue))) {
    questionValue = Number(questionValue);
    filterValue = Number(filterValue);
  }

  switch (filter.condition) {
    case 'equals':
      return questionValue === filterValue;
    case 'does_not_equal':
      return questionValue !== filterValue;
    case 'greater_than':
      return questionValue > filterValue;
    case 'less_than':
      return questionValue < filterValue;
    default:
      return false;
  }
}

module.exports = filterResponse