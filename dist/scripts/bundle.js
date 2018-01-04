config.$inject=["$routeProvider"];var ahNuts=angular.module("cne",["ngRoute"]);angular.module("cne").controller("landingController",landingController),landingController.$inject=["$scope","$log"];function landingController(e,n){n.info("in the landing controller")}angular.module("cne").directive("flavorMixer",flavorMixer);function flavorMixer(){n.$inject=["scope","el","attr","ctrl"];var e={restrict:"AECM",templateUrl:"views/directives/falvor-mixer.directive.htm",replace:!0,scope:{},link:n,controller:r,controllerAs:"vm",bindToController:!0};function n(e,n,r,o){}r.$inject=["$scope","$log"];function r(e,n){}return e}angular.module("cne").config(config);function config(e){e.when("/",{templateUrl:"views/landingPage.htm",controller:"landingController",controllerAs:"vm"}).otherwise({redirectTo:"/"})}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvd2ViQXBwLmpzIiwic2NyaXB0cy9jb250cm9sbGVycy9sYW5kaW5nLWNvbnRyb2xsZXIuanMiLCJzY3JpcHRzL2RpcmVjdGl2ZXMvZmxhdm9yLW1peGVyLmRpcmVjdGl2ZS5qcyIsInNjcmlwdHMvcm91dGVzL3JvdXRlcy1jb25maWcuanMiXSwibmFtZXMiOlsiYWhOdXRzIiwiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCJsYW5kaW5nQ29udHJvbGxlciIsIiRpbmplY3QiLCIkc2NvcGUiLCIkbG9nIiwiaW5mbyIsImRpcmVjdGl2ZSIsImZsYXZvck1peGVyIiwicmVzdHJpY3QiLCJ0ZW1wbGF0ZVVybCIsInJlcGxhY2UiLCJzY29wZSIsImxpbmsiLCJsaW5rRnVuYyIsImZsYXZvck1peGVyQ29udHJvbGxlciIsImNvbnRyb2xsZXJBcyIsImJpbmRUb0NvbnRyb2xsZXIiLCJlbCIsImF0dHIiLCJjdHJsIiwiY29uZmlnIiwiJHJvdXRlUHJvdmlkZXIiLCJ3aGVuIiwib3RoZXJ3aXNlIiwicmVkaXJlY3RUbyJdLCJtYXBwaW5ncyI6ImtDQUNBLElBQUFBLE9BQUFDLFFBQUFDLE9BQUEsT0FBQSxZQ0RBRCxRQUNBQyxPQUFBLE9BQ0FDLFdBQUEsb0JBQUFDLG1CQUVBQSxrQkFBQUMsU0FBQSxTQUFBLFFBR0EsU0FBQUQsa0JBQUFFLEVBQUFDLEdBS0FBLEVBQUFDLEtBQUEsNkJDTEFQLFFBQ0FDLE9BQUEsT0FDQU8sVUFBQSxjQUFBQyxhQUdBLFNBQUFBLHFEQUVBLElBQUFELEdBQ0FFLFNBQUEsT0FDQUMsWUFBQSw4Q0FDQUMsU0FBQSxFQUNBQyxTQUNBQyxLQUFBQyxFQUNBYixXQUFBYyxFQUNBQyxhQUFBLEtBQ0FDLGtCQUFBLEdBSUEsU0FBQUgsRUFBQUYsRUFBQU0sRUFBQUMsRUFBQUMsSUFFQUwsRUFBQVosU0FBQSxTQUFBLFFBRUEsU0FBQVksRUFBQVgsRUFBQUMsSUFNQSxPQUFBRSxFQy9CQVIsUUFDQUMsT0FBQSxPQUNBcUIsT0FBQUEsUUFFQSxTQUFBQSxPQUFBQyxHQUNBQSxFQUNBQyxLQUFBLEtBQ0FiLFlBQUEsd0JBQ0FULFdBQUEsb0JBQ0FlLGFBQUEsT0FFQVEsV0FDQUMsV0FBQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNT0RVTEVcbnZhciBhaE51dHMgPSBhbmd1bGFyLm1vZHVsZSgnY25lJywgWyduZ1JvdXRlJ10pO1xuIiwiYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NuZScpXG4gICAgLmNvbnRyb2xsZXIoJ2xhbmRpbmdDb250cm9sbGVyJywgbGFuZGluZ0NvbnRyb2xsZXIpO1xuXG5sYW5kaW5nQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCckbG9nJ107XG5cbi8qIEBuZ0luamVjdCAqL1xuZnVuY3Rpb24gbGFuZGluZ0NvbnRyb2xsZXIoJHNjb3BlLCAkbG9nKSB7XG5cblx0Ly9kZWZpbmUgdmlldyBtb2RlbCB2YXJpYWJsZVxuXHR2YXIgdm0gPSB0aGlzO1xuXHRcblx0JGxvZy5pbmZvKCdpbiB0aGUgbGFuZGluZyBjb250cm9sbGVyJyk7XHQvL1RPRE86IFRBS0UgVEhJUyBPVVQgTEFURVJcblxuXHQvL2RlZmluZSBsb2NhbCBmdW5jdGlvbnNcblxuXHQvL3J1biB0aGUgdGVzdFxuXG5cbn0iLCIvKlxuKlx0RkxBVk9SIE1JWEVSXG4qXG4qXHRUaGlzIG1vZHVsZSBpcyBkZXNpZ25lZCB0byBhbGxvdyBjdXN0b21lcnMgdG8gbWl4IGFuZCBtYXRjaFxuKlx0b3VyIGRlbGljaW91cyBmbGF2b3JzIGFuZCB0byBwaWNrIHRoaWVyIHNpemluZy5cbiovXG5cbmFuZ3VsYXJcblx0Lm1vZHVsZSgnY25lJylcblx0LmRpcmVjdGl2ZSgnZmxhdm9yTWl4ZXInLCBmbGF2b3JNaXhlcik7XG5cbi8qIEBuZ0luamVjdCAqL1xuZnVuY3Rpb24gZmxhdm9yTWl4ZXIoKSB7XG5cdC8vZGVmaW5lIHRoZSBkaXJlY3RpdmVcblx0dmFyIGRpcmVjdGl2ZSA9IHtcblx0XHRyZXN0cmljdDogXCJBRUNNXCIsXG5cdFx0dGVtcGxhdGVVcmw6ICd2aWV3cy9kaXJlY3RpdmVzL2ZhbHZvci1taXhlci5kaXJlY3RpdmUuaHRtJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHNjb3BlOiB7fSxcblx0XHRsaW5rOiBsaW5rRnVuYyxcblx0XHRjb250cm9sbGVyOiBmbGF2b3JNaXhlckNvbnRyb2xsZXIsXG5cdFx0Y29udHJvbGxlckFzOiAndm0nLFxuXHRcdGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcblx0fVxuXG5cdC8qIEBuZ0luamVjdCAqL1xuXHRmdW5jdGlvbiBsaW5rRnVuYyhzY29wZSwgZWwsIGF0dHIsIGN0cmwpIHt9XG5cblx0Zmxhdm9yTWl4ZXJDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJ107XG5cdC8qIEBuZ0luamVjdCAqL1xuXHRmdW5jdGlvbiBmbGF2b3JNaXhlckNvbnRyb2xsZXIoJHNjb3BlLCAkbG9nKSB7XG5cdFx0Ly9kZWZpbmUgbG9jYWwgdmFyaWFibGVzXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHR9XG5cblx0Ly9wYXNzIGl0IGJhY2tcblx0cmV0dXJuIGRpcmVjdGl2ZTtcbn0iLCIvKlxuKlx0Uk9VVEVTLUNPTkZJR1xuKlxuKlx0VGhpcyBtb2R1bGUgc2V0cyB1cCBhbGwgdGhlIHJlcXVpcmVkIGFuZ3VsYXIgcm91dGVzIGZvciB0aGlzIHdlYiBhcHAuXG4qL1xuYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NuZScpXG4gICAgLmNvbmZpZyhjb25maWcpO1xuLyogQG5nSW5qZWN0ICovXG5mdW5jdGlvbiBjb25maWcoJHJvdXRlUHJvdmlkZXIpIHtcblx0JHJvdXRlUHJvdmlkZXJcblx0LndoZW4oJy8nLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbGFuZGluZ1BhZ2UuaHRtJywgICAgICAvLyd2aWV3cy9tYWluUGFnZS5odG0nXG4gICAgICAgIGNvbnRyb2xsZXI6ICdsYW5kaW5nQ29udHJvbGxlcicsICAgICAgICAgICAvLydtYWluQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgfSlcblx0Lm90aGVyd2lzZSh7XG4gICAgICAgIHJlZGlyZWN0VG86ICcvJ1xuICAgIH0pO1xufSJdfQ==
