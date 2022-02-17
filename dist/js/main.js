((e) => {
	//FUNCIONALIDAD DE  LOG IN
	const form = document.getElementById('form');
	const email = document.getElementById('email');
	const password = document.getElementById('password');
	const label = document.querySelectorAll('.label');
	const btnLog = document.querySelector('form .btn-log');
	document.addEventListener('DOMContentLoaded', (e) => {
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			console.log('preventdefault');
            //validar email
			if (email.value === '') {
				email.focus();
				return;
			}
            //validar password
			if (password.value === '') {
                password.focus();
				return;
			}
            //validación de log in
            if (email.value==='marco@gmail.com' && password.value==='123') {
                form.submit();                
            }else{
                //color label
                label.forEach(item => {
                    item.classList.add('login-erro1-label');                    
                });
                //color input
                email.classList.add('login-erro1-input');
                password.classList.add('login-erro1-input');
                alert('Porfavor ingrese, nombre de usuario y contraseña correctos');
                //color submit
                btnLog.classList.add('login-erro1-submit');

            }
		});
	});

})();
