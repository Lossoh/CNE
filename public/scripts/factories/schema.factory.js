angular
    .module('cne')
    .factory('schemaFactory', schemaFactory);

schemaFactory.$inject = [];

/* @ngInject */
function schemaFactory() {

	var allSchema = {
		newCME: newCME
	};

	function newCME() {
		return {
			title: "",
			type: "",	//Farmers Market, Event, etc
			address: {
				street01: "",
				street02: "",
				street03: "",
				Description: "",
				city: "",
				state: "",
				zip: ""
			},
			contacts: {
				manager: {
					name: "",
					phone: "",
					email: ""
				},
				others: [],
				email: "",
				phone: "",
				web: "",
				instagram: "",
				facebook: "",
				twitter: "",
				snap: "",
				pinterest: ""
			},
			financials: {},
			occurances: {}
		}
	}
 
    return allSchema;	
}