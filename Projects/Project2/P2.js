//we have taken form
const form = document.querySelector('form');

//form event listener(handles event or decide what to do after an event occurs) of type submit(as event here is what "submitting form".On submitting form we are getting the results).
//addEventListener()-takes a callback func along with event listener(here submit)
form.addEventListener('submit', (val) => {
  val.preventDefault();

  //Take values from database to calculate - data comes in string format from DB
  //.value() - we can access values of input fields of form
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#result');

  //some base conditions to check errors while taking input from user
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show result
    //results.innerHTML = `<span>${bmi}</span>`

    if (bmi < 18.6) {
      results.innerHTML = `${bmi} You are below normal BMI range`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `${bmi} You have healthy  BMI range`;
    } else if (bmi > 24.9)
      results.innerHTML = `${bmi} You fall above normal BMI range`;
  }
});
