angular
    .module('cne')
    .factory('schemaFactory', schemaFactory);

schemaFactory.$inject = [];

/* @ngInject */
function schemaFactory() {

	var allSchema = {
		newEngagment: newEngagment,
		newWebSocial: newWebSocial,
		newContact: newContact,
		newAddress: newAddress,
		newSeason: newSeason,
		newCME: newCME
	};

	function newEngagment() {
		//define local variables
		var self = this;

		return {
			schedule: {
				arrival: "",
				salesStart: "",
				salesEnd: "",
				departure: ""
			},
			location: self.newAddress(),
			shifts: [],
			status: {
				value: "",	//confirmed, unconfirmed, paid, etc
				otherDescription: ""
			},
			type: {
				selection: "",
				otherDescription: ""
			}
		};
	}

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

	function newSeason() {
		//define local variables
		var self = this;

		return {
			start: { day: "", month: "" },
			end: { day: "", month: "" },
			standardHrs: { open: "", close: "" },
			frequency: {
				selection: "",
				otherDescription: ""
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
			engagments: ""
		}
	}
 
    return allSchema;	
}