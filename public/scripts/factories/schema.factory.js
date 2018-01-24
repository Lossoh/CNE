angular
    .module('cne')
    .factory('schemaFactory', schemaFactory);

schemaFactory.$inject = [];

/* @ngInject */
function schemaFactory() {

	var allSchema = {
		newWebSocial: newWebSocial,
		newContact: newContact,
		newAddress: newAddress,
		newCME: newCME
	};

	function newWebSocial() {
		//define local variables
		var self = this;

		return {
			type: {		//email, phone, web, instagram, facebook, twitter, snap, pinterest, other
				selection: "",
				otherDescription: ""
			},
			address: ""
		};

	};

	function newContact() {
		//define local variables
		var self = this;

		return {
			name: {
				first: "",
				last: "",
			},
			phone: "",
			email: "",
			type: {
				selection: "",
				otherDescription: ""
			}
		};

	};

	function newAddress() {
		//define local variables
		var self = this;

		return {
			type: {
				selection: "",
				otherDescription: ""
			},
			physical: {
				street01: "",
				street02: "",
				street03: "",
				description: "",
				city: "",
				state: "",
				zip: ""
			}
		};
	};

	function newCME() {
		//define local variables
		var self = this;

		return {
			general: {
				title: "",
				type: {
					selection: "",
					otherDescription: ""
				}
			},
			address: [ self.newAddress() ],
			contacts: {
				people: [ self.newContact() ],
				social: [ self.newWebSocial() ]
			},
			financials: {
				gross: "",
				annuals: [],
				monthly: []
			},
			occurances: {}
		}
	}
 
    return allSchema;	
}