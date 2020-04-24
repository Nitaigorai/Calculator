  var numpads = document.querySelectorAll('.num-pad')
  var opepads = document.querySelectorAll('.ope-pad')
  var current = document.querySelector('.display-current')
  var history = document.querySelector('.display-history')
  var clear = document.querySelector('.clear')
  var statement = ''

  numpads.forEach((num) => {
      num.addEventListener('click', (e) => {
        var number = parseInt(e.target.innerHTML)

        // To prevent eval interpreting numbers with
        // leading 0 as binary numbers
        if(parseInt(statement) === 0 && number !== 0) {
          statement = ''
        }
        statement += number
        current.innerHTML = statement
      })
  })

  opepads.forEach((ope) => {
      ope.addEventListener('click', (e) => {
        if(e.target.innerHTML !== '=') {
          var operation = e.target.innerHTML
          statement += operation
          current.innerHTML = statement
        } else {
          var val = eval(statement)
          current.innerHTML = val
          statement = ''
        }
      })
  })

  clear.addEventListener('click', (e) => {
    current.innerHTML = ''
    statement = ''
  })
