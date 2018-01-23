config.$inject=["$routeProvider"];var ahNuts=angular.module("cne",["ngRoute"]);angular.module("cne").controller("landingController",landingController),landingController.$inject=["$scope","$log"];function landingController(e,r){r.info("in the landing controller")}angular.module("cne").controller("loginController",loginController),loginController.$inject=["$scope","$log"];function loginController(e,r){this.username="",this.password="",this.active={username:!1,password:!1},r.info("in the login controller")}angular.module("cne").directive("flavorMixerSizeSelector",flavorMixerSizeSelector);function flavorMixerSizeSelector(){r.$inject=["scope","el","attr","ctrl"];var e={restrict:"AECM",templateUrl:"views/directives/flavor-mixer-size-selector.directive.htm",replace:!0,scope:{},link:r,controller:o,controllerAs:"vm",bindToController:!0};function r(e,r,o,n){}o.$inject=["$scope","$log"];function o(e,r){}return e}angular.module("cne").directive("flavorMixer",flavorMixer);function flavorMixer(){r.$inject=["scope","el","attr","ctrl"];var e={restrict:"AECM",templateUrl:"views/directives/flavor-mixer.directive.htm",replace:!0,scope:{},link:r,controller:o,controllerAs:"vm",bindToController:!0};function r(e,r,o,n){}o.$inject=["$scope","$log"];function o(e,r){}return e}angular.module("cne").directive("loginPassword",loginPassword);function loginPassword(){r.$inject=["scope","el","attr","ctrl"];var e={restrict:"AECM",templateUrl:"views/directives/login-password.directive.htm",replace:!0,scope:{password:"=",active:"="},link:r,controller:o,controllerAs:"vm",bindToController:!0};function r(e,r,o,n){}o.$inject=["$scope","$log"];function o(e,r){}return e}angular.module("cne").directive("loginUsername",loginUsername);function loginUsername(){r.$inject=["scope","el","attr","ctrl"];var e={restrict:"AECM",templateUrl:"views/directives/login-username.directive.htm",replace:!0,scope:{username:"=",active:"="},link:r,controller:o,controllerAs:"vm",bindToController:!0};function r(e,r,o,n){}o.$inject=["$scope","$log"];function o(e,r){}return e}angular.module("cne").directive("loginValidation",loginValidation);function loginValidation(){r.$inject=["scope","el","attr","ctrl"];var e={restrict:"AECM",templateUrl:"views/directives/login-validation.directive.htm",replace:!0,scope:{active:"="},link:r,controller:o,controllerAs:"vm",bindToController:!0};function r(e,r,o,n){}o.$inject=["$scope","$log"];function o(e,r){}return e}angular.module("cne").config(config);function config(e){e.when("/",{templateUrl:"views/landingPage.htm",controller:"landingController",controllerAs:"vm"}).when("/login",{templateUrl:"views/loginPage.htm",controller:"loginController",controllerAs:"vm"}).otherwise({redirectTo:"/"})}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvd2ViQXBwLmpzIiwic2NyaXB0cy9jb250cm9sbGVycy9sYW5kaW5nLWNvbnRyb2xsZXIuanMiLCJzY3JpcHRzL2NvbnRyb2xsZXJzL2xvZ2luLWNvbnRyb2xsZXIuanMiLCJzY3JpcHRzL2RpcmVjdGl2ZXMvZmxhdm9yLW1peGVyLXNpemUtc2VsZWN0b3IuZGlyZWN0aXZlLmpzIiwic2NyaXB0cy9kaXJlY3RpdmVzL2ZsYXZvci1taXhlci5kaXJlY3RpdmUuanMiLCJzY3JpcHRzL2RpcmVjdGl2ZXMvbG9naW4tcGFzc3dvcmQuZGlyZWN0aXZlLmpzIiwic2NyaXB0cy9kaXJlY3RpdmVzL2xvZ2luLXVzZXJuYW1lLmRpcmVjdGl2ZS5qcyIsInNjcmlwdHMvZGlyZWN0aXZlcy9sb2dpbi12YWxpZGF0aW9uLmRpcmVjdGl2ZS5qcyIsInNjcmlwdHMvcm91dGVzL3JvdXRlcy1jb25maWcuanMiXSwibmFtZXMiOlsiYWhOdXRzIiwiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCJsYW5kaW5nQ29udHJvbGxlciIsIiRpbmplY3QiLCIkc2NvcGUiLCIkbG9nIiwiaW5mbyIsImxvZ2luQ29udHJvbGxlciIsInRoaXMiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYWN0aXZlIiwiZGlyZWN0aXZlIiwiZmxhdm9yTWl4ZXJTaXplU2VsZWN0b3IiLCJyZXN0cmljdCIsInRlbXBsYXRlVXJsIiwicmVwbGFjZSIsInNjb3BlIiwibGluayIsImxpbmtGdW5jIiwiZmxhdm9yTWl4ZXJTaXplU2VsZWN0b3JDb250cm9sbGVyIiwiY29udHJvbGxlckFzIiwiYmluZFRvQ29udHJvbGxlciIsImVsIiwiYXR0ciIsImN0cmwiLCJmbGF2b3JNaXhlciIsImZsYXZvck1peGVyQ29udHJvbGxlciIsImxvZ2luUGFzc3dvcmQiLCJsb2dpblBhc3N3b3JkQ29udHJvbGxlciIsImxvZ2luVXNlcm5hbWUiLCJsb2dpblVzZXJuYW1lQ29udHJvbGxlciIsImxvZ2luVmFsaWRhdGlvbiIsImxvZ2luVmFsaWRhdGlvbkNvbnRyb2xsZXIiLCJjb25maWciLCIkcm91dGVQcm92aWRlciIsIndoZW4iLCJvdGhlcndpc2UiLCJyZWRpcmVjdFRvIl0sIm1hcHBpbmdzIjoia0NBQ0EsSUFBQUEsT0FBQUMsUUFBQUMsT0FBQSxPQUFBLFlDREFELFFBQ0FDLE9BQUEsT0FDQUMsV0FBQSxvQkFBQUMsbUJBRUFBLGtCQUFBQyxTQUFBLFNBQUEsUUFHQSxTQUFBRCxrQkFBQUUsRUFBQUMsR0FLQUEsRUFBQUMsS0FBQSw2QkNaQVAsUUFDQUMsT0FBQSxPQUNBQyxXQUFBLGtCQUFBTSxpQkFFQUEsZ0JBQUFKLFNBQUEsU0FBQSxRQUdBLFNBQUFJLGdCQUFBSCxFQUFBQyxHQUdBRyxLQUNBQyxTQUFBLEdBREFELEtBRUFFLFNBQUEsR0FGQUYsS0FHQUcsUUFDQUYsVUFBQSxFQUNBQyxVQUFBLEdBR0FMLEVBQUFDLEtBQUEsMkJDWEFQLFFBQ0FDLE9BQUEsT0FDQVksVUFBQSwwQkFBQUMseUJBR0EsU0FBQUEsaUVBRUEsSUFBQUQsR0FDQUUsU0FBQSxPQUNBQyxZQUFBLDREQUNBQyxTQUFBLEVBQ0FDLFNBQ0FDLEtBQUFDLEVBQ0FsQixXQUFBbUIsRUFDQUMsYUFBQSxLQUNBQyxrQkFBQSxHQUlBLFNBQUFILEVBQUFGLEVBQUFNLEVBQUFDLEVBQUFDLElBRUFMLEVBQUFqQixTQUFBLFNBQUEsUUFFQSxTQUFBaUIsRUFBQWhCLEVBQUFDLElBTUEsT0FBQU8sRUM3QkFiLFFBQ0FDLE9BQUEsT0FDQVksVUFBQSxjQUFBYyxhQUdBLFNBQUFBLHFEQUVBLElBQUFkLEdBQ0FFLFNBQUEsT0FDQUMsWUFBQSw4Q0FDQUMsU0FBQSxFQUNBQyxTQUNBQyxLQUFBQyxFQUNBbEIsV0FBQTBCLEVBQ0FOLGFBQUEsS0FDQUMsa0JBQUEsR0FJQSxTQUFBSCxFQUFBRixFQUFBTSxFQUFBQyxFQUFBQyxJQUVBRSxFQUFBeEIsU0FBQSxTQUFBLFFBRUEsU0FBQXdCLEVBQUF2QixFQUFBQyxJQU1BLE9BQUFPLEVDN0JBYixRQUNBQyxPQUFBLE9BQ0FZLFVBQUEsZ0JBQUFnQixlQUdBLFNBQUFBLHVEQUVBLElBQUFoQixHQUNBRSxTQUFBLE9BQ0FDLFlBQUEsZ0RBQ0FDLFNBQUEsRUFDQUMsT0FDQVAsU0FBQSxJQUNBQyxPQUFBLEtBRUFPLEtBQUFDLEVBQ0FsQixXQUFBNEIsRUFDQVIsYUFBQSxLQUNBQyxrQkFBQSxHQUlBLFNBQUFILEVBQUFGLEVBQUFNLEVBQUFDLEVBQUFDLElBRUFJLEVBQUExQixTQUFBLFNBQUEsUUFFQSxTQUFBMEIsRUFBQXpCLEVBQUFDLElBTUEsT0FBQU8sRUNoQ0FiLFFBQ0FDLE9BQUEsT0FDQVksVUFBQSxnQkFBQWtCLGVBR0EsU0FBQUEsdURBRUEsSUFBQWxCLEdBQ0FFLFNBQUEsT0FDQUMsWUFBQSxnREFDQUMsU0FBQSxFQUNBQyxPQUNBUixTQUFBLElBQ0FFLE9BQUEsS0FFQU8sS0FBQUMsRUFDQWxCLFdBQUE4QixFQUNBVixhQUFBLEtBQ0FDLGtCQUFBLEdBSUEsU0FBQUgsRUFBQUYsRUFBQU0sRUFBQUMsRUFBQUMsSUFFQU0sRUFBQTVCLFNBQUEsU0FBQSxRQUVBLFNBQUE0QixFQUFBM0IsRUFBQUMsSUFNQSxPQUFBTyxFQ2hDQWIsUUFDQUMsT0FBQSxPQUNBWSxVQUFBLGtCQUFBb0IsaUJBR0EsU0FBQUEseURBRUEsSUFBQXBCLEdBQ0FFLFNBQUEsT0FDQUMsWUFBQSxrREFDQUMsU0FBQSxFQUNBQyxPQUNBTixPQUFBLEtBRUFPLEtBQUFDLEVBQ0FsQixXQUFBZ0MsRUFDQVosYUFBQSxLQUNBQyxrQkFBQSxHQUlBLFNBQUFILEVBQUFGLEVBQUFNLEVBQUFDLEVBQUFDLElBRUFRLEVBQUE5QixTQUFBLFNBQUEsUUFFQSxTQUFBOEIsRUFBQTdCLEVBQUFDLElBT0EsT0FBQU8sRUNsQ0FiLFFBQ0FDLE9BQUEsT0FDQWtDLE9BQUFBLFFBRUEsU0FBQUEsT0FBQUMsR0FDQUEsRUFDQUMsS0FBQSxLQUNBckIsWUFBQSx3QkFDQWQsV0FBQSxvQkFDQW9CLGFBQUEsT0FFQWUsS0FBQSxVQUNBckIsWUFBQSxzQkFDQWQsV0FBQSxrQkFDQW9CLGFBQUEsT0FFQWdCLFdBQ0FDLFdBQUEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTU9EVUxFXG52YXIgYWhOdXRzID0gYW5ndWxhci5tb2R1bGUoJ2NuZScsIFsnbmdSb3V0ZSddKTtcbiIsImFuZ3VsYXJcbiAgICAubW9kdWxlKCdjbmUnKVxuICAgIC5jb250cm9sbGVyKCdsYW5kaW5nQ29udHJvbGxlcicsIGxhbmRpbmdDb250cm9sbGVyKTtcblxubGFuZGluZ0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywnJGxvZyddO1xuXG4vKiBAbmdJbmplY3QgKi9cbmZ1bmN0aW9uIGxhbmRpbmdDb250cm9sbGVyKCRzY29wZSwgJGxvZykge1xuXG5cdC8vZGVmaW5lIHZpZXcgbW9kZWwgdmFyaWFibGVcblx0dmFyIHZtID0gdGhpcztcblx0XG5cdCRsb2cuaW5mbygnaW4gdGhlIGxhbmRpbmcgY29udHJvbGxlcicpO1x0Ly9UT0RPOiBUQUtFIFRISVMgT1VUIExBVEVSXG5cblx0Ly9kZWZpbmUgbG9jYWwgZnVuY3Rpb25zXG5cblx0Ly9ydW4gdGhlIHRlc3RcblxuXG59IiwiYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NuZScpXG4gICAgLmNvbnRyb2xsZXIoJ2xvZ2luQ29udHJvbGxlcicsIGxvZ2luQ29udHJvbGxlcik7XG5cbmxvZ2luQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCckbG9nJ107XG5cbi8qIEBuZ0luamVjdCAqL1xuZnVuY3Rpb24gbG9naW5Db250cm9sbGVyKCRzY29wZSwgJGxvZykge1xuXG5cdC8vZGVmaW5lIHZpZXcgbW9kZWwgdmFyaWFibGVcblx0dmFyIHZtID0gdGhpcztcblx0dm0udXNlcm5hbWUgPSBcIlwiO1xuXHR2bS5wYXNzd29yZCA9IFwiXCI7XG5cdHZtLmFjdGl2ZSA9IHtcblx0XHR1c2VybmFtZTogZmFsc2UsXG5cdFx0cGFzc3dvcmQ6IGZhbHNlXG5cdH07XG5cdFxuXHQkbG9nLmluZm8oJ2luIHRoZSBsb2dpbiBjb250cm9sbGVyJyk7XHQvL1RPRE86IFRBS0UgVEhJUyBPVVQgTEFURVJcblxuXHQvL2RlZmluZSBsb2NhbCBmdW5jdGlvbnNcblxuXHQvL3J1biB0aGUgdGVzdFxuXG5cbn0iLCIvKlxuKlx0RkxBVk9SIE1JWEVSXG4qXG4qXHRUaGlzIG1vZHVsZSBpcyBkZXNpZ25lZCB0byBhbGxvdyBjdXN0b21lcnMgdG8gbWl4IGFuZCBtYXRjaFxuKlx0b3VyIGRlbGljaW91cyBmbGF2b3JzIGFuZCB0byBwaWNrIHRoaWVyIHNpemluZy5cbiovXG5cbmFuZ3VsYXJcblx0Lm1vZHVsZSgnY25lJylcblx0LmRpcmVjdGl2ZSgnZmxhdm9yTWl4ZXJTaXplU2VsZWN0b3InLCBmbGF2b3JNaXhlclNpemVTZWxlY3Rvcik7XG5cbi8qIEBuZ0luamVjdCAqL1xuZnVuY3Rpb24gZmxhdm9yTWl4ZXJTaXplU2VsZWN0b3IoKSB7XG5cdC8vZGVmaW5lIHRoZSBkaXJlY3RpdmVcblx0dmFyIGRpcmVjdGl2ZSA9IHtcblx0XHRyZXN0cmljdDogXCJBRUNNXCIsXG5cdFx0dGVtcGxhdGVVcmw6ICd2aWV3cy9kaXJlY3RpdmVzL2ZsYXZvci1taXhlci1zaXplLXNlbGVjdG9yLmRpcmVjdGl2ZS5odG0nLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHt9LFxuXHRcdGxpbms6IGxpbmtGdW5jLFxuXHRcdGNvbnRyb2xsZXI6IGZsYXZvck1peGVyU2l6ZVNlbGVjdG9yQ29udHJvbGxlcixcblx0XHRjb250cm9sbGVyQXM6ICd2bScsXG5cdFx0YmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuXHR9XG5cblx0LyogQG5nSW5qZWN0ICovXG5cdGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgY3RybCkge31cblxuXHRmbGF2b3JNaXhlclNpemVTZWxlY3RvckNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnXTtcblx0LyogQG5nSW5qZWN0ICovXG5cdGZ1bmN0aW9uIGZsYXZvck1peGVyU2l6ZVNlbGVjdG9yQ29udHJvbGxlcigkc2NvcGUsICRsb2cpIHtcblx0XHQvL2RlZmluZSBsb2NhbCB2YXJpYWJsZXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdH1cblxuXHQvL3Bhc3MgaXQgYmFja1xuXHRyZXR1cm4gZGlyZWN0aXZlO1xufSIsIi8qXG4qXHRGTEFWT1IgTUlYRVJcbipcbipcdFRoaXMgbW9kdWxlIGlzIGRlc2lnbmVkIHRvIGFsbG93IGN1c3RvbWVycyB0byBtaXggYW5kIG1hdGNoXG4qXHRvdXIgZGVsaWNpb3VzIGZsYXZvcnMgYW5kIHRvIHBpY2sgdGhpZXIgc2l6aW5nLlxuKi9cblxuYW5ndWxhclxuXHQubW9kdWxlKCdjbmUnKVxuXHQuZGlyZWN0aXZlKCdmbGF2b3JNaXhlcicsIGZsYXZvck1peGVyKTtcblxuLyogQG5nSW5qZWN0ICovXG5mdW5jdGlvbiBmbGF2b3JNaXhlcigpIHtcblx0Ly9kZWZpbmUgdGhlIGRpcmVjdGl2ZVxuXHR2YXIgZGlyZWN0aXZlID0ge1xuXHRcdHJlc3RyaWN0OiBcIkFFQ01cIixcblx0XHR0ZW1wbGF0ZVVybDogJ3ZpZXdzL2RpcmVjdGl2ZXMvZmxhdm9yLW1peGVyLmRpcmVjdGl2ZS5odG0nLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHt9LFxuXHRcdGxpbms6IGxpbmtGdW5jLFxuXHRcdGNvbnRyb2xsZXI6IGZsYXZvck1peGVyQ29udHJvbGxlcixcblx0XHRjb250cm9sbGVyQXM6ICd2bScsXG5cdFx0YmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuXHR9XG5cblx0LyogQG5nSW5qZWN0ICovXG5cdGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgY3RybCkge31cblxuXHRmbGF2b3JNaXhlckNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnXTtcblx0LyogQG5nSW5qZWN0ICovXG5cdGZ1bmN0aW9uIGZsYXZvck1peGVyQ29udHJvbGxlcigkc2NvcGUsICRsb2cpIHtcblx0XHQvL2RlZmluZSBsb2NhbCB2YXJpYWJsZXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdH1cblxuXHQvL3Bhc3MgaXQgYmFja1xuXHRyZXR1cm4gZGlyZWN0aXZlO1xufSIsIi8qXG4qXHRGTEFWT1IgTUlYRVJcbipcbipcdFRoaXMgbW9kdWxlIGlzIGRlc2lnbmVkIHRvIGFsbG93IGN1c3RvbWVycyB0byBtaXggYW5kIG1hdGNoXG4qXHRvdXIgZGVsaWNpb3VzIGZsYXZvcnMgYW5kIHRvIHBpY2sgdGhpZXIgc2l6aW5nLlxuKi9cblxuYW5ndWxhclxuXHQubW9kdWxlKCdjbmUnKVxuXHQuZGlyZWN0aXZlKCdsb2dpblBhc3N3b3JkJywgbG9naW5QYXNzd29yZCk7XG5cbi8qIEBuZ0luamVjdCAqL1xuZnVuY3Rpb24gbG9naW5QYXNzd29yZCgpIHtcblx0Ly9kZWZpbmUgdGhlIGRpcmVjdGl2ZVxuXHR2YXIgZGlyZWN0aXZlID0ge1xuXHRcdHJlc3RyaWN0OiBcIkFFQ01cIixcblx0XHR0ZW1wbGF0ZVVybDogJ3ZpZXdzL2RpcmVjdGl2ZXMvbG9naW4tcGFzc3dvcmQuZGlyZWN0aXZlLmh0bScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRzY29wZToge1xuXHRcdFx0cGFzc3dvcmQ6IFwiPVwiLFxuXHRcdFx0YWN0aXZlOiBcIj1cIlxuXHRcdH0sXG5cdFx0bGluazogbGlua0Z1bmMsXG5cdFx0Y29udHJvbGxlcjogbG9naW5QYXNzd29yZENvbnRyb2xsZXIsXG5cdFx0Y29udHJvbGxlckFzOiAndm0nLFxuXHRcdGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcblx0fVxuXG5cdC8qIEBuZ0luamVjdCAqL1xuXHRmdW5jdGlvbiBsaW5rRnVuYyhzY29wZSwgZWwsIGF0dHIsIGN0cmwpIHt9XG5cblx0bG9naW5QYXNzd29yZENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnXTtcblx0LyogQG5nSW5qZWN0ICovXG5cdGZ1bmN0aW9uIGxvZ2luUGFzc3dvcmRDb250cm9sbGVyKCRzY29wZSwgJGxvZykge1xuXHRcdC8vZGVmaW5lIGxvY2FsIHZhcmlhYmxlc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0fVxuXG5cdC8vcGFzcyBpdCBiYWNrXG5cdHJldHVybiBkaXJlY3RpdmU7XG59IiwiLypcbipcdEZMQVZPUiBNSVhFUlxuKlxuKlx0VGhpcyBtb2R1bGUgaXMgZGVzaWduZWQgdG8gYWxsb3cgY3VzdG9tZXJzIHRvIG1peCBhbmQgbWF0Y2hcbipcdG91ciBkZWxpY2lvdXMgZmxhdm9ycyBhbmQgdG8gcGljayB0aGllciBzaXppbmcuXG4qL1xuXG5hbmd1bGFyXG5cdC5tb2R1bGUoJ2NuZScpXG5cdC5kaXJlY3RpdmUoJ2xvZ2luVXNlcm5hbWUnLCBsb2dpblVzZXJuYW1lKTtcblxuLyogQG5nSW5qZWN0ICovXG5mdW5jdGlvbiBsb2dpblVzZXJuYW1lKCkge1xuXHQvL2RlZmluZSB0aGUgZGlyZWN0aXZlXG5cdHZhciBkaXJlY3RpdmUgPSB7XG5cdFx0cmVzdHJpY3Q6IFwiQUVDTVwiLFxuXHRcdHRlbXBsYXRlVXJsOiAndmlld3MvZGlyZWN0aXZlcy9sb2dpbi11c2VybmFtZS5kaXJlY3RpdmUuaHRtJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHNjb3BlOiB7XG5cdFx0XHR1c2VybmFtZTogXCI9XCIsXG5cdFx0XHRhY3RpdmU6IFwiPVwiXG5cdFx0fSxcblx0XHRsaW5rOiBsaW5rRnVuYyxcblx0XHRjb250cm9sbGVyOiBsb2dpblVzZXJuYW1lQ29udHJvbGxlcixcblx0XHRjb250cm9sbGVyQXM6ICd2bScsXG5cdFx0YmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuXHR9XG5cblx0LyogQG5nSW5qZWN0ICovXG5cdGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgY3RybCkge31cblxuXHRsb2dpblVzZXJuYW1lQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZyddO1xuXHQvKiBAbmdJbmplY3QgKi9cblx0ZnVuY3Rpb24gbG9naW5Vc2VybmFtZUNvbnRyb2xsZXIoJHNjb3BlLCAkbG9nKSB7XG5cdFx0Ly9kZWZpbmUgbG9jYWwgdmFyaWFibGVzXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHR9XG5cblx0Ly9wYXNzIGl0IGJhY2tcblx0cmV0dXJuIGRpcmVjdGl2ZTtcbn0iLCIvKlxuKlx0RkxBVk9SIE1JWEVSXG4qXG4qXHRUaGlzIG1vZHVsZSBpcyBkZXNpZ25lZCB0byBhbGxvdyBjdXN0b21lcnMgdG8gbWl4IGFuZCBtYXRjaFxuKlx0b3VyIGRlbGljaW91cyBmbGF2b3JzIGFuZCB0byBwaWNrIHRoaWVyIHNpemluZy5cbiovXG5cbmFuZ3VsYXJcblx0Lm1vZHVsZSgnY25lJylcblx0LmRpcmVjdGl2ZSgnbG9naW5WYWxpZGF0aW9uJywgbG9naW5WYWxpZGF0aW9uKTtcblxuLyogQG5nSW5qZWN0ICovXG5mdW5jdGlvbiBsb2dpblZhbGlkYXRpb24oKSB7XG5cdC8vZGVmaW5lIHRoZSBkaXJlY3RpdmVcblx0dmFyIGRpcmVjdGl2ZSA9IHtcblx0XHRyZXN0cmljdDogXCJBRUNNXCIsXG5cdFx0dGVtcGxhdGVVcmw6ICd2aWV3cy9kaXJlY3RpdmVzL2xvZ2luLXZhbGlkYXRpb24uZGlyZWN0aXZlLmh0bScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRzY29wZToge1xuXHRcdFx0YWN0aXZlOiBcIj1cIlxuXHRcdH0sXG5cdFx0bGluazogbGlua0Z1bmMsXG5cdFx0Y29udHJvbGxlcjogbG9naW5WYWxpZGF0aW9uQ29udHJvbGxlcixcblx0XHRjb250cm9sbGVyQXM6ICd2bScsXG5cdFx0YmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuXHR9XG5cblx0LyogQG5nSW5qZWN0ICovXG5cdGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgY3RybCkge31cblxuXHRsb2dpblZhbGlkYXRpb25Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJ107XG5cdC8qIEBuZ0luamVjdCAqL1xuXHRmdW5jdGlvbiBsb2dpblZhbGlkYXRpb25Db250cm9sbGVyKCRzY29wZSwgJGxvZykge1xuXHRcdC8vZGVmaW5lIGxvY2FsIHZhcmlhYmxlc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHR9XG5cblx0Ly9wYXNzIGl0IGJhY2tcblx0cmV0dXJuIGRpcmVjdGl2ZTtcbn0iLCIvKlxuKlx0Uk9VVEVTLUNPTkZJR1xuKlxuKlx0VGhpcyBtb2R1bGUgc2V0cyB1cCBhbGwgdGhlIHJlcXVpcmVkIGFuZ3VsYXIgcm91dGVzIGZvciB0aGlzIHdlYiBhcHAuXG4qL1xuYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NuZScpXG4gICAgLmNvbmZpZyhjb25maWcpO1xuLyogQG5nSW5qZWN0ICovXG5mdW5jdGlvbiBjb25maWcoJHJvdXRlUHJvdmlkZXIpIHtcblx0JHJvdXRlUHJvdmlkZXJcblx0LndoZW4oJy8nLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbGFuZGluZ1BhZ2UuaHRtJywgICAgICAvLyd2aWV3cy9tYWluUGFnZS5odG0nXG4gICAgICAgIGNvbnRyb2xsZXI6ICdsYW5kaW5nQ29udHJvbGxlcicsICAgICAgICAgICAvLydtYWluQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgfSlcbiAgICAud2hlbignL2xvZ2luJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2xvZ2luUGFnZS5odG0nLCAgICAgIC8vJ3ZpZXdzL21haW5QYWdlLmh0bSdcbiAgICAgICAgY29udHJvbGxlcjogJ2xvZ2luQ29udHJvbGxlcicsICAgICAgICAgICAvLydtYWluQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgfSlcblx0Lm90aGVyd2lzZSh7XG4gICAgICAgIHJlZGlyZWN0VG86ICcvJ1xuICAgIH0pO1xufSJdfQ==
