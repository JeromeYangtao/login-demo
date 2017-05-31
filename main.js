// 登陆功能
let $loginForm = $('form[name=login]')
$loginForm.on('submit', (e) => {
    e.preventDefault()
    let string = $loginForm.serialize()

    $.ajax({
        url: $loginForm.attr('action'),
        method: $loginForm.attr('method'),
        data: string,
        success: function() {
            location.href = '/home.html'
        },
        error: function() {
            console.log('报错')
        }
    })
})

// 注册功能
let $signUpForm = $('form[name=signUp]')

$signUpForm.on('submit', (e) => {
    e.preventDefault()
    let string = $signUpForm.serialize()

    $.ajax({
        url: $signUpForm.attr('action'),
        method: $signUpForm.attr('method'),
        data: string,
        success: function() {
            alert('注册成功')
        },
        error: function() {
            console.log('报错')
        }
    })
})