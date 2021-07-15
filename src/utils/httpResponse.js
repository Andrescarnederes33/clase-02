let resCodes = {
	601: {
		message: {
			original: "successfully registered",
			translation: "Se ha registrado correctamente",
		},
		type: "success",
		displayCodeError: false,
		displayMessage: true,
	},
	602: {
		//input form errors
		type: "error",
		displayCodeError: false,
		displayMessage: true,
	},
	603: {
		//user already exist in database - register process,
		type: "error",
		displayCodeError: false,
		displayMessage: true,
		message: {
			original: "user already exist in database",
			translation: "ya existe una cuenta asociada con este correo",
		},
	},
	604: {
		//user doesnt exist in database - login process
		type: "error",
		displayCodeError: false,
		displayMessage: true,
		message: {
			original: "there is no user with this email account",
			translation: "Contraseña incorrecta o correo inválido",
		},
	},
	605: {
		//invalid passwpord - login process
		type: "error",
		displayCodeError: false,
		displayMessage: true,
		message: {
			original: "invalid password",
			translation: "Contraseña incorrecta o correo inválido",
		},
	},
	606: {
		//logged in - login process
		type: "success",
		displayCodeError: false,
		displayMessage: true,
		message: {
			original: "You have successfully logged in",
			translation: "Has iniciado sesión correctamente",
		},
	},
	607: {
		//user mode is unable to view this resource
		type: "error",
		displayCodeError: false,
		displayMessage: true,
	},
	608: {
		message: {
			original: "correo de confirmación enviado",
			translation: "confirmation email sent",
		},
		type: "success",
		displayCodeError: false,
		displayMessage: true,
	},
	609: {
		message: {
			original:
				"Tu cuenta no ha sido confirmada, por favor revisa tu bandeja de entrada",
			translation: "Confirm your email to login",
		},
		type: "error",
		displayCodeError: false,
		displayMessage: true,
	},
	610: {
		//confirm email acccount token or password reset token
		message: {
			original: "token inválido o token caducado",
			translation: "invalid token or token expired",
		},
		type: "error",
		displayCodeError: true,
		displayMessage: true,
	},
	611: {
		//confirm email acccount
		message: {
			original: "Ya la cuenta se encuentra activa",
			translation: "Account is already activated",
		},
		type: "error",
		displayCodeError: true,
		displayMessage: true,
	},
	612: {
		//reset password mail sent
		message: {
			original: "correo de reestablecimiento de contraseña enviado",
			translation: "reset password email sent",
		},
		type: "success",
		displayCodeError: false,
		displayMessage: true,
	},
	613: {
		//password changed
		message: {
			original: "Su contraseña ha cambiado",
			translation: "password changed",
		},
		type: "success",
		displayCodeError: false,
		displayMessage: true,
	},
	619: {
		//login token
		type: "error",
		displayCodeError: true,
		displayMessage: false,
		message: {
			original: "invalid token",
			translation: "token inválido",
		},
	},
	620: {
		type: "error",
		displayCodeError: false,
		displayMessage: true,
		message: {
			original: "User must be logged to view this resource",
			translation: "Necesitas iniciar sesión",
		},
	},
	621: {
		type: "error",
		displayCodeError: false,
		displayMessage: true,
		message: {
			original: "Category with this name already exist",
			translation: "Ya existe una categoría con este nombre",
		},
	},
	622: {
		type: "success",
		displayCodeError: false,
		displayMessage: true,
		message: {
			original: "website created",
			translation: "Ya puede acceder a su sitio web",
		},
	},
	623: {
		type: "error",
		displayCodeError: false,
		displayMessage: true,
		message: {
			original: "this website already exist",
			translation: "Ya existe un website con este correo",
		},
	},
	624: {
		type: "error",
		displayCodeError: false,
		displayMessage: true,
		message: {
			original: "you must create a seller account",
			translation:
				"no existe cuenta de vendedor asociado a esta cuenta, por favor crea una",
		},
	},
	625: {
		type: "success",
		displayCodeError: false,
		displayMessage: true,
		message: {
			original: "website removed",
			translation: "Sitio web eliminado",
		},
	},
	700: {
		//data obtained
		message: {
			original: "data obtained",
			translation: "data obtenida",
		},
		type: "success",
		displayCodeError: false,
		displayMessage: true,
	},
	701: {
		//data updated
		message: {
			original: "Actualizado correctamente",
			translation: "data updated",
		},
		type: "success",
		displayCodeError: false,
		displayMessage: true,
	},
	800: {
		//category created
		message: {
			original: "La categoría ha sido agregada",
			translation: "category added",
		},
		type: "success",
		displayCodeError: false,
		displayMessage: true,
	},
	801: {
		//resource created
		message: {
			original: "agregado exitosamente",
			translation: "resource created in database successfully",
		},
		type: "success",
		displayCodeError: false,
		displayMessage: true,
	},
	802: {
		message: {
			original:
				"this category cant be removed because there products in it",
			translation:
				"No se puede borrar esta categoría, ya que existen productos con esta categoría ",
		},
		type: "error",
		displayCodeError: true,
		displayMessage: true,
	},
	803: {
		message: {
			original:
				"the subcategories cant be removed because there products in it",
			translation:
				"No se puede borrar estas subCategorías, ya que existen productos con estas subCategorías ",
		},
		type: "error",
		displayCodeError: true,
		displayMessage: true,
	},
	804: {
		message: {
			original: "no enough stock for one the selected products",
			translation:
				"stock insuficiente para de unos de los productos selecionados",
		},
		type: "error",
		displayCodeError: true,
		displayMessage: true,
	},
	805: {
		message: {
			original: "Card declined",
			translation: "Su tarjeta ha sido rechazada , intente mas tarde",
		},
		type: "error",
		displayCodeError: true,
		displayMessage: true,
	},
	901: {
		//resource removed
		message: {
			original: "eliminado exitosamente",
			translation: "resource removed from database successfully",
		},
		type: "success",
		displayCodeError: false,
		displayMessage: true,
	},
	902: {
		//user has no access to the resource
		message: {
			original: "you do not have permission for this resource",
			translation: "no tienes permisos",
		},
		type: "error",
		displayCodeError: true,
		displayMessage: true,
	},
	909: {
		type: "error",
		displayCodeError: true,
		displayMessage: false,
		message: {
			translation: "error desconocido",
		},
	},
	910: {
		type: "error",
		displayCodeError: true,
		displayMessage: false,
		message: {
			original: "Recurso no existe",
			translation: "resource with id doesn't exist",
		},
	},
};

exports.httpRes = (code, data, customMessage) => {
	let response = {
		data,
		code,
		type: resCodes[code].type,
		message: {
			original: customMessage.original
				? customMessage.original
				: resCodes[code].message.original,
			translation: customMessage.translation
				? customMessage.translation
				: resCodes[code].message.translation,
		},
		displayCodeError: resCodes[code].displayCodeError,
		displayMessage: resCodes[code].displayMessage,
	};

	return response;
};
