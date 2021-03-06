var coreChargenInfoFunctions = function ($timeout, $rootScope, $translate, $scope, $location, $route, $cordovaFile ) {
		$rootScope.showChargenMenu = true;
		var currentItemLocalStorageVariable = "com.jdg.swwt2.tmp.current_chargen";
		var savedItemsLocalStorageVariable = "com.jdg.swwt2.saves.chargen";
		var optionsLocalStorageVariable = "com.jdg.swwt2.options.chargen";
		var itemType = "character";

		$scope.$route = $route;

		$scope.init = function() {
			$translate([
				'APP_TITLE', 'INDEX_BUTTON_CORE_CHAR', 'CHARGEN_SPECIALIZATION_PLACEHOLDER', 'CHARGEN_HINDRANCE_SPECIFY_PLACEHOLDER'
			]).then(
				function (translation) {

					$rootScope.title_tag = translation.INDEX_BUTTON_CORE_CHAR + " | " + translation.APP_TITLE;
					$rootScope.subtitle_tag = translation.INDEX_BUTTON_CORE_CHAR;
					$scope.specializionPlaceholder = translation.CHARGEN_SPECIALIZATION_PLACEHOLDER;
					$scope.hindranceSpecificationPlaceholder = translation.CHARGEN_HINDRANCE_SPECIFY_PLACEHOLDER;

				}
			);

			localizeDiceValues();

			if( !localStorage["users_chargen_pdf_layout"] || localStorage["users_chargen_pdf_layout"] == "")
				localStorage["users_chargen_pdf_layout"] = "landscape";

			$rootScope.savageCharacter = new savageCharacter( localStorage["users_preferred_language"] );

			if( typeof(localStorage[ currentItemLocalStorageVariable ]) != "undefined" ) {
				$rootScope.savageCharacter.importJSON( localStorage[ currentItemLocalStorageVariable ] );
			}

			$scope.characterName = $rootScope.savageCharacter.getName();
			$scope.characterDescripton = $rootScope.savageCharacter.getDescripton();
			$scope.characterBackground = $rootScope.savageCharacter.getBackground();

			$scope.selectedGender = $rootScope.savageCharacter.getGender();
			$scope.selectedRace = $rootScope.savageCharacter.getRace();

		}

		$scope.init();

		$scope.updateName = function( newValue ) {
			$rootScope.savageCharacter.setName( newValue );
			$rootScope.justSave();
		}

		$scope.updateBackground = function( newValue ) {
			$rootScope.savageCharacter.setBackground( newValue );
			$rootScope.justSave();
		}

		$scope.updateDescription = function( newValue ) {
			$rootScope.savageCharacter.setDescripton( newValue );
			$rootScope.justSave();
		}

		$scope.updateRace = function( raceObj ) {
			$rootScope.savageCharacter.setRace( raceObj.id );
			$rootScope.validateAndSave();
		}

		$scope.updateGender = function( genderObj ) {
			$rootScope.savageCharacter.setGender( genderObj.id );
			$rootScope.justSave();
		}

	}
;

angular.module("webApp").controller(
	"controllerCoreChargenInfo",
	[
		'$timeout',
		'$rootScope',
		'$translate',
		'$scope',
		'$location',
		'$route',

		coreChargenInfoFunctions
	]
);

angular.module("cordovaApp").controller(
	"controllerCoreChargenInfo",
	[
		'$timeout',
		'$rootScope',
		'$translate',
		'$scope',
		'$location',
		'$route',
		'$cordovaFile',
		coreChargenInfoFunctions
	]
);
