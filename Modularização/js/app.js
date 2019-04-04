requirejs.config({
	"baseUrl": "js/modules",
	"paths": {
		"main": "../main"
	}
});

requirejs(["main"]);